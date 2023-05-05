import React from "react";
import {
  GaleriePageContainer,
  GaleriesContainer,
} from "../../../styles/styledComponents/GaleriesPages.sc";
import GaleriePresentationBlockText from "../../../components/molecules/GaleriePresentationBlockText";
import GalerieImages4Squares from "../../../components/molecules/GalerieImages4Squares";

function PaintingsGaleriePage() {
  const galerieName = "paintings";

  return (
    <GaleriePageContainer id={galerieName}>
      <GaleriePresentationBlockText galerieName={galerieName} foldable />
      <GaleriesContainer>
        <GalerieImages4Squares
          galerieName={galerieName}
          artworkName="eyes"
          selectedIds={[1, 2, 3]}
        />
        <GalerieImages4Squares
          galerieName={galerieName}
          artworkName="avatar"
          selectedIds={[1, 2, 3]}
        />
        <GalerieImages4Squares
          galerieName={galerieName}
          artworkName="complementary"
          selectedIds={[1, 2, 3]}
        />
        <GalerieImages4Squares
          galerieName={galerieName}
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
