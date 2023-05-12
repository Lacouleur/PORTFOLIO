import styled, { css } from "styled-components";
import {
  mixinAnimTopToBottom,
  mixinAnimBottomTotop,
} from "./atoms/Animations.sc";

export const FooterContainer = styled.div`
  width: 80vw;
  height: 48px;
  bottom: 0;
  position: ${({ isFooterFixed }) => isFooterFixed && "fixed"};
  background-color: ${({ theme }) => theme.colors.font};
  display: flex;
  ${({ fade, isFooterFixed }) =>
    isFooterFixed && fade === "in"
      ? mixinAnimBottomTotop
      : mixinAnimTopToBottom};

  margin-top: 32px;
  z-index: 200;
  height: ${({ isFooterFixed }) => !isFooterFixed && "48px !important"};

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    width: 95vw;
    paddin: 0 16px;
  }
`;

export const FooterCredit = styled.p`
  font: ${({ theme }) => theme.fonts.labelSmall};
  color: ${({ theme }) => theme.colors.background};
  margin: auto;
  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    padding: 0 16px;
    text-align: center;
  }
`;

export const FooterName = styled.p`
  font: ${({ theme }) => theme.fonts.labelLink};
  color: ${({ theme }) => theme.colors.accent};
  display: inline;
  font-size: 12px;
`;

export const FooterCreditBox = styled.div``;
