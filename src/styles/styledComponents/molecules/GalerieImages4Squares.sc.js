import styled, { css } from "styled-components";
import breakpoints from "../../core/breakpoints";
import {
  ScaleDownTopLeftAnimation,
  ScaleUpTopLeftAnimation,
  mountAnimation,
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
    background-color: ${({ theme }) => `${theme.colors.font}30`};
    cursor: pointer;
  }
  ${breakpoints("mobile", `${MobileGalerieImages4SquaresContainer}`)};
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

const dispatchCard = css`
  ${({ id }) => {
    console.warn("ID", id);
    if (id === "2") {
      return "top: 0; right: 0;";
    }
    if (id === "3") {
      return "bottom: 0; left: 0;";
    }
    if (id === "4") {
      return "bottom: 0; right: 0;";
    }
  }};
`;

export const SquareImg = styled.img`
  aspect-ratio: 1 / 1;
  width: 49%;
  max-height: 100%;
  position: absolute;
  ${({ id }) => id === "1" && hoverZoomMixin};
  ${dispatchCard};
`;

export const EmptyBlock = styled.div`
  aspect-ratio: 1 / 1;
  max-height: 100%;
  align-self: center;
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
