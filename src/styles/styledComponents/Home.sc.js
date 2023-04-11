import styled, { css } from "styled-components";
import { breakpoints } from "../core/breakpoints";

export const HomepageContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 0 32px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const HomeSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  ${breakpoints("mobile", `height: auto`)};
`;

const MobileHomeTextBox = css`
  display: none;
`;

export const HomeTextBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  max-width: 1900px;
  min-width: 800px;

  ${breakpoints("mobile", `${MobileHomeTextBox}`)};
`;
