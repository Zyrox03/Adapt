import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavBar = ({ toggleMobileNav }) => {
  return (
    <nav
      className="py-2 px-12 h-24 flex items-center backdrop-blur-lg  w-full fixed top-0  "
      style={{ zIndex: 2 }}
    >
      <div className="line"></div>

      <div className="flex-1 mr-auto">
        <img
          src="https://assets-global.website-files.com/64bc3e1a76f02c3a8cf863a2/64e922e75fe9fb2215fb850f_White%20Transparent-p-500.webp"
          alt=""
          className="max-w-20"
        />
      </div>

      <ul className="hidden lg:flex gap-12 flex-1 uppercase font-semibold text-sm">
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

      <div className="hidden lg:flex gap-2 items-center flex-1 justify-end">
        <button className="secondary-gradient-button font-bold"> Login</button>
        <button className="primary-gradient-button font-bold"> Buy Now</button>
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
