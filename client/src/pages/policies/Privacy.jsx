import { useState } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import NavBarMobile from "../../components/NavBarMobile";
const Privacy = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div className="min-h-screen flex flex-col gap-12">
      <NavBar toggleMobileNav={toggleMobileNav} />
      <NavBarMobile mobileNav={mobileNav} toggleMobileNav={toggleMobileNav} />

      <div
        className="gradient-con-3 search-page"
        data-aos="zoom-in"
        data-aos-duration="3000"
      >
        <div className="blue-gradient g-21"></div>
        <div className="blue-gradient g-22"></div>
        <div className="purple-gradient grad-24new"></div>
      </div>

      <div
        style={{ marginTop: "5rem" }}
        className="flex min-h-[70vh] flex-col justify-center items-center gap-12 px-2 "
      >
        <div className="p-12 flex flex-col justify-center items-center gap-12 text-center">
          <h1
            data-aos="fade-up"
            data-aos-duration="2000"
            className="hero-title orbitron  text-3xl lg:text-5xl   "
          >
PRIVACY POLICY

</h1>
        </div>

        <p className="lg:w-[80%] p-2">
          At Adapt Enterprise, we respect your privacy and are committed to
          protecting it. Our Privacy Policy explains how we collect, use, and
          safeguard information on our website.
          <br />
          <br />
          By accessing or using Adapt Enterprise, you agree to the collection
          and use of information in accordance with this policy.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
