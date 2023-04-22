import React from "react";
import { GaleriePageContainer } from "../../../styles/styledComponents/GaleriesPages.sc";
import Header from "../../../components/header";
import Navigation from "../../../components/atoms/Navigation";

function IllustrationsGaleriePage() {
  return (
    <GaleriePageContainer>
      <Header />
      <Navigation stylevariant="galery" />
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
