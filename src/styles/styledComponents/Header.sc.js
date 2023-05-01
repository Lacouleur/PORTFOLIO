import styled, { css } from "styled-components";
import SVG from "react-inlinesvg";
import { HashLink } from "react-router-hash-link";
import { mountAnimation, unMountAnimation } from "./atoms/mountUnmountAnim.sc";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  height: 48px;
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 10;
`;

export const HeaderLeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const SocialIconsBox = styled.div`
  margin-left: 32px;
`;

export const SocialIcon = styled(SVG)`
  margin-right: 10px;
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

export const HeaderName = styled.div`
  cursor: pointer;
  font: ${({ theme }) => theme.fonts.titleSmall};
  ${({ fade }) => (fade === "in" ? mountAnimation : unMountAnimation)};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
