import React from "react";

import { useSelector } from "react-redux";

import Home from "./pages/HomePage/HomePage";
import Theme from "./styles/core/theme";
import {
  PageContainer,
  SiteContainer,
} from "./styles/styledComponents/PagesContainer.sc";
import PaintingsGaleriePage from "./pages/Galeries/PaintingsGaleriePage/PaintingsGaleriePage";
import IllustrationsGaleriePage from "./pages/Galeries/IllustrationsGaleriePage/IllustrationsGaleriePage";
import Header from "./components/header";
import Navigation from "./components/atoms/Navigation";

function App() {
  const { isDark } = useSelector((state) => state.main);
  const { fixedNav } = useSelector((state) => state.nav);

  return (
    <Theme isDark={isDark}>
      <SiteContainer position="relative">
        <PageContainer id="home">
          {/* {page} */}
          <Header />
          <Home />
          {fixedNav && <Navigation stylevariant="galery" fixedVersion />}
          <Navigation stylevariant="galery" />

          <PaintingsGaleriePage />
          <IllustrationsGaleriePage />
        </PageContainer>
      </SiteContainer>
    </Theme>
  );
}

export default App;
