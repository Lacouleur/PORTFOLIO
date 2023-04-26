import styled, { css } from "styled-components";
import breakpoints from "../core/breakpoints";

export const GaleriePageContainer = styled.div``;

const MobileGaleriesContainer = css`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
`;

export const GaleriesContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  ${breakpoints("mobile", `${MobileGaleriesContainer}`)};
`;
