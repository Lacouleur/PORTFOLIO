import React, { useEffect, useState } from "react";

import { Provider, useDispatch, useSelector } from "react-redux";
import Home from "./pages/HomePage/HomePage";
import Theme from "./styles/core/theme";
import {
  PageContainer,
  SiteContainer,
} from "./styles/styledComponents/PagesContainer.sc";
import PaintsGaleriePage from "./pages/Galeries/PaintsGaleriePage/PaintsGaleriePage";
import IllustrationsGaleriePage from "./pages/Galeries/IllustrationsGaleriePage/IllustrationsGaleriePage";
import Header from "./components/header";
import Navigation from "./components/atoms/Navigation";

function App({ page }) {
  const { isDark } = useSelector((state) => state.main);
  const { fixedNav, fixedHeader } = useSelector((state) => state.nav);

  return (
    <Theme isDark={isDark}>
      <SiteContainer position="relative">
        <PageContainer>
          {/* {page} */}
          <Header />
          <Home />
          {fixedNav && <Navigation stylevariant="galery" fixedVersion />}
          <Navigation stylevariant="galery" />

          {/*           <PaintsGaleriePage /> */}
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
