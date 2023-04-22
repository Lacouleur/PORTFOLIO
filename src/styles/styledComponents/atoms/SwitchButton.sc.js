import styled, { css } from "styled-components";
import breakpoints from "../../core/breakpoints";

const homepageSwitchBoxMixin = css`
  position: relative;
  margin: 0;
`;

export const SwitchBox = styled.label`
  margin: 16px 32px 0 0;
  cursor: pointer;

  ${(props) => props.stylevariant === "homeSwitch" && homepageSwitchBoxMixin}
`;

const homepageSwitchLabelMixin = css`
  bottom: 16px;
  ${breakpoints("mobile", `bottom: 0px;`)};
  &::after {
    margin-top: 3px;
    width: 22px;
    height: 23px;
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
    transform: translateY(-14%);
    background: ${({ theme }) => theme.colors.font};
    margin-top: 4px;
    width: 21px;
    height: 21px;
    margin-left: 1px;
    transition: 0.2s;
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
      margin-top: 4px;
      width: 21px;
      height: 21px;
      margin-left: 25px;
      transition: all 0.2s ease 0s;
    }
  }
`;
