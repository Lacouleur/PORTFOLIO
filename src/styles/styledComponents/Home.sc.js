import styled from "styled-components";

export const HomepageContainer = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const HomeSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 45%;
  margin: 64px 0 32px 0;
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

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    display: none;
  }
`;
