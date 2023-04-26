import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  ArtworkAboutBox,
  ArtworkAboutText,
  ArtworkTitleBox,
  ArtworkTitleSize,
  ArtworkTitleText,
  Descriptionbox,
  EmptyBlock,
  GalerieImages4SquaresContainer,
  ImgBox,
  SquareImg,
} from "../../styles/styledComponents/molecules/GalerieImages4Squares.sc";
import urlBuilder from "../../utils/helpers/urlBuilder";

function GalerieImages4Squares({ galeryName, artworkName, selectedIds }) {
  const [imgHovered, setImgHovered] = useState(undefined);

  let ids = [];

  // selected ids is an array and can have maximum 3 custom values plus the 0
  // we add "0" cause it's the id of full size image
  if (selectedIds && selectedIds[0] !== 0) {
    ids = [0, ...selectedIds];
  }

  return (
    <GalerieImages4SquaresContainer>
      <Descriptionbox>
        <ArtworkTitleBox>
          <ArtworkTitleText>{artworkName} maze</ArtworkTitleText>
          <ArtworkTitleSize>100x100 - 2020</ArtworkTitleSize>
        </ArtworkTitleBox>
        <ArtworkAboutBox>
          <ArtworkAboutText>
            FR - Châssis ébéniste en bois plein français, toiles de lin épaisse
            d’artisanat Italien, peintures haut de gamme Hollandaises, vernis
            UV3
          </ArtworkAboutText>
          <ArtworkAboutText>
            EN - Cabinetmaker frame in French solid wood, thick linen canvas of
            Italian craftsmanship, high-end Dutch paints, UV3 varnish
          </ArtworkAboutText>
        </ArtworkAboutBox>
      </Descriptionbox>
      <ImgBox
        onMouseEnter={() => setImgHovered(true)}
        onMouseLeave={() => setImgHovered(false)}
      >
        <SquareImg
          imgHovered={imgHovered}
          id="1"
          src={urlBuilder(galeryName, artworkName, ids[0], {
            side: "w",
            size: 600,
          })}
        />
        <EmptyBlock id="empty" />
        <SquareImg
          id="2"
          src={urlBuilder(galeryName, artworkName, ids[1], {
            side: "w",
            size: 600,
          })}
        />
        <SquareImg
          id="3"
          src={urlBuilder(galeryName, artworkName, ids[2], {
            side: "w",
            size: 600,
          })}
        />
        <SquareImg
          id="4"
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
