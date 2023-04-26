import React from "react";
import {
  GaleriePageContainer,
  GaleriePageSection,
  GaleriesContainer,
} from "../../../styles/styledComponents/GaleriesPages.sc";
import GaleriePresentationBlockText from "../../../components/molecules/GaleriePresentationBlockText";
import GalerieImages4Squares from "../../../components/molecules/GalerieImages4Squares";

function IllustrationsGaleriePage() {
  const galeryName = "illustrations";
  return (
    <GaleriePageContainer>
      <GaleriePresentationBlockText galeryName={galeryName} />
      <GaleriesContainer>
        {/*           <GalerieImages4Squares />
          <GalerieImages4Squares />
          <GalerieImages4Squares />
          <GalerieImages4Squares />
          <GalerieImages4Squares />
          <GalerieImages4Squares />
          <GalerieImages4Squares />
          <GalerieImages4Squares /> */}
      </GaleriesContainer>
    </GaleriePageContainer>
  );
}

/* IllustrationsGaleriePage.defaultProps = {
  position: undefined,
};

IllustrationsGaleriePage.propTypes = {
  position: PropTypes.string,
};
 */

export default IllustrationsGaleriePage;
