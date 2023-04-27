import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from "./pages/home";

import Pagelogin from './pages/Pagelogin';
import Profile from './pages/profile';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';

import Popper from 'popper.js';

import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Userprofile from "./comp/Userprofile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>SORROY.........</h1>,
  },
  {
    path: "/pagelogin",
    element: <Pagelogin />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


