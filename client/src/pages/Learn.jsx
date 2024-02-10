import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NavBarMobile from "../components/NavBarMobile";
import Master_Guide_for_ChatGPT from '../assets/Master_Guide_for_ChatGPT.pdf'

const Learn = () => {
 

  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };


  return (
    <div className="min-h-screen flex flex-col gap-12">
      <NavBar toggleMobileNav={toggleMobileNav} />
      <NavBarMobile mobileNav={mobileNav} toggleMobileNav={toggleMobileNav} />

      <div className="gradient-con-3 search-page" data-aos="zoom-in" data-aos-duration="3000">
        <div
          className="blue-gradient g-21"
        ></div>
        <div
          className="blue-gradient g-22"
        ></div>
        <div
          className="purple-gradient grad-24new"
        ></div>
      </div>

      <div
        style={{ marginTop: "10rem" }}
        className="flex min-h-[70vh] flex-col justify-center items-center gap-12 "
      >
        <div className="p-12 flex flex-col justify-center items-center gap-12 text-center">
          <h1
            data-aos="fade-up"
            data-aos-duration="2000"
            className="hero-title orbitron  text-3xl lg:text-5xl lg:max-w-[70%]  "
          >
           Enhance Your Operations Using GPTs{" "}
          </h1>

          <p
            className="lg:max-w-[60%] text-lg text-p"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
           A complete guide to improving productivity with generative AI.
          </p>

<a   data-aos="fade-up"
            data-aos-duration="2000"
             href={Master_Guide_for_ChatGPT} download>
<button className="primary-gradient-button">Download Book</button>

</a>
        </div>


      </div>

      <Footer />
    </div>
  );
};

export default Learn;
