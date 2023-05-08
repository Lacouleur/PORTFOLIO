import styled, { css } from "styled-components";
import SVG from "react-inlinesvg";
import { mountAnimation, unMountAnimation } from "./atoms/mountUnmountAnim.sc";

export const FullViewContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 100;
  backdrop-filter: blur(5px);
  ${({ fade }) => (fade === "in" ? mountAnimation : unMountAnimation)};
`;

export const Close = styled(SVG)`
  z-index: 105;
  position: absolute;
  right: 32px;
  top: 32px;
  transform: scale(2);
  width: 24px;
  opacity: 0.8;
  transition: transform 100ms ease;
  cursor: pointer;

  & path {
    fill: ${({ theme }) => theme.colors.white};
  }
  &:hover {
    opacity: 1;
    transform: rotate(0.25turn) scale(2);
  }
`;

export const FullPageImage = styled.img`
  position: absolute;
  z-index: 104;
  transform: translate(-50%, -50%);
  top: 50%;
  right: 50%;
  left: 50%;
  bottom: 50%;
  max-height: 90vh;
  max-width: 90%;
  cursor: pointer;
`;

export const FullViewBackground = styled.div`
  z-index: 100;
  top: 0;
  background-color: ${({ theme }) => theme.colors.dark};
  width: 100%;
  height: 100%;
  opacity: 0.8;
  backdrop-filter: blur(10px);
`;

const arrowRight = css`
  right: 32px;
`;
const arrowLeft = css`
  left: 32px;
`;
export const Arrow = styled(SVG)`
  position: absolute;
  z-index: 105;
  transform: scale(3);
  top: 50%;
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transform: scale(3.1);
  }

  ${({ direction }) => (direction === "right" ? arrowRight : arrowLeft)};
  & path {
    fill: ${({ theme }) => theme.colors.white};
  }
`;
