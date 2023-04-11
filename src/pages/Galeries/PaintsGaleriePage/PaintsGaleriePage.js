import React from "react";
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
      <Header />
      <Navigation styleVariant="galery" />
      <GaleriePageSection>
        <GaleriesContainer>
          <GaleriePresentationBlockText />
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
