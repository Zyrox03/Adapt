import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../assets/images/logo.webp";
import { Link as LinkScroll } from "react-scroll";
const NavBar = ({ toggleMobileNav }) => {
  return (
    <nav
      className="py-2 pr-4 lg:px-4 h-24 flex items-center backdrop-blur-lg  w-full fixed top-0  "
      style={{ zIndex: 2 }}
    >
      <div className="line"></div>

      <div className="flex-1 mr-auto">
        <Link to="/">
          <img src={logo} alt="" className="max-w-72" />
        </Link>
      </div>

      <ul className="hidden lg:flex gap-6 xl:gap-8 flex-1 uppercase font-semibold text-sm">
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

        <li className="transition duration-500 cursor-pointer hover:opacity-[0.5]">
          Services
        </li>
        <Link to="/learn">
          <li className="transition duration-500 cursor-pointer hover:opacity-[0.5]">
            Learn
          </li>
        </Link>

        <li className="transition duration-500 cursor-pointer hover:opacity-[0.5]">
          Careers
        </li>

        <LinkScroll to="pricing" offset={-100} smooth>
          <li className="transition duration-500 cursor-pointer hover:opacity-[0.5]">
            Pricing
          </li>
        </LinkScroll>
      </ul>

      <div className="hidden lg:flex gap-2 items-center flex-1 justify-end">
        <Link to="/contact">
          <button className="secondary-gradient-button font-bold w-[80%] ">
            {" "}
            Contact
          </button>
        </Link>{" "}
        <button className="primary-gradient-button font-bold">
          Book a Demo
        </button>
      </div>

      <i
        onClick={toggleMobileNav}
        className="lg:hidden cursor-pointer fa-solid fa-bars"
      ></i>
    </nav>
  );
};

export default NavBar;

NavBar.propTypes = {
  toggleMobileNav: PropTypes.func,
};
