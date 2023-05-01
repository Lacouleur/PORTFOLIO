import React from "react";

import {
  GaleriePageContainer,
  GaleriesContainer,
} from "../../../styles/styledComponents/GaleriesPages.sc";
import GaleriePresentationBlockText from "../../../components/molecules/GaleriePresentationBlockText";
import GalerieImages4Squares from "../../../components/molecules/GalerieImages4Squares";

function IllustrationsGaleriePage() {
  const galeryName = "illustrations";

  return (
    <GaleriePageContainer id={galeryName}>
      <GaleriePresentationBlockText galeryName={galeryName} />
      <GaleriesContainer>
        <GalerieImages4Squares
          galeryName="paintings"
          artworkName="eyes"
          selectedIds={[1, 2, 3]}
        />
        <GalerieImages4Squares
          galeryName="paintings"
          artworkName="avatar"
          selectedIds={[1, 2, 3]}
        />
        <GalerieImages4Squares
          galeryName="paintings"
          artworkName="complementary"
          selectedIds={[1, 2, 3]}
        />
        <GalerieImages4Squares
          galeryName="paintings"
          artworkName="opposite"
          selectedIds={[1, 2, 3]}
        />
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
