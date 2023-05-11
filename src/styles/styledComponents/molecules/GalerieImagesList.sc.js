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
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;

export const expandLastMixin = css`
  &:last-child {
    //use neExpandLast to avoid expending last image of this cat
    flex: 0 100%;
  }
`;
export const Image = styled.img`
  align-self: center;
  width: 100%;
  border-radius: ${({ roundedBorders }) => roundedBorders && "10px"};
`;

export const ImageBox = styled.div`
  display: flex;
  flex: 0
    ${({ nbPerRow }) =>
      nbPerRow ? `calc(99% / ${nbPerRow})` : `calc(99% / 2)`};
  height: auto;
  margin: ${({ nbPerRow }) =>
    nbPerRow ? `calc((1% / ${nbPerRow}) / 2)` : `calc((1% / 2) / 2)`};
  padding: 0.5%;
  background-color: ${({ theme }) => theme.colors.backgroundDimmed};
  border-radius: 5px;
  ${({ noExpandLast }) => noExpandLast !== true && expandLastMixin};
  &:hover {
    background-color: #c1b6ac;

    & ${Image} {
      cursor: pointer;
      transform: scale(0.99);
    }
  }

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    flex: 0 100%;
    padding: 0;
    margin-bottom: 8px;
    background-color: transparent;
    border-radius: 5px;
    ${({ noExpandLast }) => noExpandLast !== true && expandLastMixin};
  }
`;
