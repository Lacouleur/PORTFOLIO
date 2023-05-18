import styled from "styled-components";
import SVG from "react-inlinesvg";
import {
  expendFromLeftAnimation,
  foldFromRightAnimation,
  mountAnimation,
  unMountAnimation,
} from "./atoms/Animations.sc";

export const HeaderContainer = styled.div`
  min-width: 800px;
  position: fixed;
  top: 0;
  height: 48px;
  width: 80vw;

  max-width: 1500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 10;

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    height: ${({ $selector }) => $selector && "90px"};
    align-items: flex-start;
    z-index: 15;
    width: 95vw;
    transition: height 400ms ease, background-color 500ms ease;
    min-width: 300px;
    border-bottom: ${({ $selector, theme }) =>
      $selector ? `2px solid ${theme.colors.accent}` : ""};
  }
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
  display: flex;

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    margin-left: 10px;
  }
`;

export const SocialIcon = styled(SVG)`
  align-self: center;
  transition: margin-right 400ms ease;
  margin-right: ${({ $selector }) => ($selector ? "2px" : "10px")};
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
    margin-right: 8px;
    transform: scale(0.9);
  }
`;

export const HeaderName = styled.div`
  cursor: pointer;
  font: ${({ theme }) => theme.fonts.titleSmall};
  ${({ fade }) => (fade === "in" ? mountAnimation : unMountAnimation)};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    font-size: 5vw;
    height: 34px;
    line-height: 34px;
  }
`;

export const Selector = styled.div`
  display: flex;

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    position: relative;
  }
`;

export const SelectorSeparator = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const SelectorText = styled.span`
  height: 20px;
  line-height: 8px;
  padding-left: 4px;
  font: ${({ theme }) => theme.fonts.bodyMedium};
  outline-offset: -6px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const SelectorContainer = styled.div`
  cursor: pointer;
  margin-right: 8px;
  white-space: nowrap;
  width: 150px;
  background-color: ${({ theme }) => theme.colors.backgroundDimmed};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  ${({ expend }) =>
    expend === true ? expendFromLeftAnimation : foldFromRightAnimation};

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    position: absolute;
    top: 30px;
  }
`;
