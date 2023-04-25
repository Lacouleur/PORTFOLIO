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
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
  }
`;

const ScaleDownTopLeft = keyframes`
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
  }
  100% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
  }
`;

export const ScaleUpTopLeftAnimation = css`
  animation: ${ScaleUpTopLeft} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);
`;

export const ScaleDownTopLeftAnimation = css`
  animation: ${ScaleDownTopLeft} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);
`;
