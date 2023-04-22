import styled, { css } from "styled-components";
import breakpoints from "../core/breakpoints";

export const GaleriePageContainer = styled.div`
  padding-right: 32px;
`;

export const GaleriePageSection = styled.div``;

const MobileGaleriesContainer = css`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  width: 100%;
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
