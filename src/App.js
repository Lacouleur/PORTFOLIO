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
import { lockScrollBody } from "./utils/helpers/appHelper";

function App() {
  const { isDark, isFullView, device } = useSelector((state) => state.main);
  const { fixedNav } = useSelector((state) => state.nav);
  const FullViewRender = useDelayUnmount(isFullView.toogle, 400);
  const dispatch = useDispatch();
  const currentDevice = useCheckDevice();

  useEffect(() => {
    lockScrollBody(isFullView);
  }, [isFullView]);

  useEffect(() => {
    if (currentDevice !== device) {
      dispatch(setDevice(currentDevice));
    }
  }, [currentDevice]);

  return (
    <Theme isDark={isDark}>
      <SiteContainer position="relative">
        {FullViewRender && <FullView fade={isFullView.toogle ? "in" : "out"} />}
        <PageContainer id="home">
          <Header />
          <Home />
          {device === "mobile" && <Navigation stylevariant="home" />}
          {fixedNav && <Navigation stylevariant="galerie" fixedVersion />}
          {device !== "mobile" && <Navigation stylevariant="galerie" />}

          <PaintingsGaleriePage />
          <IllustrationsGaleriePage />
          <Footer />
        </PageContainer>
      </SiteContainer>
    </Theme>
  );
}

export default App;
