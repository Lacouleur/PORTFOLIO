import React, { useEffect, useState } from "react";
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

import { dynamicUrls } from "../../utils/helpers/GalerieImageListHelpers";

function GalerieImages4Squares({ galerieName, artworkName }) {
  const [imgHovered, setImgHovered] = useState(undefined);
  const [imgsUrls, setImgsUrls] = useState([]);

  const askedSize = {
    side: "h",
    size: 600,
  };

  useEffect(() => {
    setImgsUrls(dynamicUrls(askedSize, 4, galerieName, artworkName));
  }, []);

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
        {imgsUrls && (
          <>
            <SquareImg imgHovered={imgHovered} id="1" src={imgsUrls[0]} />
            <EmptyBlock id="empty" />
            <SquareImg id="2" src={imgsUrls[1]} />
            <SquareImg id="3" src={imgsUrls[2]} />
            <SquareImg id="4" src={imgsUrls[3]} />
          </>
        )}
      </ImgBox>
    </GalerieImages4SquaresContainer>
  );
}

GalerieImages4Squares.defaultProps = {
  selectedIds: [1, 2, 3],
};

GalerieImages4Squares.propTypes = {
  galerieName: PropTypes.string.isRequired,
  artworkName: PropTypes.string.isRequired,
  selectedIds: PropTypes.arrayOf(PropTypes.number),
};

export default GalerieImages4Squares;
