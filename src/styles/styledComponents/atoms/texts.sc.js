import styled from "styled-components";

export const Title = styled.h1`
  font: ${({ theme }) => theme.fonts.titleBig};
`;

export const TextBody = styled.p`
  font: ${({ theme }) => theme.fonts.bodyMedium};
`;

export const TextBlock = styled.div`
  width: 48%;
  position: relative;
`;

export const Link = styled.a`
  text-decoration: underline;
  cursor: pointer;
  position: absolute;
  bottom: -20px;
  font: ${({ theme }) => theme.fonts.labelLink};
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
