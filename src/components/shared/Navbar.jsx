import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { Button } from "flowbite-react";
import { AuthContext } from "../../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";
const successToast = () => toast.success("Logout Successful");
const errorToast = () => toast.error("Error logging out! Try Again.");
const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOutUser } = use(AuthContext);

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        successToast();
      })
      .catch(() => {
        errorToast();
      });
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-300 font-medium border-b border-l px-2 rounded-lg"
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
      <h1 className="hidden lg:inline text-4xl text-white">|</h1>

      <NavLink to={"/login"}>
        <Button color="none" className="bg-secondary text-white hover:bg-accent">
          Login
        </Button>
      </NavLink>
    </>
  );

  const loggedInLinks = (
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
      <h1 className="hidden lg:inline text-4xl text-white">|</h1>
      <NavLink to={"/dashboard"}>
        <Button color="none" className="bg-yellow-300 hover:bg-yellow-100">
          Dashboard
        </Button>
      </NavLink>
      <NavLink to={"/login"}>
        <Button color="none" className="bg-secondary text-white hover:bg-accent hover:text-primary" onClick={handleLogout}>
          Logout
        </Button>
      </NavLink>
    </>
  );

  return (
    <div className="bg-primary sticky top-0 z-500">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
          <Link to={'/'} className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <span className="text-white text-2xl font-semibold">Wedlyn</span>
          </Link>

          <div className="hidden lg:flex items-center gap-6 text-lg">
            {user ? loggedInLinks : links}
          </div>

          <div className="lg:hidden">
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
          <div className="lg:hidden px-4 pb-4 space-y-3 bg-gray-900 flex flex-col pt-5">
            {user ? loggedInLinks : links}
          </div>
        )}
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Navbar2;
