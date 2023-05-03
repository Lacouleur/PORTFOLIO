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
      <GaleriePresentationBlockText galerieName={galerieName} isDescription />

      <GaleriesContainer>
        <GalerieImagesList
          galerieName={galerieName}
          artworkName="cards"
          customName="cartes / cards concept"
          nbPerRow={3}
          nbOfImgs={9}
          customOrder={[9]}
          noExpandLast
        />
        <GalerieImagesList
          galerieName={galerieName}
          artworkName="landscapes"
          customName="Paysages / Landscapes"
          nbOfImgs={7}
          customOrder={[3, 4, 5, 6]}
          nbPerRow={1}
        />
        <GalerieImagesList
          galerieName={galerieName}
          artworkName="concepts"
          customName="Concepts"
          nbOfImgs={3}
          customOrder={[3]}
        />
        <GalerieImagesList
          galerieName={galerieName}
          artworkName="characters"
          subCollection={[
            { subName: "fox", imagesNumber: 6, type: "png" },
            { subName: "rpg", imagesNumber: 3 },
          ]}
          customName="Personnages / Characters & props"
        />
        <GalerieImagesList
          galerieName={galerieName}
          artworkName="personal"
          customName="Personal work"
          nbOfImgs={6}
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
