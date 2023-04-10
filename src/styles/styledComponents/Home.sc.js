import styled, { css } from "styled-components";
import { breakpoints } from "../core/breakpoints";

export const HomeSiteContainer = styled.div`
  height: 100vh;
  overflow: hidden;
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
