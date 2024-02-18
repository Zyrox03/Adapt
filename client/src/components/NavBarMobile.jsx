import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Link as LinkScroll } from "react-scroll";

const NavBarMobile = ({ mobileNav, toggleMobileNav }) => {
  return (
    <div
      className={`h-screen overflow-y-scroll no-scrollbar bg-black py-4 shadow-lg right-0 flex flex-col gap-8 fixed w-3/4  lg:hidden transition-transform duration-500
    ${mobileNav ? "translate-x-0" : "translate-x-full"}
    `}
      style={{ zIndex: 3 }}
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

        <LinkScroll to="pricing" offset={-100} smooth>
          <li className="transition duration-500 cursor-pointer hover:opacity-[0.5]">
            Pricing
          </li>
        </LinkScroll>
      </ul>

      <div className="flex flex-col items-center gap-4">
        <Link className="w-[80%]" to="/contact">
          <button className="secondary-gradient-button font-bold w-full ">
            {" "}
            Contact
          </button>
        </Link>
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
