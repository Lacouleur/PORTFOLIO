import React from "react";
import PropTypes from "prop-types";
import texts from "../../utils/texts/texts.json";

import {
  GaleriePresentationContainer,
  GaleriePresentationTextBlock,
  GaleriePresentationTextBody,
  GaleriePresentationTitle,
} from "../../styles/styledComponents/molecules/GaleriePresentationBlockText.sc";

function GaleriePresentationBlockText({ galeryName }) {
  return (
    <GaleriePresentationContainer>
      <GaleriePresentationTitle>
        {texts[galeryName].fr.title}
      </GaleriePresentationTitle>
      <GaleriePresentationTextBlock>
        <GaleriePresentationTextBody>
          {texts[galeryName].fr.prez}
        </GaleriePresentationTextBody>
        <GaleriePresentationTextBody>
          {texts[galeryName].en.prez}
        </GaleriePresentationTextBody>
      </GaleriePresentationTextBlock>
    </GaleriePresentationContainer>
  );
}

/* GaleriePresentationBlockText.defaultProps = {
  position: undefined,
}; */

GaleriePresentationBlockText.propTypes = {
  galeryName: PropTypes.string.isRequired,
};

export default GaleriePresentationBlockText;
