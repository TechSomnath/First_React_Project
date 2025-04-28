import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes.jsx";
import { StrictMode } from "react";
import App from "./App.jsx"; // Make sure App is imported
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App /> {/* Render App component here */}
    <RouterProvider router={router} />
  </StrictMode>
);
