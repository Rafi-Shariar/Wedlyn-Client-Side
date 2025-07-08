import { Link } from "react-router";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import logo from "../../assets/logo.png";

export const Footer = () => {
  return (
    <footer className="mt-16 bg-primary p-8 text-white">
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand and Description */}
        <div className="sm:col-span-2">
          <Link to="/" className="inline-flex items-center gap-3">
            <img src={logo} alt="Wedlyn Logo" className="w-10" />
            <h1 className="text-3xl font-semibold tracking-tight">Wedlyn</h1>
          </Link>
          <p className="mt-6 text-gray-300 max-w-md leading-relaxed">
            Wedlyn is dedicated to creating authentic, long-lasting connections. 
            In a world full of dating apps and fleeting interactions, we provide 
            a trusted space where individuals can find not just a partner — but a life companion.
          </p>
        </div>

        {/* Contacts */}
        <div className="space-y-3 text-sm">
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <div className="flex items-center">
            <span className="mr-2 text-gray-300 font-medium">Phone:</span>
            <a
              href="tel:+8801617852079"
              className="text-secondary hover:text-secondary-dark transition-colors duration-300"
              aria-label="Phone number"
            >
              +880 1617 852 079
            </a>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-gray-300 font-medium">Email:</span>
            <a
              href="mailto:support@wedlyn.com"
              className="text-secondary hover:text-secondary-dark transition-colors duration-300"
              aria-label="Email address"
            >
              support@wedlyn.com
            </a>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-gray-300 font-medium">Address:</span>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-secondary-dark transition-colors duration-300"
              aria-label="Address"
            >
              Gulshan 2, Dhaka, Bangladesh
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-6 text-gray-300">
            <a
              href="#"
              className="hover:text-secondary transition-colors duration-300"
              aria-label="Twitter"
              title="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="hover:text-secondary transition-colors duration-300"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="hover:text-secondary transition-colors duration-300"
              aria-label="Facebook"
              title="Facebook"
            >
              <FaFacebookF size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 pt-6 border-t border-gray-700 max-w-7xl mx-auto flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-gray-400 text-center sm:text-left">
          © {new Date().getFullYear()} Wedlyn. All rights reserved.
        </p>
        <ul className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 sm:justify-start">
          <li>
            
          </li>
          <li>
            <Link
              to="/privacy-policy"
              className="hover:text-secondary transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              to="/terms"
              className="hover:text-secondary transition-colors duration-300"
            >
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
