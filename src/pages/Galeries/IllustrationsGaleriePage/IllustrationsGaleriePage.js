import React from "react";

import {
  GaleriePageContainer,
  GaleriesContainer,
} from "../../../styles/styledComponents/GaleriesPages.sc";
import GaleriePresentationBlockText from "../../../components/molecules/GaleriePresentationBlockText";
import GalerieImagesList from "../../../components/molecules/GalerieImagesList";

function IllustrationsGaleriePage() {
  const galerieName = "illustrations";

  return (
    <GaleriePageContainer id={galerieName}>
      <GaleriePresentationBlockText
        galerieName={galerieName}
        isDescription={false}
      />
      <GaleriesContainer>
        <GalerieImagesList
          galerieName={galerieName}
          artworkName="landscapes"
          customName="Paysages / Landscapes"
          nbOfImgs={3}
        />
        <GalerieImagesList
          galerieName={galerieName}
          artworkName="cards"
          customName="cartes / cards concept"
          nbOfImgs={9}
        />
        <GalerieImagesList
          galerieName={galerieName}
          artworkName="characters"
          subCollection={[
            { subName: "fox", imagesNumber: 3, type: "png" },
            { subName: "rpg", imagesNumber: 3 },
          ]}
          customName="Paysages / Landscapes"
        />
        {/*  <GalerieImagesList
          galerieName={galerieName}
          artworkName="landscapes"
          customName="Paysages / Landscapes"
          nbOfImgs={3}
        /> */}
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
