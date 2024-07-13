import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Main/Root";
import Aboutme from "../Pages/Aboutme";
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/about',
          element:<Aboutme></Aboutme>
        }
      ]
    },
  ]);