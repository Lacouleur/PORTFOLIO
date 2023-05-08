import styled, { css } from "styled-components";
import breakpoints from "../../core/breakpoints";
import {
  ScaleDownBottomLeftAnimation,
  ScaleDownBottomRightAnimation,
  ScaleDownTopLeftAnimation,
  ScaleDownTopRightAnimation,
  ScaleUpBottomLeftAnimation,
  ScaleUpBottomRightAnimation,
  ScaleUpTopLeftAnimation,
  ScaleUpTopRightAnimation,
} from "../atoms/mountUnmountAnim.sc";

export const MobileGalerieImages4SquaresContainer = css`
  border: ${({ theme }) => `1px solid ${theme.colors.font}`};
  border-radius: 5px;
  padding: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  position: relative;
  margin-bottom: 24px;
  aspect-ratio: 1/1;
  background-color: transparent;
  transition: background-color 400ms ease;

  &:hover {
    border: ${({ theme }) => `2px solid ${theme.colors.accent}`};
    background-color: ${({ theme }) => `${theme.colors.font}30`};
    cursor: pointer;
  }
`;

export const GalerieImages4SquaresContainer = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.font}`};
  border-radius: 5px;
  padding: 8px;
  width: 49%;
  display: flex;
  align-self: flex-start;
  position: relative;
  margin-bottom: 24px;
  aspect-ratio: 4 / 2.8;
  background-color: transparent;
  transition: background-color 400ms ease;

  &:hover {
    border: ${({ theme }) => `2px solid ${theme.colors.accent}`};
    background-color: ${({ theme }) => theme.colors.backgroundDimmed};
    cursor: pointer;
  }
  ${breakpoints("mobile", `${MobileGalerieImages4SquaresContainer}`)};
`;

const zoomFullMixin = css`
  width: 100%;
  position: absolute;
  ${ScaleUpTopLeftAnimation};
`;

const dispatchCard = css`
  ${({ id, imgHovered, lastImgHovered }) => {
    if (id === 1) {
      if (id !== imgHovered && lastImgHovered !== id) {
        return "top: 0; left: 0;";
      }
      if (id === imgHovered) {
        return ScaleUpTopLeftAnimation;
      }
      if (id === lastImgHovered) {
        return ScaleDownTopLeftAnimation;
      }
    }
    if (id === 2) {
      if (id !== imgHovered && lastImgHovered !== id) {
        return "top: 0; right: 0;";
      }
      if (id === imgHovered) {
        return ScaleUpTopRightAnimation;
      }
      if (id === lastImgHovered) {
        return ScaleDownTopRightAnimation;
      }
    }
    if (id === 3) {
      if (id !== imgHovered && lastImgHovered !== id) {
        return "bottom: 0; left: 0;";
      }
      if (id === imgHovered) {
        return ScaleUpBottomLeftAnimation;
      }
      if (id === lastImgHovered) {
        return ScaleDownBottomLeftAnimation;
      }
    }
    if (id === 4) {
      if (id !== imgHovered && lastImgHovered !== id) {
        return "bottom: 0; right: 0;";
      }
      if (id === imgHovered) {
        return ScaleUpBottomRightAnimation;
      }
      if (id === lastImgHovered) {
        return ScaleDownBottomRightAnimation;
      }
    }
    /*     } else {
      return hoverZoomSelectorMixin;
    } */
  }};
`;

export const SquareImg = styled.img`
  aspect-ratio: 1 / 1;
  width: 49%;
  max-height: 100%;
  position: absolute;
  ${({ id, imgHovered }) => id === imgHovered && zoomFullMixin};
  ${dispatchCard};
`;

export const ImgBox = styled.div`
  aspect-ratio: 1 / 1;
  width: 70%;
  height: 100%;
  position: relative;
`;

export const Descriptionbox = styled.div`
  width: 40%;
  overflow: hidden;
  margin-right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ArtworkTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  hyphens: auto;
`;

export const ArtworkTitleText = styled.p`
  font: ${({ theme }) => theme.fonts.artTitleMedium};
  text-transform: capitalize;
  white-space: break-spaces;
  hyphens: auto;
`;
export const ArtworkTitleSize = styled.p`
  font: ${({ theme }) => theme.fonts.labelSmall};
  color: ${({ theme }) => theme.colors.fontDimmed};
`;

export const ArtworkAboutBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  hyphens: auto;
`;
export const ArtworkAboutText = styled.p`
  font: ${({ theme }) => theme.fonts.labelSmall};
  color: ${({ theme }) => theme.colors.fontDimmed};
`;
