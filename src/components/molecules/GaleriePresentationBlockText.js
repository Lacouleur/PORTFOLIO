import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import texts from "../../utils/texts/texts.json";

import {
  GaleriePresentationContainer,
  GaleriePrezTextBlock,
  GaleriePrezTextBody,
  GaleriePresentationTitle,
  GaleriePrezAboutWraperBox,
  GalerieTextBox,
} from "../../styles/styledComponents/molecules/GaleriePresentationBlockText.sc";

function GaleriePresentationBlockText({
  galerieName,
  isDescription,
  foldable,
}) {
  const [expended, setExepnded] = useState(false);

  return (
    <GaleriePresentationContainer>
      <GaleriePresentationTitle>
        {texts[galerieName].fr.title}
      </GaleriePresentationTitle>
      {isDescription && (
        <GaleriePrezTextBlock expended={foldable ? expended : false}>
          <GalerieTextBox>
            <GaleriePrezTextBody>
              {texts[galerieName].fr.prez}
            </GaleriePrezTextBody>
            {foldable && (
              <GaleriePrezAboutWraperBox
                id="galeriePrezTextBody"
                onClick={() => setExepnded(!expended)}
              >
                {expended ? "voir moins " : "lire la suite"}
              </GaleriePrezAboutWraperBox>
            )}
          </GalerieTextBox>
          <GalerieTextBox>
            <GaleriePrezTextBody>
              {texts[galerieName].en.prez}
            </GaleriePrezTextBody>
            {foldable && (
              <GaleriePrezAboutWraperBox
                id="galeriePrezTextBody"
                onClick={() => setExepnded(!expended)}
              >
                {expended ? "fold" : "read more"}
              </GaleriePrezAboutWraperBox>
            )}
          </GalerieTextBox>
        </GaleriePrezTextBlock>
      )}
    </GaleriePresentationContainer>
  );
}

GaleriePresentationBlockText.defaultProps = {
  isDescription: true,
  foldable: false,
};

GaleriePresentationBlockText.propTypes = {
  galerieName: PropTypes.string.isRequired,
  isDescription: PropTypes.bool,
  foldable: PropTypes.bool,
};

export default GaleriePresentationBlockText;
