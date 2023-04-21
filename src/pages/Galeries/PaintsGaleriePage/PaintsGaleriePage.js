import React, { useEffect, useRef, useState } from "react";
import {
  GaleriePageContainer,
  GaleriePageSection,
  GaleriesContainer,
} from "../../../styles/styledComponents/GaleriesPages.sc";
import Header from "../../../components/header";
import Navigation from "../../../components/atoms/Navigation";
import GaleriePresentationBlockText from "../../../components/molecules/GaleriePresentationBlockText";
import GalerieImages4Squares from "../../../components/molecules/GalerieImages4Squares";
import { useNavigate } from "react-router-dom";

function PaintsGaleriePage() {
  const ref = useRef();
  const navigate = useNavigate();
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };
  }, [window.pageYOffset]);

  return (
    <GaleriePageContainer
      ref={ref}
      onWheel={(event) => {
        if (isTop && event.nativeEvent.wheelDelta > 0) {
          navigate("/");
        }
      }}
    >
      <Header />
      <Navigation styleVariant="galery" />
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
