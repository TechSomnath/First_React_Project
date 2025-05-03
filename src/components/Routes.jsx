import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import Blogs from "./Blogs";
import Root from "./Root";

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
    ],
  },
]);

export default router;
