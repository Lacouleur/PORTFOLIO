import styled, { css } from "styled-components";

export const SwitchBox = styled.label`
  margin-left: 20px;
  margin-top: 16px;
  cursor: pointer;
`;

export const SwitchLabel = styled.label`
  position: absolute;
  left: 0;
  transform: translate(0, 50%);
  bottom: 50%;
  width: 48px;
  height: 24px;
  border-radius: 15px;
  border: 2px solid ${({ theme }) => theme.colors.font};
  cursor: pointer;
  background: transparent;

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    transform: translateY(-14%);
    background: ${({ theme }) => theme.colors.font};
    margin-top: 4px;
    width: 21px;
    height: 21px;
    margin-left: 1px;
    transition: 0.2s;
  }
`;

export const Switch = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  border: 2px solid ${({ theme }) => theme.colors.font};

  &:checked + ${SwitchLabel} {
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.font};
      margin-top: 4px;
      width: 21px;
      height: 21px;
      margin-left: 25px;
      transition: all 0.2s ease 0s;
    }
  }
`;
