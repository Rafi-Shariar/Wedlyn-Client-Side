import { useState } from "react";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-primary text-white sticky top-0 z-[100]">
      <div className="relative flex items-center justify-between px-4 py-3">
        {/* Brand */}
        <a href="/" aria-label="Company" className="inline-flex items-center">
          <svg
            className="w-8 text-secondary"
            viewBox="0 0 24 24"
            strokeLinejoin="round"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            stroke="currentColor"
            fill="none"
          >
            <rect x="3" y="1" width="7" height="12" />
            <rect x="3" y="17" width="7" height="6" />
            <rect x="14" y="1" width="7" height="6" />
            <rect x="14" y="11" width="7" height="12" />
          </svg>
          <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
            Wedlyn
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center space-x-8">
          <li><a href="/" className="hover:text-secondary">Product</a></li>
          <li><a href="/" className="hover:text-secondary">Features</a></li>
          <li><a href="/" className="hover:text-secondary">Pricing</a></li>
          <li><a href="/" className="hover:text-secondary">About Us</a></li>
          <li>
            <a href="/" className="bg-secondary text-white px-4 py-2 rounded hover:bg-accent transition-all">
              Sign Up
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(true)} className="focus:outline-none">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24">
              <path fill="currentColor" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white text-gray-800 z-[99] shadow">
          <div className="p-4 space-y-4">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-2 right-4">
              <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24">
                <path fill="currentColor" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <a href="/" className="block">Product</a>
            <a href="/" className="block">Features</a>
            <a href="/" className="block">Pricing</a>
            <a href="/" className="block">About Us</a>
            <a href="/" className="block bg-secondary text-white text-center py-2 rounded">Sign Up</a>
          </div>
        </div>
      )}
    </div>
  );
};
