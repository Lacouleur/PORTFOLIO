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

const handleOrder = (customOrder, imgsUrls) => {
  customOrder.map((target) => {
    const targetItem = imgsUrls.find((i) => i.num === Number(target));
    const shorterList = arr.filter((i) => i.num !== Number(target));
    const newArr = [targetItem, ...shorterList];
    console.log(newArr);

    setArr(newArr);
  });
};

function GalerieImagesList({
  galerieName,
  artworkName,
  subCollection,
  customName,
  nbOfImgs,
  customOrder,
}) {
  const [imgsUrls, setImgsUrls] = useState([]);
  const askedSize = {
    side: "h",
    size: 800,
  };

  useEffect(() => {
    if (imgsUrls.length === nbOfImgs && imgsUrls !== customOrder) {
      handleOrder([3, 1, 2], imgsUrls);
    }
  }, [imgsUrls.length === nbOfImgs]);

  useEffect(() => {
    setImgsUrls(
      dynamicUrls(askedSize, nbOfImgs, galerieName, artworkName, subCollection),
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

      <ImagesListContainer id="ImagesListContainer">
        {imgsUrls &&
          imgsUrls.length > 0 &&
          imgsUrls.map((url) => (
            <ImageBox artworkName={artworkName}>
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
};

GalerieImagesList.propTypes = {
  galerieName: PropTypes.string.isRequired,
  artworkName: PropTypes.string.isRequired,
  nbOfImgs: PropTypes.number,
  customName: PropTypes.string,
  subCollection: PropTypes.arrayOf(
    PropTypes.shape({ subName: PropTypes.string, nbOfImgs: PropTypes.number }),
  ),
};

export default GalerieImagesList;
