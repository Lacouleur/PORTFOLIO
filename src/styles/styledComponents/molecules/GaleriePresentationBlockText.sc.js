import styled, { css, keyframes } from "styled-components";
import SVG from "react-inlinesvg";

export const GaleriePresentationContainerNoTitleMixin = css`
  border-top: 1px solid ${({ theme }) => theme.colors.font};
  margin-bottom: 32px;
  margin-top: 16px;
  padding: 32px 0;

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin-top: 0;
  }
`;

export const GaleriePresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 32px;

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    display: flex;
    flex-direction: column;
  }
  ${({ noTitle }) => noTitle && GaleriePresentationContainerNoTitleMixin};
`;

export const GaleriePresentationTitle = styled.h2`
  font: ${({ theme }) => theme.fonts.titleMedium};
  margin-bottom: 16px;

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    margin-top: 32px;
    margin-bottom: 0px;
  }
`;

export const GaleriePrezTextBlock = styled.div`
  display: flex;
  justify-content: space-between;
  transition: max-height 500ms;
  max-height: ${({ expended }) => (expended ? "400px" : "80px")};

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    flex-direction: column;
    justify-content: space-between;
    width: max-content;
    min-height: 100%;
    width: 100%;
    max-height: 100%;
  }
`;

// MOBILE GALERIE TEXT BOX
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GalerieTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
  overflow: hidden;
  justify-content: space-between;

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    width: 100%;
    transition: max-height 500ms;
    max-height: ${({ expended }) => (expended ? "400px" : "71px")};
    margin-top: 32px;
  }
`;

export const GaleriePrezTextBody = styled.p`
  white-space: pre-wrap;
  overflow: hidden;
  font: ${({ theme }) => theme.fonts.bodyMedium};

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    overflow: ${({ expended }) => (expended ? "scroll" : "hidden")};
    font-size: 14px;
  }
`;

export const GaleriePrezAboutWraperBox = styled.div`
  margin-top: 8px;
  padding: 4px 8px;
  max-width: fit-content;
  text-align: center;
  border-radius: 5px;
  font: ${({ theme }) => theme.fonts.labelLink};
  color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.fontDimmed};
  transition: background-color 500ms ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const GaleriePrezAbouttext = styled.div``;

export const GaleriePrezAboutArrow = styled(SVG)``;
