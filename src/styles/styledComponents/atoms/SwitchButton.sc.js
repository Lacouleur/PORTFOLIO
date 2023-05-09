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
  width: 48px;
  height: 24px;
  border-radius: 15px;
  border: 2px solid ${({ theme }) => theme.colors.font};
  cursor: pointer;
  background: transparent;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
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
      content: "";
      display: block;
      position: absolute;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.font};
      width: 12px;
      height: 12px;
      left: -1px;
      transition: 0.2s;
    }
  }

  ${(props) => props.stylevariant === "homeSwitch" && homepageSwitchLabelMixin}
`;

export const Switch = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 0;
  height: 0;
  border: 2px solid ${({ theme }) => theme.colors.font};

  &:checked + ${SwitchLabel} {
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.font};
      width: 21px;
      height: 21px;
      margin-left: 25px;
      transition: all 0.2s ease 0s;
    }
  }

  // MOBILE
  @media (max-width: 800px) or (max-height: 500px) {
    &:checked + ${SwitchLabel} {
      &::after {
        width: 12px;
        height: 12px;
        left: -13px;
      }
    }
  }
`;
