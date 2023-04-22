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
  return (
    <GaleriePageContainer>
      <GaleriePageSection>
        <GaleriePresentationBlockText galeryName="paints" />
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
