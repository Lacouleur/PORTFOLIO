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
