import React, { useState } from "react";

import { Provider, useSelector } from "react-redux";
import Home from "./pages/HomePage/HomePage";
import Theme from "./styles/core/theme";
import {
  PageContainer,
  SiteContainer,
} from "./styles/styledComponents/PagesContainer.sc";
import PaintsGaleriePage from "./pages/Galeries/PaintsGaleriePage/PaintsGaleriePage";
import IllustrationsGaleriePage from "./pages/Galeries/IllustrationsGaleriePage/IllustrationsGaleriePage";

function App({ page }) {
  const { isDark } = useSelector((state) => state.main);

  return (
    <Theme isDark={isDark}>
      <SiteContainer position="relative">
        <PageContainer>
          {/* {page} */}
          <Home />
          <PaintsGaleriePage />
          <IllustrationsGaleriePage />
        </PageContainer>
      </SiteContainer>
    </Theme>
  );
}

/* App.defaultProps = {
  position: undefined,
};

App.propTypes = {
  position: PropTypes.string,
};
 */
export default App;
