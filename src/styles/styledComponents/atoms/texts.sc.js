import styled from "styled-components";

export const Title = styled.h1`
  font: ${({ theme }) => theme.fonts.titleBig};
  margin: 16px 0;
`;

export const TextBody = styled.p`
  font: ${({ theme }) => theme.fonts.bodyMedium};
`;

export const TextBlock = styled.div`
  width: 48%;
  max-width: 400px;
  position: relative;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const CtaLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
  font: ${({ theme }) => theme.fonts.labelLink};
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
