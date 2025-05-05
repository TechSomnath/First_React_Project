import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-green-800 text-white px-6 py-4 md:py-6 md:px-8 sticky top-0 z-50 border-b-2 border-green-900">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">React Practice</h3>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
            className="focus:outline-none"
          >
            {isOpen ? <IoMdClose size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul
          className="hidden md:flex gap-6 items-center"
          aria-label="Main Navigation"
        >
          <li
            className={`hover:text-gray-300 cursor-pointer ${
              location.pathname === "/" ? "underline text-yellow-300" : ""
            }`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`hover:text-gray-300 cursor-pointer ${
              location.pathname === "/products"
                ? "underline text-yellow-300"
                : ""
            }`}
          >
            <Link to="/products" onClick={handleLinkClick}>
              Products
            </Link>
          </li>
          <li
            className={`hover:text-gray-300 cursor-pointer ${
              location.pathname === "/blogs" ? "underline text-yellow-300" : ""
            }`}
          >
            <Link to="/blogs" onClick={handleLinkClick}>
              Blogs
            </Link>
          </li>
          <li
            className={`hover:text-gray-300 cursor-pointer ${
              location.pathname === "/contact"
                ? "underline text-yellow-300"
                : ""
            }`}
          >
            <Link to="/contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
          <li
            className={`hover:text-gray-300 cursor-pointer ${
              location.pathname === "/about" ? "underline text-yellow-300" : ""
            }`}
          >
            <Link to="/about" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={handleLinkClick}>
              <button className="bg-white text-green-800 px-4 py-2 rounded hover:bg-green-200">
                Login
              </button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 transition-transform transform ease-out duration-300">
          <ul className="flex flex-col gap-4" aria-label="Mobile Navigation">
            <li
              className={`hover:text-gray-300 cursor-pointer ${
                location.pathname === "/" ? "underline text-yellow-300" : ""
              }`}
            >
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li
              className={`hover:text-gray-300 cursor-pointer ${
                location.pathname === "/products"
                  ? "underline text-yellow-300"
                  : ""
              }`}
            >
              <Link to="/products" onClick={handleLinkClick}>
                Products
              </Link>
            </li>
            <li
              className={`hover:text-gray-300 cursor-pointer ${
                location.pathname === "/blogs"
                  ? "underline text-yellow-300"
                  : ""
              }`}
            >
              <Link to="/blogs" onClick={handleLinkClick}>
                Blogs
              </Link>
            </li>
            <li
              className={`hover:text-gray-300 cursor-pointer ${
                location.pathname === "/contact"
                  ? "underline text-yellow-300"
                  : ""
              }`}
            >
              <Link to="/contact" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
            <li
              className={`hover:text-gray-300 cursor-pointer ${
                location.pathname === "/about"
                  ? "underline text-yellow-300"
                  : ""
              }`}
            >
              <Link to="/about" onClick={handleLinkClick}>
                About
              </Link>
            </li>
          </ul>
          <Link to="/login" onClick={handleLinkClick}>
            <button className="bg-white text-green-800 px-4 py-2 rounded hover:bg-green-200 w-full">
              Login
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
