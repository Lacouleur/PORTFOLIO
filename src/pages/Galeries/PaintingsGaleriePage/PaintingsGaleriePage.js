import React from "react";
import {
  GaleriePageContainer,
  GaleriesContainer,
} from "../../../styles/styledComponents/GaleriesPages.sc";
import GaleriePresentationBlockText from "../../../components/molecules/GaleriePresentationBlockText";
import GalerieImages4Squares from "../../../components/molecules/GalerieImages4Squares";

function PaintingsGaleriePage() {
  const galeryName = "paintings";

  return (
    <GaleriePageContainer id={galeryName}>
      <GaleriePresentationBlockText galeryName={galeryName} />
      <GaleriesContainer>
        <GalerieImages4Squares
          galeryName={galeryName}
          artworkName="eyes"
          selectedIds={[1, 2, 3]}
        />
        <GalerieImages4Squares
          galeryName={galeryName}
          artworkName="avatar"
          selectedIds={[1, 2, 3]}
        />
        <GalerieImages4Squares
          galeryName={galeryName}
          artworkName="complementary"
          selectedIds={[1, 2, 3]}
        />
        <GalerieImages4Squares
          galeryName={galeryName}
          artworkName="opposite"
          selectedIds={[1, 2, 3]}
        />
      </GaleriesContainer>
    </GaleriePageContainer>
  );
}

/* PaintingsGaleriePage.defaultProps = {
  position: undefined,
};

PaintingsGaleriePage.propTypes = {
  position: PropTypes.string,
};
 */

export default PaintingsGaleriePage;
