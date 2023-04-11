import styled, { css } from "styled-components";
import { breakpoints } from "../../core/breakpoints";

export const GaleriePresentationContainer = styled.div`
  width: 50%;
  max-height: 500px;
  overflow: hidden;
`;
export const GaleriePresentationTitle = styled.h2`
  font: ${({ theme }) => theme.fonts.artTitleBig};
`;

export const GaleriePresentationTextBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const GaleriePresentationTextBody = styled.p`
  white-space: pre-wrap;
  font: ${({ theme }) => theme.fonts.bodyMedium};
  width: 49%;
`;
