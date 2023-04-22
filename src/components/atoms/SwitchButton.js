import React from "react";
import PropTypes from "prop-types";
import {
  Switch,
  SwitchBox,
  SwitchLabel,
} from "../../styles/styledComponents/atoms/SwitchButton.sc.js";

function SwitchButton({ isChecked, action, componentId, stylevariant }) {
  return (
    <SwitchBox
      htmlFor={componentId}
      onChange={() => {
        action();
      }}
      stylevariant={stylevariant}
    >
      <Switch
        className="Switch"
        id={componentId}
        type="checkbox"
        checked={isChecked}
        readOnly
        stylevariant={stylevariant}
      />
      <SwitchLabel
        className="SwitchLabel"
        htmlFor={componentId}
        stylevariant={stylevariant}
      />
    </SwitchBox>
  );
}

SwitchButton.defaultProps = {
  stylevariant: undefined,
};

SwitchButton.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  componentId: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  stylevariant: PropTypes.string,
};

export default SwitchButton;
