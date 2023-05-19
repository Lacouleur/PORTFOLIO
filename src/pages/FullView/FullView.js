/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  Arrow,
  Close,
  FullPageImage,
  FullViewBackground,
  FullViewContainer,
  Image,
} from "../../styles/styledComponents/FullView.sc";
import closeIcon from "../../styles/assets/icons/System/Cancel.svg";
import arrowRight from "../../styles/assets/icons/Arrow/Right.svg";
import arrowLeft from "../../styles/assets/icons/Arrow/Left.svg";
import { changeFullViewImg, toggleFullView } from "../../store/redux";
import { getImageMetaBase } from "../../utils/helpers/FullviewHelpers";
import { ImageMetas } from "../../components/atoms/ImageMetas";

function FullView({ fade }) {
  const { isFullView, device, paintingsImagesList, illustrationsImagesList } =
    useSelector((state) => state.main);
  const dispatch = useDispatch();
  const { imgInfos, galerieName, imgIndex } = isFullView;
  const [currentImagesList, setCurrentImageList] = useState(undefined);

  const ImageMetaBase = getImageMetaBase(imgInfos, galerieName);

  useEffect(() => {
    if (galerieName) {
      setCurrentImageList(
        galerieName === "paintings"
          ? paintingsImagesList
          : illustrationsImagesList,
      );
    }
  }, [galerieName]);

  return (
    <FullViewContainer fade={fade}>
      <Close
        width={128}
        src={closeIcon}
        onClick={() => dispatch(toggleFullView({ toogle: false }))}
      />
      <Arrow
        src={arrowRight}
        direction="right"
        onClick={() => dispatch(changeFullViewImg("next"))}
      />
      <Arrow
        src={arrowLeft}
        direction="left"
        onClick={() => dispatch(changeFullViewImg("previous"))}
      />

      <FullPageImage
        src={imgInfos?.url.replace(/\/tr:[A-Za-z]-[0-9]+/i, "")}
        onClick={() => {
          if (device !== "mobile") {
            dispatch(changeFullViewImg("next"));
          }
        }}
      />

      {ImageMetaBase && device !== "mobile" && (
        <ImageMetas
          titleFr={ImageMetaBase.title.fr}
          titleEn={ImageMetaBase.title.en}
          medium={ImageMetaBase.medium}
          subtitleFr={ImageMetaBase.subtitle.fr}
          subtitleEn={ImageMetaBase.subtitle.en}
        />
      )}

      <FullViewBackground
        filter="blur(10px) sepia(50%)"
        onClick={() =>
          dispatch(
            toggleFullView({ toogle: false, imgInfos: {}, galerieName: "" }),
          )
        }
      />
    </FullViewContainer>
  );
}

/* FullView.defaultProps = {
  position: undefined,
}; */

FullView.propTypes = {
  fade: PropTypes.string.isRequired,
};

export default FullView;

{
  /* <>
<ImageInfosContainer align="left">
  <ImageTitle>{ImageMetaBase.title.fr}</ImageTitle>
  <ImageSubTitle>{ImageMetaBase.subtitle.fr}</ImageSubTitle>

  <ImageMeta>{`${ImageMetaBase.medium}`}</ImageMeta>
</ImageInfosContainer>
<ImageInfosContainer align="right">
  <ImageTitle>{ImageMetaBase.title.en}</ImageTitle>
  <ImageSubTitle>{ImageMetaBase.subtitle.en}</ImageSubTitle>

  <ImageMeta>{`${ImageMetaBase.medium}`}</ImageMeta>
</ImageInfosContainer>
</> */
}
