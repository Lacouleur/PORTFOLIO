import React, { useEffect, useRef, useState } from "react";

import { useDispatch } from "react-redux";
import {
  GaleriePageContainer,
  GaleriesContainer,
} from "../../../styles/styledComponents/GaleriesPages.sc";
import GaleriePresentationBlockText from "../../../components/molecules/GaleriePresentationBlockText";
import GalerieImagesList from "../../../components/molecules/GalerieImagesList";
import { useScrollPosition } from "../../../utils/customHooks/useScrollPosition";
import { setLocation } from "../../../store/redux";

function IllustrationsGaleriePage() {
  const dispatch = useDispatch();
  const galerieName = "illustrations";
  const [isIllustrations, setIsIllustration] = useState(false);

  const illustrationsGalerieRef = useRef(null);

  useEffect(() => {
    if (isIllustrations) {
      dispatch(setLocation("illustrations"));
    } else {
      dispatch(setLocation("paintings"));
    }
  }, [isIllustrations]);

  useScrollPosition(
    illustrationsGalerieRef,
    undefined,
    setIsIllustration,
    -160,
  );

  return (
    <GaleriePageContainer id={galerieName} ref={illustrationsGalerieRef}>
      <GaleriePresentationBlockText galerieName={galerieName} isDescription />

      <GaleriesContainer>
        <GalerieImagesList
          galerieName={galerieName}
          artWorkCategory="popculture"
          customName="Pop Culture"
          nbPerRow={3}
          nbOfImgs={6}
          customOrder={[]}
          noExpandLast
          roundedBorders
        />

        <GalerieImagesList
          galerieName={galerieName}
          artWorkCategory="cards"
          customName="cartes / cards concept"
          nbPerRow={4}
          nbOfImgs={13}
          customOrder={[4, 5, 11, 8, 1, 2, 3, 12, 9, 10, 7, 6, 13]}
          noExpandLast
          roundedBorders
        />

        <GalerieImagesList
          galerieName={galerieName}
          artWorkCategory="landscapes"
          customName="Paysages / Landscapes"
          nbOfImgs={7}
          nbPerRow={2}
          customOrder={[3, 4, 6, 7, 1, 2, 1]}
          roundedBorders
        />
        <GalerieImagesList
          galerieName={galerieName}
          artWorkCategory="characters"
          subCollection={[{ subName: "fox", imagesNumber: 6, type: "png" }]}
          customName="Personnages concepts/ Characters concepts"
          nbPerRow={3}
          noExpandLast
        />
        <GalerieImagesList
          galerieName={galerieName}
          artWorkCategory="characters"
          subCollection={[{ subName: "rpg", imagesNumber: 7, type: "jpg" }]}
          customName="Personnages & objets / Characters & props"
          nbPerRow={2}
          customOrder={[1, 2, 3, 4, 7, 6, 5]}
          noHeader
          roundedBorders
        />
        <GalerieImagesList
          galerieName={galerieName}
          artWorkCategory="personal"
          customName="Personal work"
          nbOfImgs={6}
          nbPerRow={3}
          customOrder={[1, 5, 4, 6, 3, 7, 2]}
          roundedBorders
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
