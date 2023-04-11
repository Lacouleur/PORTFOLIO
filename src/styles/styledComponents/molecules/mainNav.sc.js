import styled, { css } from "styled-components";

export const HomeNavContainer = styled.div`
  width: 100%;
  margin-top: 64px;
`;

export const HomeNavText = styled.p`
  font: ${({ theme }) => theme.fonts.titleBig};
  color: ${({ theme }) => theme.colors.font};
  font-size: 3.5em;
  margin: 12px;
  text-align: start;
`;

export const NavButton = styled.button`
  width: 100%;
  height: 50%;
  display: flex;
  border: none;
  background-color: transparent;
  border-top: solid 1px ${({ theme }) => theme.colors.font};
  border-bottom: ${({ last, theme }) =>
    last ? `solid 1px ${theme.colors.font}` : "none"};
  display: block;
  transition: background-color 0.2s ease;
  max-height: 307px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
  &:hover ${HomeNavText} {
    color: ${({ theme }) => theme.colors.background};
  }
`;
