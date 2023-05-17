import styled, { css } from "styled-components";

export const SwitchBox = styled.label`
  margin: 16px 32px 0 0;
  cursor: pointer;

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    margin: 16px 16px 0 0;
  }
`;

export const SwitchLabel = styled.label`
  position: absolute;
  left: 0;
  transform: translate(0, 50%);
  bottom: 50%;
  width: 40px;
  height: 20px;
  border-radius: 15px;
  outline: 2px solid ${({ theme }) => theme.colors.fontDimmed};
  cursor: pointer;
  background: transparent;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 50%;
    transform: translate(0, 50%);
    bottom: 50%;
    left: -1px;

    background: ${({ theme }) => theme.colors.font};
    width: 22px;
    height: 22px;
    transition: 0.2s;
  }

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    width: 25px;
    height: 15px;

    &::after {
      background: ${({ theme }) => theme.colors.font};
      width: 17px;
      height: 17px;
      transition: 0.2s;
    }
  }
`;

export const Switch = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 0;
  height: 0;
  border: 2px solid ${({ theme }) => theme.colors.fontDimmed};

  &:checked + ${SwitchLabel} {
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.font};
      width: 21px;
      height: 21px;
      margin-left: 22px;
      transition: all 0.2s ease 0s;
    }
  }

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    &:checked + ${SwitchLabel} {
      &::after {
        width: 17px;
        height: 17px;
        left: -13px;
      }
    }
  }
`;
