import React from "react";
import PropTypes from "prop-types";
import {
  ImageInfosContainer,
  ImageMedium,
  ImageMetaBox,
  ImageMetaContainer,
  ImageSubTitle,
  ImageTitle,
} from "../../styles/styledComponents/FullView.sc";

export function ImageMetas({
  titleFr,
  titleEn,
  medium,
  subtitleFr,
  subtitleEn,
}) {
  return (
    <ImageMetaContainer>
      <ImageMetaBox />
      <ImageInfosContainer align="left">
        <ImageTitle>{titleFr}</ImageTitle>
        <ImageSubTitle>{subtitleFr}</ImageSubTitle>
        <ImageMedium>{medium}</ImageMedium>
      </ImageInfosContainer>
      <ImageInfosContainer align="right">
        <ImageTitle>{titleEn}</ImageTitle>
        <ImageSubTitle>{subtitleEn}</ImageSubTitle>
        <ImageMedium>{medium}</ImageMedium>
      </ImageInfosContainer>
    </ImageMetaContainer>
  );
}

ImageMetas.defaultProps = {};

ImageMetas.propTypes = {
  titleFr: PropTypes.string.isRequired,
  titleEn: PropTypes.string.isRequired,
  medium: PropTypes.string.isRequired,
  subtitleFr: PropTypes.string.isRequired,
  subtitleEn: PropTypes.string.isRequired,
};

export default ImageMetas;
