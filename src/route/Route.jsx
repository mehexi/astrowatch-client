import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/homepage/MainPage";
import AddWatch from "../pages/addwatch/AddWatch";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    loader: () => fetch(`http://localhost:5000/watchData`)
  },
  {
    path: '/addWatch',
    element:<AddWatch/>
  }
]);
