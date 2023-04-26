import styled, { css } from "styled-components";
import breakpoints from "../core/breakpoints";

export const MobilePageContainer = css`
  position: relative;
  max-width: 800px;
  min-width: 150px;
  color: ${(props) => props.theme.colors.font};
  content: "";
  overflow: hidden;
`;

export const PageContainer = styled.div`
  position: relative;
  min-width: 800px;
  color: ${(props) => props.theme.colors.font};
  top: 0;
  bottom: 0;
  width: 95%;
  margin: auto;
  content: "";
  overflow: hidden;

  ${breakpoints("mobile", `${MobilePageContainer}`)};
`;

export const SiteContainer = styled.div`
  padding: 0;
  position: relative;
  height: ${(props) => props.height || ""};
  width: 100%;
  min-width: 150px;
  color: ${(props) => props.theme.colors.font};
  background-color: ${(props) => props.theme.colors.background};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: ${(props) => (props.isModalOpen ? "hidden" : "visible")};
`;
