import React from "react";
import PropTypes from "prop-types";
import {
  Switch,
  SwitchBox,
  SwitchLabel,
} from "../../styles/styledComponents/atoms/SwitchButton.sc.js";

const SwitchButton = ({ isChecked, action, componentId, styleVariant }) => {
  return (
    <SwitchBox
      htmlFor={componentId}
      onChange={() => {
        action();
      }}
      styleVariant={styleVariant}
    >
      <Switch
        className="Switch"
        id={componentId}
        type="checkbox"
        checked={isChecked}
        readOnly
        styleVariant={styleVariant}
      />
      <SwitchLabel
        className="SwitchLabel"
        htmlFor={componentId}
        styleVariant={styleVariant}
      />
    </SwitchBox>
  );
};

SwitchButton.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  componentId: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default SwitchButton;
