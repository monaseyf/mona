import React from "react";
import "./styles/burgerMenuStyles.css";
import "./App.css";
import HomePage from "./pages/homePage";
import LoadingPage from "./pages/loadingPage";
import ArchProjects from "./pages/archProjects";
import UIProjects from "./pages/uiProjects";
import PhotoGraphy from "./pages/photoGraphy";
import OtherProjects from "./pages/otherProjects";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//http://preview.themeforest.net/item/ramsay-creative-personal-onepage-html-template/full_screen_preview/25435830?_ga=2.92566299.701328240.1596265290-1176782746.1596264616

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "arch",
        element: <ArchProjects />,
    },
    {
        path: "ui",
        element: <UIProjects />,
    },
    {
        path: "photo",
        element: <PhotoGraphy />,
    },
    {
        path: "other",
        element: <OtherProjects />,
    },
])
const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
