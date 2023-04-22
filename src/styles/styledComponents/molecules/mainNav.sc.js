import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";
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
  left: 32px;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const NavContainer = styled.div`
  ${({ stylevariant }) => stylevariant === "home" && HomeNavMixin};
  ${({ stylevariant }) => stylevariant === "galery" && GalerieNavMixin};
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
  font: ${({ theme }) => theme.fonts.titleMedium};
  color: ${({ theme }) => theme.colors.font};
  text-align: start;
  align-self: center;
  margin-right: 12px;
  text-transform: capitalize;
`;

export const NavText = styled.p`
  ${({ stylevariant }) => stylevariant === "home" && HomeNavTextMixin};
  ${({ stylevariant }) => stylevariant === "galery" && GalerieNavTextMixin};
`;

const HomeNavButtonMixin = css`
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

function blinkingEffect() {
  return keyframes`
  50% {
    opacity: 0.5;
  }
`;
}

const mixinAnim = css`
  animation: ${blinkingEffect} 0.8s linear;
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
  background-color: ${({ location, to, theme }) =>
    location === to ? theme.colors.accent : "transparent"};
  border-bottom: solid 1px ${({ theme }) => theme.colors.accent};
  opacity: ${({ location, to }) => (location === to ? "1" : "0.6")};

  ${({ location, to, firstLoad }) =>
    location === to && firstLoad === true && mixinAnim};

  &:hover {
    opacity: 1;
  }
  &:hover ${NavText} {
  }
`;

export const NavButton = styled(Link)`
  ${({ stylevariant }) => stylevariant === "home" && HomeNavButtonMixin};
  ${({ stylevariant }) => stylevariant === "galery" && GalerieNavButtonMixin};
`;

export const CrossIcon = styled(SVG)`
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
