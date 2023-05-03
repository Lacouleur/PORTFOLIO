import styled, { css } from "styled-components";

export const GalerieImagesListContainer = styled.div`
  margin-top: 16px;
  padding-top: 32px;
  border-top: 1px solid ${({ theme }) => theme.colors.font};
`;

export const GalerieImagesListHeader = styled.div`
  margin-bottom: 32px;
`;

export const GalerieSectionDescBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const GalerieSectionDesc = styled.p`
  font: ${({ theme }) => theme.fonts.bodyMedium};
  width: 49%;
`;

export const GalerieSectionTitle = styled.h3`
  font: ${({ theme }) => theme.fonts.titlesmall};
  margin-bottom: 16px;
`;

export const ImagesListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

export const expandLastMixin = css`
  &:last-child {
    //use neExpandLast to avoid expending last image of this cat
    width: 100%;
  }
`;

export const ImageBox = styled.div`
  // try to use img background//
  display: block;
  aspect-ratio: 16/9;
  width: ${({ nbPerRow }) => (nbPerRow ? `calc(98% / ${nbPerRow})` : "49%")};
  height: auto;
  margin-bottom: 2%;

  ${({ noExpandLast }) => noExpandLast !== true && expandLastMixin};
`;

export const Image = styled.img`
  // try to use img background//
  width: 100%;
  border-radius: ${({ artworkName }) => (artworkName === "cards" ? "5px" : 0)};
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }
`;
