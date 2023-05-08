import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  GalerieImagesListContainer,
  GalerieImagesListHeader,
  GalerieSectionDesc,
  GalerieSectionDescBox,
  GalerieSectionTitle,
  Image,
  ImageBox,
  ImagesListContainer,
} from "../../styles/styledComponents/molecules/GalerieImagesList.sc";
import texts from "../../utils/texts/texts.json";
import { dynamicUrls } from "../../utils/helpers/GalerieImageListHelpers";
import { addItemToImagesList, toggleFullView } from "../../store/redux";

function GalerieImagesList({
  galerieName,
  artworkName,
  subCollection,
  customName,
  nbOfImgs,
  customOrder,
  nbPerRow,
  noExpandLast,
  noHeader,
}) {
  const [imgsUrls, setImgsUrls] = useState([]);
  const dispatch = useDispatch();
  const askedSize = {
    side: "h",
    size: 800,
  };

  const { illustrationsImagesList } = useSelector((state) => state.main);

  useEffect(() => {
    if (illustrationsImagesList) {
      imgsUrls.map((newItem) => {
        if (illustrationsImagesList.indexOf(newItem) === -1) {
          dispatch(addItemToImagesList({ galerieName, newItem }));
        }
      });
    }
  }, [imgsUrls]);

  useEffect(() => {
    setImgsUrls(
      dynamicUrls({
        askedSize,
        nbOfImgs,
        galerieName,
        artworkName,
        subCollection,
        customOrder,
      }),
    );
  }, []);

  return (
    <GalerieImagesListContainer noHeader={noHeader}>
      <GalerieImagesListHeader>
        <GalerieSectionTitle>{customName || artworkName}</GalerieSectionTitle>
        {!subCollection && (
          <GalerieSectionDescBox>
            <GalerieSectionDesc>
              {texts[galerieName].fr.collections[artworkName]}
            </GalerieSectionDesc>
            <GalerieSectionDesc>
              {texts[galerieName].en.collections[artworkName]}
            </GalerieSectionDesc>
          </GalerieSectionDescBox>
        )}
      </GalerieImagesListHeader>

      <ImagesListContainer>
        {imgsUrls &&
          imgsUrls.length > 0 &&
          imgsUrls.map((url) => (
            <ImageBox
              onClick={() => {
                dispatch(
                  toggleFullView({
                    toogle: true,
                    url: url,
                    galerieName,
                  }),
                );
              }}
              artworkName={artworkName}
              nbPerRow={nbPerRow}
              noExpandLast={noExpandLast}
            >
              <Image key={url} src={url} artworkName={artworkName} />
            </ImageBox>
          ))}
      </ImagesListContainer>
    </GalerieImagesListContainer>
  );
}

GalerieImagesList.defaultProps = {
  customName: undefined,
  subCollection: undefined,
  nbOfImgs: undefined,
  customOrder: undefined,
  nbPerRow: undefined,
  noExpandLast: false,
  noHeader: false,
};

GalerieImagesList.propTypes = {
  galerieName: PropTypes.string.isRequired,
  artworkName: PropTypes.string.isRequired,
  nbOfImgs: PropTypes.number,
  customName: PropTypes.string,
  subCollection: PropTypes.arrayOf(
    PropTypes.shape({ subName: PropTypes.string, nbOfImgs: PropTypes.number }),
  ),
  customOrder: PropTypes.arrayOf(PropTypes.number),
  nbPerRow: PropTypes.number,
  noExpandLast: PropTypes.bool,
  noHeader: PropTypes.bool,
};

export default GalerieImagesList;