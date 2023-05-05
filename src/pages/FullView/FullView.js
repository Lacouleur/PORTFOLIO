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

import { changeFullViewImg, toggleFullView } from "../../store/redux";

function FullView() {
  const { isFullView } = useSelector((state) => state.main);
  const dispatch = useDispatch();
  return (
    <FullViewContainer>
      <Close
        width={128}
        src={closeIcon}
        onClick={() =>
          dispatch(toggleFullView({ toogle: false, url: "", galerieName: "" }))
        }
      />
      <Arrow
        src={arrowRight}
        direction="right"
        onClick={() => dispatch(changeFullViewImg("next"))}
      />
      <Arrow
        src={arrowLeft}
        direction="left"
        onClick={() => dispatch(changeFullViewImg("previous"))}
      />
      <FullPageImage
        src={isFullView.url}
        onClick={() => dispatch(changeFullViewImg("next"))}
      />
      <FullViewBackground filter="blur(10px) sepia(50%)" />
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
