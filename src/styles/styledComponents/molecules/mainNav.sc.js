import styled, { css, keyframes } from "styled-components";
import SVG from "react-inlinesvg";

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
  width: 95%;
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
`;

const HomeNavTextMixin = css`
  font: ${({ theme }) => theme.fonts.titleBig};
  color: ${({ theme }) => theme.colors.font};
  font-size: 3.5em;
  margin: 12px;
  text-align: start;
  text-transform: capitalize;
`;

const GalerieNavTextMixin = css`
  z-index: 5;
  font: ${({ theme }) => theme.fonts.titleMedium};
  color: ${({ theme }) => theme.colors.font};
  text-align: start;
  align-self: center;
  margin-right: 12px;
  text-transform: capitalize;
`;

export const NavText = styled.p`
  ${({ stylevariant }) => stylevariant === "home" && HomeNavTextMixin};
  ${({ stylevariant }) => stylevariant === "galerie" && GalerieNavTextMixin};
`;

const HomeNavButtonMixin = css`
  z-index: 5;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  border: none;
  background-color: transparent;
  border-top: solid 1px ${({ theme }) => theme.colors.font};
  border-bottom: ${({ $last, theme }) =>
    $last ? `solid 1px ${theme.colors.font}` : "none"};
  transition: background-color 0.2s ease;
  max-height: 307px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
  &:hover ${NavText} {
    color: ${({ theme }) => theme.colors.background};
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

  &:hover {
    opacity: 1;
  }
  &:hover ${NavText} {
  }
`;

export const NavButton = styled.div`
  ${({ stylevariant }) => stylevariant === "home" && HomeNavButtonMixin};
  ${({ stylevariant }) => stylevariant === "galerie" && GalerieNavButtonMixin};
`;

function AnimRightToLeft() {
  return keyframes`
  0% {
            left:0;
            right: 100%;
            width: 0;
  }
  100% {
            left:0;
            right: 0;
  }
`;
}

function AnimLeftToRight() {
  return keyframes`
  0% {
            left:100%;
            right: 0;
            width: 0;
  }
  100% {
            left:0;
            right: 0;
  }
`;
}

const mixinAnimRightToLeft = css`
  animation: ${AnimRightToLeft} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

const mixinAnimLeftToRight = css`
  animation: ${AnimLeftToRight} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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
  ${({ location, galerieName }) => {
    if (location === galerieName && galerieName === "paintings")
      return mixinAnimLeftToRight;
    if (location === galerieName && galerieName === "illustrations")
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
`;
