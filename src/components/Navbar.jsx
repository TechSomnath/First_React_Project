import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-800 text-white px-6 py-4 md:py-6 md:px-8">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">React Practice</h3>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <IoMdClose size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to="/products">Products</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
        </ul>

        <button className="hidden md:block bg-white text-green-800 px-4 py-2 rounded hover:bg-green-200">
          Login
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4">
          <ul className="flex flex-col gap-4">
            <li className="hover:text-gray-300 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <Link to="products">Products</Link>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <Link to="/about">About</Link>
            </li>
          </ul>
          <button className="bg-white text-green-800 px-4 py-2 rounded hover:bg-green-200 w-full">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
