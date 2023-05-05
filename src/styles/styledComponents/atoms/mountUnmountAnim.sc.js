import { css, keyframes } from "styled-components";

const inAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }

`;

const outAnimation = keyframes` 
 0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const mountAnimation = css`
  animation: ${inAnimation} 200ms forwards 1 ease-in;
`;
export const unMountAnimation = css`
  animation: ${outAnimation} 200ms forwards 1 ease-in;
`;

const ScaleUpTopLeft = keyframes`
  0% {
            transform: scale(0.5);
            transform-origin: 0% 0%;
  }
  100% {
            transform: scale(1);
            transform-origin: 0% 0%;
  }
`;

const ScaleUpTopRight = keyframes`
  0% {
            transform: scale(0.5);
            transform-origin: 100% 0%;
  }
  100% {
            transform: scale(1);
            transform-origin: 100% 0%;
  }
`;

const ScaleUpBottomLeft = keyframes`
  0% {
            transform: scale(0.5);
            transform-origin: 0% 100%;
  }
  100% {
            transform: scale(1);
            transform-origin: 0% 100%;
  }
`;

const ScaleUpBottomRight = keyframes`
  0% {
            transform: scale(0.5);
            transform-origin: 100% 100%;
  }
  100% {
            transform: scale(1);
            transform-origin: 100% 100%;
  }
`;

const ScaleDownTopLeft = keyframes`
  0% {
            width: 100%;
            transform-origin: 0% 0%;
  }
  100% {
            width: 49%;
            transform-origin: 0% 0%;
  }

`;

const ScaleDownTopRight = keyframes`
  0% {
    width: 100%;
            transform-origin: 100% 0%;
  }
  100% {
    width: 49%;
            transform-origin: 100% 0%;
  }

`;

const ScaleDownBottomLeft = keyframes`
  0% {
            width: 100%;
            transform-origin: 0% 100%;
  }
  100% {
            width: 49%;
            transform-origin: 0% 100%;
  }

`;

const ScaleDownBottomRight = keyframes`
  0% {
            width: 100%;
            transform-origin: 100% 100%;
  }
  100% {
            width: 49%;
            transform-origin: 100% 100%;
  }

`;

export const ScaleUpTopLeftAnimation = css`
  z-index: 3;
  width: 100%;
  animation: ${ScaleUpTopLeft} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

export const ScaleUpTopRightAnimation = css`
  z-index: 3;
  width: 100%;
  animation: ${ScaleUpTopRight} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

export const ScaleUpBottomLeftAnimation = css`
  z-index: 3;
  width: 100%;
  animation: ${ScaleUpBottomLeft} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

export const ScaleUpBottomRightAnimation = css`
  z-index: 3;
  width: 100%;
  animation: ${ScaleUpBottomRight} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

export const ScaleDownTopLeftAnimation = css`
  z-index: 2;
  top: 0;
  left: 0;
  animation: ${ScaleDownTopLeft} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const ScaleDownTopRightAnimation = css`
  z-index: 2;
  top: 0;
  right: 0;
  animation: ${ScaleDownTopRight} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const ScaleDownBottomLeftAnimation = css`
  z-index: 2;
  bottom: 0;
  left: 0;
  animation: ${ScaleDownBottomLeft} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
`;

export const ScaleDownBottomRightAnimation = css`
  z-index: 2;
  bottom: 0;
  right: 0;
  animation: ${ScaleDownBottomRight} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;
