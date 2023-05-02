import React from "react";
import PropTypes from "prop-types";
import texts from "../../utils/texts/texts.json";

import {
  GaleriePresentationContainer,
  GaleriePresentationTextBlock,
  GaleriePresentationTextBody,
  GaleriePresentationTitle,
} from "../../styles/styledComponents/molecules/GaleriePresentationBlockText.sc";

function GaleriePresentationBlockText({ galerieName, isDescription }) {
  return (
    <GaleriePresentationContainer>
      <GaleriePresentationTitle>
        {texts[galerieName].fr.title}
      </GaleriePresentationTitle>
      {isDescription && (
        <GaleriePresentationTextBlock>
          <GaleriePresentationTextBody>
            {texts[galerieName].fr.prez}
          </GaleriePresentationTextBody>
          <GaleriePresentationTextBody>
            {texts[galerieName].en.prez}
          </GaleriePresentationTextBody>
        </GaleriePresentationTextBlock>
      )}
    </GaleriePresentationContainer>
  );
}

GaleriePresentationBlockText.defaultProps = {
  isDescription: true,
};

GaleriePresentationBlockText.propTypes = {
  galerieName: PropTypes.string.isRequired,
  isDescription: PropTypes.bool,
};

export default GaleriePresentationBlockText;
