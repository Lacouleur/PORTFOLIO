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
import { ReactZoom } from "../../styles/styledComponents/FullView.sc";

function GalerieImagesList({
  galerieName,
  artWorkCategory,
  subCollection,
  customName,
  nbOfImgs,
  customOrder,
  nbPerRow,
  noExpandLast,
  noHeader,
  roundedBorders,
}) {
  const [imgsInfos, setimgsInfos] = useState([]);
  const { device } = useSelector((state) => state.main);
  const dispatch = useDispatch();
  const askedSize = {
    side: "w",
    size: 800,
  };

  const { illustrationsImagesList } = useSelector((state) => state.main);

  useEffect(() => {
    if (illustrationsImagesList) {
      imgsInfos.map((newItem) => {
        if (illustrationsImagesList.indexOf(newItem) === -1) {
          dispatch(addItemToImagesList({ galerieName, newItem }));
        }
      });
    }
  }, [imgsInfos]);

  useEffect(() => {
    setimgsInfos(
      dynamicUrls({
        askedSize,
        nbOfImgs,
        galerieName,
        artWorkCategory,
        subCollection,
        customOrder,
      }),
    );
  }, []);

  return (
    <GalerieImagesListContainer noHeader={noHeader}>
      <GalerieImagesListHeader>
        <GalerieSectionTitle>
          {customName || artWorkCategory}
        </GalerieSectionTitle>
        {!subCollection && (
          <GalerieSectionDescBox>
            <GalerieSectionDesc>
              {texts[galerieName].fr.collections[artWorkCategory]}
            </GalerieSectionDesc>
            <GalerieSectionDesc>
              {texts[galerieName].en.collections[artWorkCategory]}
            </GalerieSectionDesc>
          </GalerieSectionDescBox>
        )}
      </GalerieImagesListHeader>

      <ImagesListContainer>
        {imgsInfos &&
          imgsInfos.length > 0 &&
          imgsInfos.map((infos, index) => (
            <>
              {device === "mobile" && (
                <ImageBox
                  key={`${infos.url}${Math.random()}`}
                  artWorkCategory={artWorkCategory}
                  nbPerRow={nbPerRow}
                  noExpandLast={noExpandLast}
                >
                  <ReactZoom>
                    <Image
                      // allow to charge full frame image on last line
                      src={
                        imgsInfos.length - 1 === index && !noExpandLast
                          ? infos.url.replace(/\/tr:[A-Za-z]-[0-9]+/i, "")
                          : infos.url
                      }
                      alt={`jaune lacouleur artist rpg jdr jeux illustrateur illustration artwork JauneLacouleur ${artWorkCategory}`}
                      artWorkCategory={artWorkCategory}
                      roundedBorders={roundedBorders}
                    />
                  </ReactZoom>
                </ImageBox>
              )}
              {device !== "mobile" && (
                <ImageBox
                  onClick={() => {
                    dispatch(
                      toggleFullView({
                        toogle: true,
                        imgInfos: infos,
                        galerieName,
                      }),
                    );
                  }}
                  key={`${infos.url}${Math.random()}`}
                  artWorkCategory={artWorkCategory}
                  nbPerRow={nbPerRow}
                  noExpandLast={noExpandLast}
                >
                  <Image
                    // allow to charge full frame image on last line
                    src={
                      imgsInfos.length - 1 === index && !noExpandLast
                        ? infos.url.replace(/\/tr:[A-Za-z]-[0-9]+/i, "")
                        : infos.url
                    }
                    alt={`jaune lacouleur artist rpg jdr jeux illustrateur illustration artwork JauneLacouleur ${artWorkCategory}`}
                    artWorkCategory={artWorkCategory}
                    roundedBorders={roundedBorders}
                  />
                </ImageBox>
              )}
            </>
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
  roundedBorders: false,
};

GalerieImagesList.propTypes = {
  galerieName: PropTypes.string.isRequired,
  artWorkCategory: PropTypes.string.isRequired,
  nbOfImgs: PropTypes.number,
  customName: PropTypes.string,
  subCollection: PropTypes.arrayOf(
    PropTypes.shape({ subName: PropTypes.string, nbOfImgs: PropTypes.number }),
  ),
  customOrder: PropTypes.arrayOf(PropTypes.number),
  nbPerRow: PropTypes.number,
  noExpandLast: PropTypes.bool,
  noHeader: PropTypes.bool,
  roundedBorders: PropTypes.bool,
};

export default GalerieImagesList;
