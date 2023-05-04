import styled, { css } from "styled-components";
import SVG from "react-inlinesvg";

export const FullViewContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.dark};
  opacity: 0.8;
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

  & path {
    fill: ${({ theme }) => theme.colors.white};

    /*     stroke: ${({ theme, mail }) =>
      mail ? theme.colors.font : "none"}; */
  }
  &:hover {
    opacity: 1;
    transform: rotate(0.25turn) scale(2);
  }
`;
