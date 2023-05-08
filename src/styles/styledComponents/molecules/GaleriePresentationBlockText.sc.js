import styled, { css, keyframes } from "styled-components";
import SVG from "react-inlinesvg";
import breakpoints from "../../core/breakpoints";

export const GaleriePresentationContainer = styled.div`
  width: 100%;
  margin-top: 32px;
`;
export const GaleriePresentationTitle = styled.h2`
  font: ${({ theme }) => theme.fonts.titleMedium};
  margin-bottom: 16px;
`;

export const GaleriePrezTextBlock = styled.div`
  display: flex;
  justify-content: space-between;
  transition: max-height 500ms;
  max-height: ${({ expended }) => (expended ? "400px" : "100px")};
`;

export const GaleriePrezTextBody = styled.p`
  white-space: pre-wrap;
  overflow: hidden;
  font: ${({ theme }) => theme.fonts.bodyMedium};
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

export const GalerieTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
  overflow: hidden;
  justify-content: space-between;
`;
