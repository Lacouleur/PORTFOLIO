import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GalerieImagesListContainer,
  GalerieImagesListHeader,
  GalerieSectionDesc,
  GalerieSectionDescBox,
  GalerieSectionTitle,
  GealerieSectionTitle,
  Image,
  ImageBox,
  ImagesListContainer,
} from "../../styles/styledComponents/molecules/GalerieImagesList.sc";
import texts from "../../utils/texts/texts.json";
import { dynamicUrls } from "../../utils/helpers/GalerieImageListHelpers";

function GalerieImagesList({
  galerieName,
  artworkName,
  subCollection,
  customName,
  nbOfImgs,
  customOrder,
  nbPerRow,
  noExpandLast,
}) {
  const [imgsUrls, setImgsUrls] = useState([]);
  const askedSize = {
    side: "h",
    size: 800,
  };

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
    <GalerieImagesListContainer>
      <GalerieImagesListHeader>
        <GalerieSectionTitle>{customName || artworkName}</GalerieSectionTitle>
        <GalerieSectionDescBox>
          <GalerieSectionDesc>
            {texts[galerieName].fr.collections[artworkName]}
          </GalerieSectionDesc>
          <GalerieSectionDesc>
            {texts[galerieName].en.collections[artworkName]}
          </GalerieSectionDesc>
        </GalerieSectionDescBox>
      </GalerieImagesListHeader>

      <ImagesListContainer>
        {imgsUrls &&
          imgsUrls.length > 0 &&
          imgsUrls.map((url) => (
            <ImageBox
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
};

export default GalerieImagesList;
