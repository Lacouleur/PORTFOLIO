import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  GaleriePageContainer,
  GaleriesContainer,
} from "../../../styles/styledComponents/GaleriesPages.sc";
import GaleriePresentationBlockText from "../../../components/molecules/GaleriePresentationBlockText";
import GalerieImages4Squares from "../../../components/molecules/GalerieImages4Squares";
import { setLocation } from "../../../store/redux";
import { useScrollPosition } from "../../../utils/customHooks/useScrollPosition";

function PaintingsGaleriePage() {
  const [isPaintings, setIsPaintings] = useState(false);
  const dispatch = useDispatch();
  const paintingsGalerieRef = useRef(null);
  const galerieName = "paintings";
  const paintingsName = [
    { name: "complementary", selectedIds: [1, 2, 3] },
    { name: "opposite", selectedIds: [1, 2, 3] },
    { name: "energy", selectedIds: [1, 2, 3] },
    { name: "candy", selectedIds: [1, 2, 3] },
    { name: "jungle", selectedIds: [1, 2, 3] },
    { name: "red_70s", selectedIds: [1, 2, 3] },
    { name: "color_wheel", selectedIds: [1, 2, 3] },
    { name: "eyes", selectedIds: [1, 2, 3] },
    { name: "jazz_jam", selectedIds: [1, 2, 3] },
    { name: "avatar", selectedIds: [1, 2, 3] },
    { name: "optic", selectedIds: [1, 2, 3] },
    { name: "moving_squares", selectedIds: [1, 2, 3] },
  ];

  useEffect(() => {
    if (isPaintings) {
      dispatch(setLocation("paintings"));
    }
  }, [isPaintings]);

  useScrollPosition(paintingsGalerieRef, undefined, setIsPaintings, -1000);

  return (
    <GaleriePageContainer id={galerieName} ref={paintingsGalerieRef}>
      <GaleriePresentationBlockText
        isDescription
        galerieName={galerieName}
        foldable
      />
      <GaleriesContainer>
        {paintingsName.map((painting, index) => (
          <GalerieImages4Squares
            key={painting.name}
            galerieName={galerieName}
            artworkName={painting.name}
            selectedIds={[1, 2, 3]}
          />
        ))}
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
