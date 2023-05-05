import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Arrow,
  Close,
  FullPageImage,
  FullViewBackground,
  FullViewContainer,
} from "../../styles/styledComponents/FullView.sc";
import closeIcon from "../../styles/assets/icons/System/Cancel.svg";
import arrowRight from "../../styles/assets/icons/Arrow/Right.svg";
import arrowLeft from "../../styles/assets/icons/Arrow/Left.svg";

import { toggleFullView } from "../../store/redux";

function FullView() {
  const { isFullView } = useSelector((state) => state.main);
  const dispatch = useDispatch();
  return (
    <FullViewContainer>
      <Close
        width={128}
        src={closeIcon}
        onClick={() => dispatch(toggleFullView({ toogle: false, url: "" }))}
      />
      <Arrow src={arrowRight} direction="right" />
      <Arrow src={arrowLeft} direction="left" />
      <FullPageImage src={isFullView.url} />
      <FullViewBackground />
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
