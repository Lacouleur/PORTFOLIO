import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GalerieImagesListContainer,
  GealerieSectionTitle,
  Image,
  ImagesListContainer,
} from "../../styles/styledComponents/molecules/GalerieImagesList.sc";
import urlBuilder from "../../utils/helpers/urlBuilder";
import { dynamicUrls } from "../../utils/helpers/GalerieImageListHelpers";

function GalerieImagesList({
  galerieName,
  artworkName,
  subCollection,
  customName,
  nbOfImgs,
}) {
  const [imgsUrls, setImgsUrls] = useState([]);
  const askedSize = {
    side: "h",
    size: 600,
  };

  useEffect(() => {
    setImgsUrls(
      dynamicUrls(askedSize, nbOfImgs, galerieName, artworkName, subCollection),
    );
  }, []);

  return (
    <GalerieImagesListContainer>
      <GealerieSectionTitle>{customName || artworkName}</GealerieSectionTitle>
      <ImagesListContainer>
        {imgsUrls &&
          imgsUrls.length > 0 &&
          imgsUrls.map((url) => <Image key={url} src={url} />)}
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
