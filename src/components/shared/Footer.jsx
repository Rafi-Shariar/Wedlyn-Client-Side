import { Link } from "react-router";
import logo from "../../assets/logo.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className="mt-16 bg-primary p-8 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between lg:items-center">
        {/* Brand and Description */}
        <div className="">
          <Link to="/" className="inline-flex items-center gap-3">
            <img src={logo} alt="Wedlyn Logo" className="w-10" />
            <h1 className="text-3xl font-semibold tracking-tight">Wedlyn</h1>
          </Link>
          <p className=" text-gray-400 max-w-2xl leading-relaxed">
            Wedlyn is dedicated to creating authentic, long-lasting connections.
            In a world full of dating apps and fleeting interactions, we provide
            a trusted space where individuals can find not just a partner — but
            a life companion.
          </p>
        </div>

        {/* Social Media */}
        <div className="mt-6 lg:mt-0">
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-6 text-gray-300">
            <a
              href="https://www.facebook.com/rafi.shariar.630040/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-400 text-2xl transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/rafi-shariar-231449214/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-600 text-2xl transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/Rafi-Shariar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl transition"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:rafi.shariar619@gmail.com"
              className="text-gray-400 hover:text-red-500 text-2xl transition"
            >
              <FaEnvelope />
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
