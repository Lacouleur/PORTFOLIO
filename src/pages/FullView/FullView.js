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
} from "../../styles/styledComponents/FullView.sc";
import closeIcon from "../../styles/assets/icons/System/Cancel.svg";
import arrowRight from "../../styles/assets/icons/Arrow/Right.svg";
import arrowLeft from "../../styles/assets/icons/Arrow/Left.svg";
import "swiper/swiper-bundle.css";

import { changeFullViewImg, toggleFullView } from "../../store/redux";

function FullView({ fade }) {
  const { isFullView, device, paintingsImagesList } = useSelector(
    (state) => state.main,
  );
  const dispatch = useDispatch();

  const swiperOptions = {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    // loop: true
    // autoplay: {
    //   delay: 1500,
    //   disableOnInteraction: false
    // }
  };

  return (
    <FullViewContainer fade={fade}>
      <Close
        width={128}
        src={closeIcon}
        onClick={() =>
          dispatch(toggleFullView({ toogle: false, url: "", galerieName: "" }))
        }
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
          src={isFullView.url}
          onClick={() => dispatch(changeFullViewImg("next"))}
        />
      )}

      {device === "mobile" && (
        <SwiperContainer>
          <Swiper {...swiperOptions}>
            {paintingsImagesList.map((img, index) => (
              <SwiperSlide key={`${img}-galerieFull`}>
                <Image src={img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      )}

      <FullViewBackground
        filter="blur(10px) sepia(50%)"
        onClick={() =>
          dispatch(toggleFullView({ toogle: false, url: "", galerieName: "" }))
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
