import React, { useEffect } from "react";

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
import FullView from "./pages/FullView/FullView";

function App() {
  const { isDark, isFullView } = useSelector((state) => state.main);
  const { fixedNav } = useSelector((state) => state.nav);

  useEffect(() => {
    const body = document.getElementById("body");
    if (isFullView.toogle) {
      body.setAttribute("style", "overflow: hidden;");
    } else {
      body.setAttribute("style", "overflow: visible;");
    }
  }, [isFullView]);

  return (
    <Theme isDark={isDark}>
      <SiteContainer position="relative">
        {isFullView.toogle && <FullView />}
        <PageContainer id="home">
          <Header />
          <Home />
          {fixedNav && <Navigation stylevariant="galerie" fixedVersion />}
          <Navigation stylevariant="galerie" />
          <PaintingsGaleriePage />
          <IllustrationsGaleriePage />
        </PageContainer>
      </SiteContainer>
    </Theme>
  );
}

export default App;
