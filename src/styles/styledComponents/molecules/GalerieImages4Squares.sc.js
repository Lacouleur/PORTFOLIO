import styled, { css } from "styled-components";
import { breakpoints } from "../../core/breakpoints";

export const GalerieImages4SquaresContainer = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.font}`};
  padding: 8px;
  max-width: 47%;
  max-height: 100%;
  display: flex;
  align-self: flex-start;
`;
export const SquareImg = styled.img`
  aspect-ratio: 1 / 1;
  width: 49%;
  max-height: 100%;
  align-self: center;
`;

export const ImgBox = styled.div`
  aspect-ratio: 1 / 1;
  width: 70%;
  max-height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
`;

export const Descriptionbox = styled.div`
  width: 30%;
  margin-right: 8px;
  height: 100%;
  background-color: bisque;
`;
