import styled, { css } from "styled-components";

export const PageContainer = styled.div`
  position: relative;
  min-width: 800px;

  top: 0;
  bottom: 0;
  width: 80vw;
  margin: auto;
  content: "";
  overflow: hidden;
  max-width: 1500px;

  & * {
    transition: background-color 500ms ease, color 500ms ease, fill 500ms ease,
      stroke 500ms ease;
  }

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    position: relative;
    max-width: 800px;
    min-width: 300px;
    width: 95vw;
    color: ${(props) => props.theme.colors.font};
    content: "";
    overflow: hidden;

    & * {
      transition: background-color 500ms ease, color 500ms ease, fill 500ms ease,
        stroke 500ms ease;
    }
  }
`;

export const SiteContainer = styled.div`
  padding: 0;
  position: relative;
  height: ${(props) => props.height || ""};
  width: 100%;
  min-width: 150px;
  color: ${({ theme }) => theme.colors.font};
  background-color: ${({ theme }) => theme.colors.background};
  transition: background-color 500ms ease;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
`;
