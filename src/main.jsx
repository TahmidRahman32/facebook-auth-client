import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

import SignUp from "./pages/SignUp/SignUp";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home></Home>,
      children: [
         {
            path: "/",
            element: <Login></Login>,
         },
         {
            path: "/signUp",
            element: <SignUp></SignUp>,
         },
      ],
   },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
