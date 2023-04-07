import styled, { css } from "styled-components";

const homepageSwitchBoxMixin = css`
  position: relative;
  margin: 0;
`;

export const SwitchBox = styled.label`
  margin: 16px 32px 0 0;
  cursor: pointer;

  ${(props) => props.styleVariant === "homeSwitch" && homepageSwitchBoxMixin}
`;

const homepageSwitchLabelMixin = css`
  bottom: 16px;
  transform: translate(0, 0);

  &::after {
    margin-top: 4px;
    width: 22px;
    height: 22px;
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

  ${(props) => props.styleVariant === "homeSwitch" && homepageSwitchLabelMixin}
`;

const homepageSwitchMixin = css``;

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
      margin-top: 4px;
      width: 21px;
      height: 21px;
      margin-left: 25px;
      transition: all 0.2s ease 0s;
    }
  }

  ${(props) => props.styleVariant === "homeSwitch" && homepageSwitchMixin}
`;
