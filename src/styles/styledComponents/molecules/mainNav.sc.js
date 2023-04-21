import styled, { css } from "styled-components";
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

export const NavContainer = styled.div`
  ${({ styleVariant }) => styleVariant === "home" && HomeNavMixin};
  ${({ styleVariant }) => styleVariant === "galery" && GalerieNavMixin};
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
  ${({ styleVariant }) => styleVariant === "home" && HomeNavTextMixin};
  ${({ styleVariant }) => styleVariant === "galery" && GalerieNavTextMixin};
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
  border-bottom: ${({ last, theme }) =>
    last ? `solid 1px ${theme.colors.font}` : "none"};
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
  background-color: ${({ location, to, theme }) =>
    location === to ? theme.colors.accent : "transparent"};
  border-bottom: solid 1px ${({ theme }) => theme.colors.accent};
  opacity: ${({ location, to }) => (location === to ? "1" : "0.6")};

  &:hover {
    opacity: 1;
  }
  &:hover ${NavText} {
  }
`;

export const NavButton = styled(Link)`
  ${({ styleVariant }) => styleVariant === "home" && HomeNavButtonMixin};
  ${({ styleVariant }) => styleVariant === "galery" && GalerieNavButtonMixin};
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