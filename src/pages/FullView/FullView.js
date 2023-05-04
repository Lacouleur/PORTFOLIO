import React from "react";
import { useDispatch } from "react-redux";
import {
  Close,
  FullViewContainer,
} from "../../styles/styledComponents/FullView.sc";
import closeIcon from "../../styles/assets/icons/System/Cancel.svg";
import { toggleFullView } from "../../store/redux";

function FullView() {
  const dispatch = useDispatch();
  return (
    <FullViewContainer>
      <Close
        width={128}
        src={closeIcon}
        onClick={() => dispatch(toggleFullView(false))}
      />
      <p>toto</p>
    </FullViewContainer>
  );
}

/* FullView.defaultProps = {
  position: undefined,
};

FullView.propTypes = {
  position: PropTypes.string,
};
 */

export default FullView;
