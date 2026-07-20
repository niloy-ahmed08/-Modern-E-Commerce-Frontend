import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import Rootlayout from "./Rootlayout";

export const router = createBrowserRouter([
 {
    path: "/",
    Component:Rootlayout,
    children: [
      { index: true, Component: Home},
    //   { path: "about", Component: About },
      
    ],
  },
]);