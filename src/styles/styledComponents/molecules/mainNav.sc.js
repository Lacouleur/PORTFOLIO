import styled, { css } from "styled-components";
import SVG from "react-inlinesvg";
import {
  mixinAnimLeftToRight,
  mixinAnimRightToLeft,
} from "../atoms/Animations.sc";

const HomeNavMixin = css`
  padding-right: 32px;
  margin-top: 64px;
  height: 100%;
`;

const GalerieNavMixin = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const FixedNavMixin = css`
  position: fixed;
  top: 48px;
  display: flex;
  flex-direction: row;
  width: 80vw;
  max-width: 1500px;
  justify-content: space-between;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const NavContainer = styled.div`
  ${({ stylevariant }) => stylevariant === "home" && HomeNavMixin};
  ${({ stylevariant, fixedVersion }) =>
    stylevariant === "galerie" && fixedVersion
      ? FixedNavMixin
      : GalerieNavMixin};
  ${({ stylevariant }) => stylevariant === "fixed" && FixedNavMixin};
  min-width: 300px;
`;

const GalerieNavTextMixin = css`
  z-index: 5;
  font: ${({ theme }) => theme.fonts.titleMedium};
  color: ${({ theme }) => theme.colors.font};
  text-align: start;
  align-self: center;
  margin-right: 12px;
  text-transform: capitalize;

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    font-size: 3.5vw;
    margin: auto;
  }
`;

export const NavText = styled.p`
  ${({ stylevariant }) => stylevariant === "galerie" && GalerieNavTextMixin};
`;

export const SpanNav = styled.span`
  display: inline;
  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    text-align: center;
    line-height: 2px;
  }
`;

const GalerieNavButtonMixin = css`
  height: 74px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  width: 50%;
  text-decoration: none;
  border: none;
  padding-left: 16px;
  border-bottom: solid 1px ${({ theme }) => theme.colors.accent};
  opacity: ${({ location, galerieName }) =>
    location === galerieName ? "1" : "0.6"};
  cursor: pointer;
  transition: opacity 400ms ease;

  &:hover {
    opacity: 1;
  }

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    padding-left: 0%;
    height: 40px;
  }
`;

export const NavButton = styled.div`
  ${({ stylevariant }) => stylevariant === "galerie" && GalerieNavButtonMixin};
`;

export const NavButtonBackground = styled.div`
  position: absolute;
  left: 0;
  z-index: 0;
  width: ${({ location, galerieName }) =>
    location === galerieName ? "100%" : "0%"};
  height: 100%;
  background-color: ${({ location, galerieName, theme }) =>
    location === galerieName ? theme.colors.accent : "transparent"};

  // ANIM
  ${({ location, galerieName, $firstload }) => {
    if (location === galerieName && galerieName === "paintings" && !$firstload)
      return mixinAnimLeftToRight;
    if (
      location === galerieName &&
      galerieName === "illustrations" &&
      !$firstload
    )
      return mixinAnimRightToLeft;
  }};
`;

export const CrossIcon = styled(SVG)`
  z-index: 5;
  position: absolute;
  right: 5%;
  transform: translate(0, -50%);
  top: 50%;

  & path {
    fill: ${({ theme, mail }) => (mail ? "none" : theme.colors.font)};
    stroke: ${({ theme, mail }) => (mail ? theme.colors.font : "none")};
  }
  &:hover {
    cursor: pointer;
    & path {
      fill: ${({ theme, mail }) => (mail ? "none" : theme.colors.accent)};
      stroke: ${({ theme, mail }) => (mail ? theme.colors.accent : "none")};
    }
  }

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    display: none;
  }
`;
