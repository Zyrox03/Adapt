import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Link as LinkScroll } from "react-scroll";

const NavBarMobile = ({ mobileNav, toggleMobileNav }) => {
  return (
    <div
      className={` h-screen overflow-y-scroll bg-black py-4 shadow-lg right-0 flex flex-col gap-8 fixed w-3/4  lg:hidden transition-transform duration-500
    ${mobileNav ? "translate-x-0" : "translate-x-full"}
    `}
      style={{ zIndex: 2 }}
    >
      <div className="py-2 px-12 h-24 flex justify-end items-center">
        <i
          onClick={toggleMobileNav}
          className="lg:hidden cursor-pointer fa-solid fa-bars"
        ></i>
      </div>

      <ul className=" flex flex-col px-8 lg:hidden gap-8 uppercase font-semibold text-xs text-center">
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

        <LinkScroll to="pricing" offset={-100} smooth>
          <li className="transition duration-500 cursor-pointer hover:opacity-[0.5]">
            Learn
          </li>
        </LinkScroll>

        <li className="transition duration-500 cursor-pointer hover:opacity-[0.5]">
          Careers
        </li>

        <LinkScroll to="pricing" offset={-100} smooth>
          <li className="transition duration-500 cursor-pointer hover:opacity-[0.5]">
            Pricing
          </li>
        </LinkScroll>

        <Link to="/contact">
          <li className="transition duration-500 cursor-pointer hover:opacity-[0.5]">
            Contact
          </li>
        </Link>
      </ul>

      <div className="flex flex-col items-center gap-4">
        <button className="secondary-gradient-button font-bold w-[80%] ">
          {" "}
          Login
        </button>
        <button className="primary-gradient-button font-bold w-[80%] ">
          {" "}
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default NavBarMobile;

NavBarMobile.propTypes = {
  mobileNav: PropTypes.bool,
  toggleMobileNav: PropTypes.func,
};
