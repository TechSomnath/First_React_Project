import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root"; // This path should be correct
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import Blogs from "./Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Render Root component for "/"
    children: [
      { index: true, element: <Home /> }, // Default route ("/")
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "contact", element: <Contact /> },
      { path: "blogs", element: <Blogs /> },
    ],
  },
]);

export default router;
