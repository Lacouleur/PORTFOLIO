import styled, { css } from "styled-components";
import breakpoints from "../../core/breakpoints";
import {
  ScaleDownTopLeftAnimation,
  ScaleUpTopLeftAnimation,
  mountAnimation,
} from "../atoms/mountUnmountAnim.sc";

export const GalerieImages4SquaresContainer = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.font}`};
  padding: 8px;
  max-width: 47%;
  max-height: 100%;
  display: flex;
  align-self: flex-start;
  position: relative;
`;

const regularViewMixin = css`
  z-index: 1;
  top: 0;
  position: absolute;
  ${({ imgHovered }) => {
    if (imgHovered !== undefined) return ScaleDownTopLeftAnimation;
  }}
`;

const zoomFullMixin = css`
  width: 100%;
  position: absolute;
  z-index: 2;
  ${ScaleUpTopLeftAnimation};
`;

const hoverZoomMixin = css`
  ${({ imgHovered }) => {
    if (!imgHovered) {
      return regularViewMixin;
    }
    if (imgHovered) {
      return zoomFullMixin;
    }
  }};
`;

export const SquareImg = styled.img`
  aspect-ratio: 1 / 1;
  width: 49%;
  max-height: 100%;
  align-self: center;
  ${({ imgId }) => imgId === "full" && hoverZoomMixin};
`;

export const EmptyBlock = styled.div`
  aspect-ratio: 1 / 1;
  width: 49%;
  max-height: 100%;
  align-self: center;
`;

export const ImgBox = styled.div`
  aspect-ratio: 1 / 1;
  width: 70%;
  max-height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 2%;
  position: relative;
`;

export const Descriptionbox = styled.div`
  width: 30%;
  margin-right: 8px;
  height: 100%;
  background-color: bisque;
`;
