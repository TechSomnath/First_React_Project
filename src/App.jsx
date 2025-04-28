import React from "react";
import { Outlet } from "react-router-dom"; // For rendering child routes

const App = () => {
  return (
    <div>
      
      <Outlet />{" "}
      
    </div>
  );
};

export default App;
