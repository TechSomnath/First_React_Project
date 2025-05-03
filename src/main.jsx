import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import App from "./App.jsx"; 
import "./index.css";
import router from "./components/Routes.jsx";
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    </StrictMode>
)
