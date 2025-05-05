import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Products from "../components/pages/Products";
import Contact from "../components/pages/Contact";
import Blogs from "../components/pages/Blogs";
import Root from "../components/layout/Root";
import Login from "../components/auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> }, // Correct JSX component
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "contact", element: <Contact /> },
      { path: "blogs", element: <Blogs /> },
      { path: "login", element: <Login/> },
    ],
  },
]);

export default router;
