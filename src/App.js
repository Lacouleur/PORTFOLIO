import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Home from "./pages/HomePage/HomePage";
import Theme from "./styles/core/theme";
import {
  PageContainer,
  SiteContainer,
} from "./styles/styledComponents/PagesContainer.sc";
import PaintingsGaleriePage from "./pages/Galeries/PaintingsGaleriePage/PaintingsGaleriePage";
import IllustrationsGaleriePage from "./pages/Galeries/IllustrationsGaleriePage/IllustrationsGaleriePage";
import Header from "./components/molecules/header";
import Navigation from "./components/atoms/Navigation";
import FullView from "./pages/FullView/FullView";
import useDelayUnmount from "./utils/customHooks/useDelayUnmount";
import { setDevice } from "./store/redux";
import useCheckDevice from "./utils/customHooks/useCheckDevice";
import Footer from "./components/molecules/Footer";

function App() {
  const { isDark, isFullView } = useSelector((state) => state.main);
  const { fixedNav } = useSelector((state) => state.nav);
  const shouldRender = useDelayUnmount(isFullView.toogle, 400);
  const dispatch = useDispatch();
  const currentDevice = useCheckDevice();

  useEffect(() => {
    const body = document.getElementById("body");
    if (isFullView.toogle) {
      body.setAttribute("style", "overflow: hidden;");
    } else {
      body.setAttribute("style", "overflow: visible;");
    }
  }, [isFullView]);

  useEffect(() => {
    dispatch(setDevice(currentDevice));
  }, [currentDevice]);

  return (
    <Theme isDark={isDark}>
      <SiteContainer position="relative">
        {shouldRender && <FullView fade={isFullView.toogle ? "in" : "out"} />}
        <PageContainer id="home">
          <Header />
          <Home />
          {fixedNav && <Navigation stylevariant="galerie" fixedVersion />}
          <Navigation stylevariant="galerie" />
          <PaintingsGaleriePage />
          <IllustrationsGaleriePage />
          <Footer />
        </PageContainer>
      </SiteContainer>
    </Theme>
  );
}

export default App;
