import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import {
  toggleFullView,
  addItemToPaintingsImagesList,
} from "../../store/redux";

function GalerieImages4Squares({ galerieName, artworkName, customOrder }) {
  const [imgHovered, setImgHovered] = useState(undefined);
  const [lastImgHovered, setLastImgHovered] = useState(undefined);
  const [imgsUrls, setImgsUrls] = useState([]);
  const dispatch = useDispatch();
  const { paintingsImageList } = useSelector((state) => state.main);

  const askedSize = {
    side: "w",
    size: 800,
  };

  useEffect(() => {
    if (paintingsImageList) {
      imgsUrls.map((newItem) => {
        if (paintingsImageList.indexOf(newItem) === -1) {
          dispatch(addItemToPaintingsImagesList(newItem));
        }
      });
    }
  }, [imgsUrls]);

  useEffect(() => {
    setImgsUrls(
      dynamicUrls({
        askedSize,
        nbOfImgs: 4,
        galerieName,
        artworkName,
        customOrder,
      }),
    );
  }, []);

  return (
    <GalerieImages4SquaresContainer
      onClick={() => {
        dispatch(
          toggleFullView({
            toogle: true,
            url: imgsUrls[0],
          }),
        );
      }}
    >
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
        onMouseLeave={() => {
          setLastImgHovered(imgHovered);
          setImgHovered(undefined);
        }}
      >
        {imgsUrls && (
          <>
            <SquareImg
              onMouseEnter={() => setImgHovered(1)}
              imgHovered={imgHovered}
              lastImgHovered={lastImgHovered}
              id={1}
              src={imgsUrls[0]}
            />
            <SquareImg
              onMouseEnter={() => setImgHovered(2)}
              imgHovered={imgHovered}
              lastImgHovered={lastImgHovered}
              id={2}
              src={imgsUrls[1]}
            />
            <SquareImg
              onMouseEnter={() => setImgHovered(3)}
              imgHovered={imgHovered}
              lastImgHovered={lastImgHovered}
              id={3}
              src={imgsUrls[2]}
            />
            <SquareImg
              onMouseEnter={() => setImgHovered(4)}
              imgHovered={imgHovered}
              lastImgHovered={lastImgHovered}
              id={4}
              src={imgsUrls[3]}
            />
          </>
        )}
      </ImgBox>
    </GalerieImages4SquaresContainer>
  );
}

GalerieImages4Squares.defaultProps = {
  customOrder: undefined,
};

GalerieImages4Squares.propTypes = {
  galerieName: PropTypes.string.isRequired,
  artworkName: PropTypes.string.isRequired,
  customOrder: PropTypes.arrayOf(PropTypes.number),
};

export default GalerieImages4Squares;
