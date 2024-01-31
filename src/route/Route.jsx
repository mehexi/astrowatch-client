import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/homepage/MainPage";
import AddWatch from "../pages/addwatch/AddWatch";
import Products from "../componant/Products";
import SingleProduct from "../pages/singleProductPage/SingleProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children: [
      {
        path: '/',
        element: <Products></Products>,
        loader: ()=>fetch('http://localhost:5000/watchData')
      },
      {
        path: '/mansCollection',
        element: <Products></Products>,
        loader:()=> fetch('http://localhost:5000/mansWatch')
      },
      {
        path: '/womansCollection',
        element: <Products></Products>,
        loader:()=> fetch('http://localhost:5000/womansWatch')
      }
    ]
  },
  {
    path: '/:id',
    element: <SingleProduct></SingleProduct>,
    loader: ({params})=>fetch(`http://localhost:5000/watchData/${params.id}`)
  },
  {
    path: '/addWatch',
    element:<AddWatch/>
  }
]);
