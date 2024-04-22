import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../assets/images/logo.webp";
import { useState } from "react";
const NavBar = ({ toggleMobileNav }) => {
  const [showServices, setShowServices] = useState(false);
 
  return (
    <div className="transition duration-500">
      <nav
        className="py-2 px-4 lg:pl-4 h-[6em] flex items-center backdrop-blur-lg  w-full fixed top-0  "
        style={{ zIndex: 3 }}
      >
        <div className="line-3-bottom"></div>
        <div className="lg:flex-1">
          <Link to="/">
            <img src={logo} alt="" className="max-w-72" />
          </Link>
        </div>

        <ul className="hidden lg:flex gap-6 xl:gap-8 flex-1 justify-center text-center uppercase font-semibold text-sm">
          <Link to="/">
            <li className="transition duration-500 cursor-pointer hover:opacity-[0.5]">
              Home
            </li>
          </Link>

          <Link to="/faq">
            <li className="transition duration-500 cursor-pointer hover:opacity-[0.5]">
              FAQ
            </li>
          </Link>

          <li
            className={`transition duration-500 cursor-pointer hover:opacity-[0.5] ${showServices && 'text-teal-600'} `}
            onClick={() => setShowServices(!showServices)}
          >
            Services
          </li>

          <Link to="/learn">
            <li className="transition duration-500 cursor-pointer hover:opacity-[0.5]">
              Learn
            </li>
          </Link>

          <Link to="/careers">
            <li className="transition duration-500 cursor-pointer hover:opacity-[0.5]">
              Careers
            </li>
          </Link>

          <Link to="/pricing">
            <li className="transition duration-500 cursor-pointer hover:opacity-[0.5]">
              Pricing
            </li>
          </Link>
        </ul>

        <div className="hidden lg:flex gap-4 items-center flex-1 justify-end">
          <Link to="/contact">
            <button className="secondary-gradient-button font-bold  ">
              {" "}
              Contact
            </button>
          </Link>{" "}
          <a target="__blank" rel="noreferrer" href="https://calendly.com/adapt-ent/30min">
            <button className="secondary-gradient-button font-bold  ">
              {" "}
              Get Tech Help
            </button>
          </a>{" "}

        <a target="__blank" rel="noreferrer" href="https://calendly.com/adapt-ent/30min">

          <button className="primary-gradient-button font-bold">
            Book a Demo
          </button>
        </a>

        </div>

        <i
          onClick={toggleMobileNav}
          className="lg:hidden cursor-pointer fa-solid fa-bars ml-auto"
        ></i>
      </nav>
      <div
        style={{ zIndex: 2 }}
        className={`services_dropdown backdrop-blur-lg w-72  fixed top-[6em] left-1/2 transition duration-500 -translate-x-1/2 ${
          showServices ? "translate-y-0" : "-translate-y-[200%] "
        }`}
      >
        <div className="p-4 hover:bg-black/50 hover:text-teal-600 cursor-pointer transition">
          <span>Website chatbots</span>{" "}
        </div>
        <div className="p-4 hover:bg-black/50 hover:text-teal-600 cursor-pointer transition">
          <span>Social Media Inbox chatbots</span>{" "}
        </div>
        <div className="line-3-bottom"></div>
        <div className="line-4"></div>
        <div className="line-2-right"></div>{" "}
      </div>
    </div>
  );
};

export default NavBar;

NavBar.propTypes = {
  toggleMobileNav: PropTypes.func,
};
