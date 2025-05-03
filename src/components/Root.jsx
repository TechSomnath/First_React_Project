import React from "react";
import { Outlet } from "react-router-dom"; 
import Navbar from "./Navbar"; 
import Footer from "./Footer"; 

const Root = () => {
  return (
    <div >
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
