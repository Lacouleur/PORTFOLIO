/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Arrow,
  Close,
  FullPageImage,
  FullViewBackground,
  FullViewContainer,
  SwiperContainer,
  Image,
  ImageInfosContainer,
  ImageTitle,
  ImageSubTitle,
  ImageMeta,
} from "../../styles/styledComponents/FullView.sc";
import closeIcon from "../../styles/assets/icons/System/Cancel.svg";
import arrowRight from "../../styles/assets/icons/Arrow/Right.svg";
import arrowLeft from "../../styles/assets/icons/Arrow/Left.svg";
import "swiper/swiper-bundle.css";
import { changeFullViewImg, toggleFullView } from "../../store/redux";
import { getImageMetaBase } from "../../utils/helpers/FullviewHelpers";

function FullView({ fade }) {
  const { isFullView, device, paintingsImagesList, illustrationsImagesList } =
    useSelector((state) => state.main);
  const dispatch = useDispatch();
  const { imgInfos, galerieName, imgIndex } = isFullView;

  const ImageMetaBase = getImageMetaBase(imgInfos, galerieName);

  /* 
  console.warn("TEXT", illustrationsInfos.cards); */
  const currentImagesList =
    galerieName === "paintings" ? paintingsImagesList : illustrationsImagesList;

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
      {device !== "mobile" && (
        <FullPageImage
          src={imgInfos?.url}
          onClick={() => dispatch(changeFullViewImg("next"))}
        />
      )}

      {device === "mobile" && (
        <SwiperContainer>
          <Swiper
            slidesPerView="auto"
            centeredSlides
            spaceBetween={20}
            loop
            initialSlide={imgIndex}
          >
            {currentImagesList.map((img, index) => (
              <SwiperSlide key={`${img.url}-galerieFull`}>
                <Image
                  src={img.url}
                  borderRadius={img.meta.title === "cards"}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      )}
      {ImageMetaBase && device !== "mobile" && (
        <>
          <ImageInfosContainer align="left">
            <ImageTitle>{ImageMetaBase.title.fr}</ImageTitle>
            <ImageSubTitle>{ImageMetaBase.subtitle.fr}</ImageSubTitle>

            <ImageMeta>{`${imgInfos.meta.title} - ${ImageMetaBase.medium}`}</ImageMeta>
          </ImageInfosContainer>
          <ImageInfosContainer align="right">
            <ImageTitle>{ImageMetaBase.title.en}</ImageTitle>
            <ImageSubTitle>{ImageMetaBase.subtitle.en}</ImageSubTitle>

            <ImageMeta>{`${imgInfos.meta.title} - ${ImageMetaBase.medium}`}</ImageMeta>
          </ImageInfosContainer>
        </>
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
