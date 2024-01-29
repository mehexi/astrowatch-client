import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    loader: () => fetch(`http://localhost:5000/watchData`)
  }
]);
