import React, { useState } from "react";
import {
  Descriptionbox,
  EmptyBlock,
  GalerieImages4SquaresContainer,
  ImgBox,
  SquareImg,
} from "../../styles/styledComponents/molecules/GalerieImages4Squares.sc";
import PropTypes from "prop-types";
import fullavatar from "../../styles/assets/imgs/DamienVoindrot-874102122022-weblight.jpg";
import urlBuilder from "../../utils/helpers/urlBuilder";

function GalerieImages4Squares({ galeryName, artworkName, selectedIds }) {
  const [imgHovered, setImgHovered] = useState(false);

  let ids = [];

  // selected ids is an array and can have maximum 3 custom values plus the 0
  // we add "0" cause it's the id of full size image
  if (selectedIds && selectedIds[0] !== 0) {
    ids = [0, ...selectedIds];
  }

  return (
    <GalerieImages4SquaresContainer>
      <Descriptionbox>
        <p>describ</p>
      </Descriptionbox>
      <ImgBox>
        <SquareImg
          onMouseEnter={() => setImgHovered(true)}
          onMouseLeave={() => setImgHovered(false)}
          imgHovered={imgHovered}
          imgId="full"
          src={urlBuilder(galeryName, artworkName, ids[0], {
            side: "w",
            size: 600,
          })}
        />
        <EmptyBlock imgId="empty" />
        <SquareImg
          src={urlBuilder(galeryName, artworkName, ids[1], {
            side: "w",
            size: 600,
          })}
        />
        <SquareImg
          src={urlBuilder(galeryName, artworkName, ids[2], {
            side: "w",
            size: 600,
          })}
        />
        <SquareImg
          src={urlBuilder(galeryName, artworkName, ids[3], {
            side: "w",
            size: 600,
          })}
        />
      </ImgBox>
    </GalerieImages4SquaresContainer>
  );
}

GalerieImages4Squares.defaultProps = {
  selectedIds: [1, 2, 3],
};

GalerieImages4Squares.propTypes = {
  galeryName: PropTypes.string.isRequired,
  artworkName: PropTypes.string.isRequired,
  selectedIds: PropTypes.arrayOf(PropTypes.number),
};

export default GalerieImages4Squares;
