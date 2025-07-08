import React, { useState } from "react";
import { NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { Button } from "flowbite-react";
const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-accent font-medium underline"
      : "text-white hover:text-accent transition";

  const links = (
    <>
      <NavLink to="/" className={navLinkClass}>
        Home
      </NavLink>
      <NavLink to="/biodatas" className={navLinkClass}>
        Biodatas
      </NavLink>
      <NavLink to="/aboutus" className={navLinkClass}>
        About Us
      </NavLink>
      <NavLink to="/contactus" className={navLinkClass}>
        Contact Us
      </NavLink>
      <h1 className="hidden md:inline text-4xl text-white">|</h1>
      <Button color="none" className="bg-secondary hover:bg-accent">
        Login
      </Button>
    </>
  );

  return (
    <div className="bg-primary sticky top-0 z-500">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <span className="text-white text-2xl font-semibold">Wedlyn</span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-lg">
            {links}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {isOpen && (
          <div className="md:hidden px-4 pb-4 space-y-3 bg-gray-900 flex flex-col">
            {links}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar2;
