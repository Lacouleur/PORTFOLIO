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
    { name: "complementary", isExhibed: true, selectedIds: [1, 2, 3] },
    { name: "opposite", isExhibed: true, selectedIds: [1, 2, 3] },
    { name: "energy", isExhibed: true, selectedIds: [1, 2, 3] },
    { name: "candy", isExhibed: true, selectedIds: [1, 2, 3] },
    { name: "jungle", isExhibed: true, selectedIds: [1, 2, 3] },
    { name: "red_70s", isExhibed: true, selectedIds: [1, 2, 3] },
    { name: "color_wheel", isExhibed: false, selectedIds: [1, 2, 3] },
    { name: "eyes", isExhibed: false, selectedIds: [1, 2, 3] },
    { name: "jazz_jam", isExhibed: false, selectedIds: [1, 2, 3] },
    { name: "avatar", isExhibed: true, selectedIds: [1, 2, 3] },
    { name: "optic", isExhibed: true, selectedIds: [1, 2, 3] },
    { name: "moving_squares", isExhibed: true, selectedIds: [1, 2, 3] },
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
            artWorkCategory={painting.name}
            selectedIds={[1, 2, 3]}
            isExhibed={painting.isExhibed}
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
