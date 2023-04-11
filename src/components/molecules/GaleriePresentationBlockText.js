import React from "react";
import texts from "../../utils/texts/texts.json";
import {
  GaleriePresentationContainer,
  GaleriePresentationTextBlock,
  GaleriePresentationTextBody,
  GaleriePresentationTitle,
} from "../../styles/styledComponents/molecules/GaleriePresentationBlockText.sc";

function GaleriePresentationBlockText() {
  console.warn("text", texts.paintsGaleriePage.fr.prez);
  return (
    <GaleriePresentationContainer>
      <GaleriePresentationTitle>
        {texts.paintsGaleriePage.fr.title}
      </GaleriePresentationTitle>
      <GaleriePresentationTextBlock>
        <GaleriePresentationTextBody>
          {texts.paintsGaleriePage.fr.prez}
        </GaleriePresentationTextBody>
        <GaleriePresentationTextBody>
          {texts.paintsGaleriePage.en.prez}
        </GaleriePresentationTextBody>
      </GaleriePresentationTextBlock>
    </GaleriePresentationContainer>
  );
}

/* GaleriePresentationBlockText.defaultProps = {
  position: undefined,
};

GaleriePresentationBlockText.propTypes = {
  position: PropTypes.string,
};
 */

export default GaleriePresentationBlockText;
