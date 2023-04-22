import React, { useEffect, useState } from "react";
import {
  Descriptionbox,
  GalerieImages4SquaresContainer,
  ImgBox,
  SquareImg,
} from "../../styles/styledComponents/molecules/GalerieImages4Squares.sc";
import fullavatar from "../../styles/assets/imgs/DamienVoindrot-874102122022-weblight.jpg";

function GalerieImages4Squares() {
  const [imgHovered, setImgHovered] = useState("");

  return (
    <GalerieImages4SquaresContainer>
      <Descriptionbox>
        <p>describ</p>
      </Descriptionbox>
      <ImgBox>
        <SquareImg
          onMouseEnter={() => setImgHovered("1")}
          onMouseLeave={() => setImgHovered("")}
          imgHovered={imgHovered}
          imgId="1"
          src="https://ik.imagekit.io/artworks/paintings/Weblight-2mo-leger/Avatar_Bleu_Maze/DamienVoindrot-874402122022-weblight.jpg?updatedAt=1682066160008"
        />
        <SquareImg
          onMouseEnter={() => setImgHovered("2")}
          onMouseLeave={() => setImgHovered("")}
          imgHovered={imgHovered}
          imgId="2"
          src="https://ik.imagekit.io/artworks/paintings/Weblight-2mo-leger/Avatar_Bleu_Maze/DamienVoindrot-874402122022-weblight.jpg?updatedAt=1682066160008"
        />
        <SquareImg
          imgId="3"
          imgHovered={imgHovered}
          src={fullavatar}
          onMouseEnter={() => setImgHovered("3")}
          onMouseLeave={() => setImgHovered("")}
        />
        <SquareImg
          imgId="4"
          imgHovered={imgHovered}
          src={fullavatar}
          onMouseEnter={() => setImgHovered("4")}
          onMouseLeave={() => setImgHovered("")}
        />
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
