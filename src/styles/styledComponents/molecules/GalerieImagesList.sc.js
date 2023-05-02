import styled, { css } from "styled-components";

export const GalerieImagesListContainer = styled.div``;

export const GealerieSectionTitle = styled.h3`
  font: ${({ theme }) => theme.fonts.titlesmall};
`;

export const ImagesListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const Image = styled.img`
  flex: 1; /* additionally, equal width */
  padding: 1%;
  max-width: 50%;
`;
