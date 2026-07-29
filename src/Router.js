import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import Rootlayout from "./Rootlayout";
import CataGories from "./Components/CataGories";
import LoginExclusive from "./Components/LoginExclusive";
import SingUp from "./Components/SingUp";
import SellinghProducts from "./Components/SellinghProducts";

export const router = createBrowserRouter([
 {
    path: "/",
    Component:Rootlayout,
    children: [
      { index: true, Component: Home},
      { path: "nabigate", Component: CataGories },
      { path: "navitgateignup", Component: LoginExclusive },
       { path: "signuppart", Component: SingUp },
        { path: "navitgateabout", Component: SellinghProducts },
      
    ],
  },
]);