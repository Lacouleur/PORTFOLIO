import styled, { css } from "styled-components";
import breakpoints from "../core/breakpoints";

const GaleriePageContainerIllustrationsMixin = css`
  border-top: 3px solid ${({ theme }) => theme.colors.accent};
  margin-top: 64px;
`;

export const GaleriePageContainer = styled.div`
  ${({ id }) =>
    id === "illustrations" && GaleriePageContainerIllustrationsMixin}
`;

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
