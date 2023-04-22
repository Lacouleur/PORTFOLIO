import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  GaleriePageContainer,
  GaleriePageSection,
  GaleriesContainer,
} from "../../../styles/styledComponents/GaleriesPages.sc";
import Header from "../../../components/header";
import Navigation from "../../../components/atoms/Navigation";
import GaleriePresentationBlockText from "../../../components/molecules/GaleriePresentationBlockText";
import GalerieImages4Squares from "../../../components/molecules/GalerieImages4Squares";

function PaintsGaleriePage() {
  const navigate = useNavigate();
  const [isTop, setIsTop] = useState(true);
  /* 
  const [imgIshovered, setImgIsHovered] = useState(""); */

  /*   useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };
  }, [window.pageYOffset]); */

  return (
    <GaleriePageContainer
      onWheel={(event) => {
        if (isTop && event.nativeEvent.wheelDelta > 0) {
          navigate("/");
        }
      }}
    >
      <Navigation stylevariant="galery" />
      <GaleriePageSection>
        <GaleriePresentationBlockText />
        <GaleriesContainer>
          <GalerieImages4Squares />
          <GalerieImages4Squares />
          <GalerieImages4Squares />
          <GalerieImages4Squares />
          <GalerieImages4Squares />
          <GalerieImages4Squares />
          <GalerieImages4Squares />
          <GalerieImages4Squares />
        </GaleriesContainer>
      </GaleriePageSection>
    </GaleriePageContainer>
  );
}

/* PaintsGaleriePage.defaultProps = {
  position: undefined,
};

PaintsGaleriePage.propTypes = {
  position: PropTypes.string,
};
 */

export default PaintsGaleriePage;
