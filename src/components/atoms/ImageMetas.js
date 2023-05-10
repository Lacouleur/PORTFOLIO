import React from "react";
import PropTypes, { shape } from "prop-types";
import {
  ImageInfosContainer,
  ImageMeta,
  ImageSubTitle,
  ImageTitle,
} from "../../styles/styledComponents/FullView.sc";

function ImageMetas(titleFr, titleEn, medium, subtitleFr, subtitleEn, CategoryTitle) {
  return (
    <>
    <ImageMeta
titleFr={}
titleEn={}
medium={}
subtitleFr={}
subtitleEn={}

    />
      <ImageInfosContainer align="left">
        <ImageTitle>{infosText.title.fr}</ImageTitle>
        <ImageSubTitle>{infosText.subtitle.fr}</ImageSubTitle>

        <ImageMeta>{`${CategoryTitle} - ${infosText.medium}`}</ImageMeta>
      </ImageInfosContainer>
      <ImageInfosContainer align="right">
        <ImageTitle>{infosText.title.en}</ImageTitle>
        <ImageSubTitle>{infosText.subtitle.en}</ImageSubTitle>

        <ImageMeta>{`${CategoryTitle} - ${infosText.medium}`}</ImageMeta>
      </ImageInfosContainer>
    </>
  );
}

ImageMetas.defaultProps = {};

ImageMetas.propTypes = {};

export default ImageMetas;
