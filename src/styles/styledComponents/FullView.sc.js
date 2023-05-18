import styled, { css } from "styled-components";
import SVG from "react-inlinesvg";
import { mountAnimation, unMountAnimation } from "./atoms/Animations.sc";

export const FullViewContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 100;
  backdrop-filter: blur(5px);
  ${({ fade }) => (fade === "in" ? mountAnimation : unMountAnimation)};
`;

export const Close = styled(SVG)`
  z-index: 105;
  position: absolute;
  right: 32px;
  top: 32px;
  transform: scale(2);
  width: 24px;
  opacity: 0.8;
  transition: transform 100ms ease;
  cursor: pointer;

  & path {
    fill: ${({ theme }) => theme.colors.white};
  }
  &:hover {
    opacity: 1;
    transform: rotate(0.25turn) scale(2);
  }

  /*   // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    top: auto;
    bottom: 10vh;
    left: 50%;
    transform: translate(-50%) scale(2);
    opacity: 1;
    &:hover {
      transform: translate(-50%) rotate(0.25turn) scale(2);
    }
  } */

  // MOBILE HORIZONTAL
  @media (max-height: 500px) {
    right: 32px;
    top: 32px;
    left: auto;
    transform: translate(-50%) scale(2);
    opacity: 1;

    &:hover {
      transform: rotate(0.25turn) scale(2);
    }
  }
`;

export const FullPageImage = styled.img`
  position: absolute;
  z-index: 104;
  transform: translate(-50%, -50%);
  top: 50%;
  right: 50%;
  left: 50%;
  bottom: 50%;
  max-height: 90vh;
  max-width: 70vw;
  cursor: pointer;
`;

export const FullViewBackground = styled.div`
  z-index: 100;
  top: 0;
  background-color: ${({ theme }) => theme.colors.dark};
  width: 100%;
  height: 100%;
  opacity: 0.8;
  backdrop-filter: blur(10px);
`;

const arrowRight = css`
  right: 32px;
`;
const arrowLeft = css`
  left: 32px;
`;
export const Arrow = styled(SVG)`
  position: absolute;
  z-index: 105;
  transform: scale(3);
  top: 50%;
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transform: scale(3.1);
  }

  ${({ direction }) => (direction === "right" ? arrowRight : arrowLeft)};
  & path {
    fill: ${({ theme }) => theme.colors.white};
  }

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    display: none;
  }
`;

export const SwiperContainer = styled.div`
  .swiper {
    z-index: 102;
    position: absolute;
    bottom: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;

    &-wrapper {
      height: 100%;
      display: flex;
      width: auto;
      align-items: center;
    }

    &-horizontal {
      touch-action: pan-y pinch-zoom;
    }

    &-slide {
      height: auto;
      width: auto;
      max-width: 90vw;
      max-height: 90vh;
      border-radius: ${({ borderRadius }) => borderRadius && "10px"};
      touch-action: manipulation;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 90vh;
`;

export const ImageInfosContainer = styled.div`
  & :first-letter {
    text-transform: uppercase;
  }

  z-index: 109;
  position: absolute;
  width: 15%;
  max-width: 300px;
  right: ${({ align }) => align === "right" && "20px"};
  left: ${({ align }) => align === "left" && "20px"};
  text-align: ${({ align }) => align};
  bottom: 10px;
  color: ${({ theme }) => theme.colors.white};
`;

export const ImageTitle = styled.p`
  font: ${({ theme }) => theme.fonts.titleTiny};
  line-height: 30px;
`;
export const ImageSubTitle = styled.p`
  font: ${({ theme }) => theme.fonts.labelSmall};
  font-size: 12px;
`;
export const ImageMedium = styled.p`
  font: ${({ theme }) => theme.fonts.labelLink};
  font-size: 11px;
  line-height: 30px;
`;

export const ImageMetaContainer = styled.div``;

export const ImageMetaBox = styled.div``;
