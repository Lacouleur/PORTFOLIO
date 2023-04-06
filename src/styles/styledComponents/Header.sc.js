import styled from "styled-components";
import SVG from "react-inlinesvg";

export const HeaderContainer = styled.div`
  max-height: 96px;
  min-height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
`;

export const HeaderLeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const SocialIconsBox = styled.div`
  margin-left: 20px;
`;

export const SocialIcon = styled(SVG)`
  margin-right: 10px;
  & path {
    fill: ${({ theme, mail }) => (mail ? "none" : theme.colors.font)};
    stroke: ${({ theme, mail }) => (mail ? theme.colors.font : "none")};
  }
  &:hover {
    cursor: pointer;
    & path {
      fill: ${({ theme, mail }) => (mail ? "none" : theme.colors.accent)};
      stroke: ${({ theme, mail }) => (mail ? theme.colors.accent : "none")};
    }
  }
`;

export const HeaderName = styled.p`
  cursor: pointer;
  font: ${({ theme }) => theme.fonts.titleSmall};
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;