import styled, { css } from "styled-components";

export const GalerieImagesListContainer = styled.div`
  margin-top: 16px;
  padding-top: 32px;
  border-top: ${({ theme, noHeader }) =>
    noHeader ? "none" : `1px solid ${theme.colors.font}`};
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
  width: ${({ nbPerRow }) => (nbPerRow ? `calc(99.5% / ${nbPerRow})` : "49%")};
  height: auto;
  margin-bottom: 0.5%;
  padding: 1%;
  background-color: ${({ theme }) => theme.colors.backgroundDimmed};
  border-radius: 5px;
  ${({ noExpandLast }) => noExpandLast !== true && expandLastMixin};
`;

export const Image = styled.img`
  // try to use img background//
  width: 100%;
  border-radius: ${({ artworkName }) => (artworkName === "cards" ? "5px" : 0)};
  &:hover {
    cursor: pointer;
    transform: scale(0.99);
  }
`;
