import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import { Transition } from "@headlessui/react";

const NavBarMobile = ({ mobileNav, toggleMobileNav }) => {
  const [showServices, setShowServices] = useState(false);

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

        <li
          onClick={() => setShowServices(!showServices)}
          className={`transition duration-500 cursor-pointer hover:opacity-[0.5] ${
            showServices && "text-teal-600"
          }`}
        >
          Services
        </li>

        <Transition
          show={showServices}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {() => (
            <div className="flex flex-col gap-8">
              <Link to="/website-chatbots">
                <li className="transition duration-500 cursor-pointer hover:opacity-[0.5]">
                  Website chatbots{" "}
                </li>
              </Link>
              <Link to="/social-media-inbox-chatbots">
                <li className="transition duration-500 cursor-pointer hover:opacity-[0.5]">
                  Social Media Inbox chatbots
                </li>
              </Link>
            </div>
          )}
        </Transition>

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

      <div className="flex flex-col items-center gap-4">
        <Link className="w-[80%]" to="/contact">
          <button className="secondary-gradient-button font-bold w-full ">
            {" "}
            Contact
          </button>
        </Link>

        <a
          target="__blank"
          rel="noreferrer"
          href="https://calendly.com/adapt-ent/30min"
        >
          <button className="primary-gradient-button font-bold w-[80%] ">
            {" "}
           Book Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default NavBarMobile;

NavBarMobile.propTypes = {
  mobileNav: PropTypes.bool,
  toggleMobileNav: PropTypes.func,
};
