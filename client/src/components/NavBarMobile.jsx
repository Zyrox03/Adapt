import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavBarMobile = ({ mobileNav, toggleMobileNav }) => {
  return (
    <div
      className={` h-screen  bg-black right-0 flex flex-col gap-8 fixed w-1/2 lg:hidden transition-transform duration-500
    ${mobileNav ? "translate-x-0" : "translate-x-full ]]"}
    `}
      style={{ zIndex: 2 }}
    >
      <div className="py-2 px-12 h-24 flex justify-end items-center">
        <i
          onClick={toggleMobileNav}
          className="lg:hidden cursor-pointer fa-solid fa-bars"
        ></i>
      </div>

      <ul className=" flex flex-col px-8 lg:hidden gap-8 uppercase font-semibold text-sm">
        <Link to="/">
          <li className="transition duration-500 cursor-pointer hover:opacity-[0.5]">
            Home
          </li>
        </Link>

        <Link to="/faq">
          <li className="transition duration-500 cursor-pointer hover:opacity-[0.5]">
            Faq
          </li>
        </Link>

        <li className="transition duration-500 cursor-pointer hover:opacity-[0.5]">
          Feature
        </li>
        <li className="transition duration-500 cursor-pointer hover:opacity-[0.5]">
          Pricing
        </li>
        <li className="transition duration-500 cursor-pointer hover:opacity-[0.5]">
          Learn
        </li>
        <Link to="/reviews">
          <li className="transition duration-500 cursor-pointer hover:opacity-[0.5]">
            Reviews
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
    mobileNav : PropTypes.bool,
    toggleMobileNav : PropTypes.func
  };