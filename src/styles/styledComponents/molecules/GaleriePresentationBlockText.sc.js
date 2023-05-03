import styled, { css } from "styled-components";
import breakpoints from "../../core/breakpoints";

export const GaleriePresentationContainer = styled.div`
  width: 100%;
  margin-top: 32px;
`;
export const GaleriePresentationTitle = styled.h2`
  font: ${({ theme }) => theme.fonts.titleMedium};
  margin-bottom: 16px;
`;

export const GaleriePresentationTextBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const GaleriePresentationTextBody = styled.p`
  white-space: pre-wrap;
  font: ${({ theme }) => theme.fonts.bodyMedium};
  width: 49%;
  max-height: 100%;
`;
