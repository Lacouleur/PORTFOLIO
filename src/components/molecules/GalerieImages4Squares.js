import React from "react";
import {
  Descriptionbox,
  GalerieImages4SquaresContainer,
  ImgBox,
  SquareImg,
} from "../../styles/styledComponents/molecules/GalerieImages4Squares.sc";
import fullavatar from "../../styles/assets/imgs/DamienVoindrot-874102122022-weblight.jpg";

function GalerieImages4Squares() {
  return (
    <GalerieImages4SquaresContainer>
      <Descriptionbox>
        <p>describ</p>
      </Descriptionbox>
      <ImgBox>
        <SquareImg id="image" src={fullavatar} />
        <SquareImg id="image" src={fullavatar} />
        <SquareImg id="image" src={fullavatar} />
        <SquareImg id="image" src={fullavatar} />
      </ImgBox>
    </GalerieImages4SquaresContainer>
  );
}

/* GalerieImages4Squares.defaultProps = {
  position: undefined,
};

GalerieImages4Squares.propTypes = {
  position: PropTypes.string,
};
 */

export default GalerieImages4Squares;
