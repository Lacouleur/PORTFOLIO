import { StrictMode, React } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/redux";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import App from "./App";
import Home from "./pages/HomePage/HomePage";
import PaintingsGaleriePage from "./pages/Galeries/PaintingsGaleriePage/PaintingsGaleriePage";
import IllustrationsGaleriePage from "./pages/Galeries/IllustrationsGaleriePage/IllustrationsGaleriePage";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App page={<Home />} />,
  },
  /*   {
    path: "/paints",
    element: <App page={<PaintingsGaleriePage />} />,
  },
  {
    path: "/illustrations",
    element: <App page={<IllustrationsGaleriePage />} />,
  }, */
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
