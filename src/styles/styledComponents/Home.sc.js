import styled, { css } from "styled-components";
import { breakpoints } from "../core/breakpoints";

export const HomepageContainer = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 0 32px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const HomeSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 45%;

  ${breakpoints("mobile", `height: auto`)};
`;

const MobileHomeTextBox = css`
  display: none;
`;

export const HomeTextBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font: ${({ theme }) => theme.fonts.bodyMedium};
  width: 100%;
  max-width: 850px;
  min-width: 800px;
  min-width: 800px;
  max-height: 180px;

  ${breakpoints("mobile", `${MobileHomeTextBox}`)};
`;
