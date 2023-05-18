import styled, { css } from "styled-components";
import {
  ScaleDownBottomLeftAnimation,
  ScaleDownBottomRightAnimation,
  ScaleDownTopLeftAnimation,
  ScaleDownTopRightAnimation,
  ScaleUpBottomLeftAnimation,
  ScaleUpBottomRightAnimation,
  ScaleUpTopLeftAnimation,
  ScaleUpTopRightAnimation,
} from "../atoms/Animations.sc";

export const GalerieImages4SquaresContainer = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.fontDimmed}`};
  border-radius: 5px;
  padding: 8px;
  width: 49%;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  position: relative;
  margin-bottom: 24px;
  aspect-ratio: 1 / 1;
  background-color: transparent;
  transition: background-color 400ms ease;

  &:hover {
    border: ${({ theme }) => `2px solid ${theme.colors.accent}`};
    background-color: ${({ theme }) => theme.colors.backgroundDimmed};
    cursor: pointer;
  }

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    width: 100%;
    margin: 16px 0 32px 0;
    flex-direction: column;
    aspect-ratio: 1 / 1;
    border: none;
    border-radius: 0;
    border-top: ${({ theme }) => `1px solid ${theme.colors.fontDimmed}`};
    min-width: 300px;
    padding: 0;
  }
`;

// HORIZONTAL 4squares GALERY
/* export const GalerieImages4SquaresContainer = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.fontDimmed}`};
  border-radius: 5px;
  padding: 8px;
  width: 49%;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
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

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    width: 100%;
    margin: 16px 0 32px 0;
    flex-direction: column;
    aspect-ratio: 1 / 1;
    border: none;
    border-radius: 0;
    border-top: ${({ theme }) => `1px solid ${theme.colors.fontDimmed}`};
    min-width: 300px;
    padding: 0;
  }
`; */

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
  width: 100%;
  height: 100%;
  position: relative;

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    width: 100%;
  }
`;

export const Descriptionbox = styled.div`
  width: 100%;
  overflow: hidden;
  margin-right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    width: 100%;
    margin-bottom: 16px;
    margin-top: 16px;
  }
`;

export const ArtworkTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  hyphens: auto;
  margin-bottom: 32px;

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 16px;
  }
`;

export const ArtworkTitleText = styled.p`
  font: ${({ theme }) => theme.fonts.artTitleMedium};
  font-size: 30px;
  text-transform: capitalize;
  white-space: break-spaces;

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    margin-right: 16px;
    font: ${({ theme }) => theme.fonts.artTitleMedium};
  }
`;

export const ArtworkTitleSize = styled.p`
  font: ${({ theme }) => theme.fonts.labelSmall};
  color: ${({ theme }) => theme.colors.fontDimmed};

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    margin-bottom: 2px;
  }
`;

export const ArtworkAboutBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  hyphens: auto;

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    display: none;
  }
`;
export const ArtworkAboutText = styled.p`
  margin-top: 16px;
  font: ${({ theme }) => theme.fonts.labelSmall};
  color: ${({ theme }) => theme.colors.fontDimmed};
  font-size: 10px;
`;
