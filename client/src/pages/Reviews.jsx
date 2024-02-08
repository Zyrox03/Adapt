import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NavBarMobile from "../components/NavBarMobile";

const Reviews = () => {
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
        <div className="blue-gradient g-222"></div>
        <div className="blue-gradient g-90"></div>
      </div>

      <div
        style={{ marginTop: "10rem" }}
        className="flex flex-col justify-center items-center gap-12 "
      >
        <div className="p-12 flex flex-col justify-center items-center gap-6 text-center">
          <h1
            data-aos="fade-up"
            data-aos-duration="2000"
            className="hero-title lg:max-w-[70%]  "
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Our Reviews
          </h1>

          <p
            className="lg:max-w-[60%] text-lg text-p"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            We have helped our users make hundreds of thousands of dollars
            through our trading indicators, community and education resources. ‍
            <br />
            <br />
            Below you will find all of our member reviews & profit screenshots
            documented.
          </p>
        </div>

        <hr className="border border-white/20 w-[80%]" />

        <div className="flex gap-12 flex-wrap justify-center">
          {Array.from({ length: 60 }).map((_, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-72 cursor-pointer hover:scale-110  transition duration-500  "
            >
              <img
                src="https://assets-global.website-files.com/64bc3e1b76f02c3a8cf863dc/65761841088f6cc99b6df8ff_PReview%203.png"
                alt=""
                className="w-full h-full object-cover review-card rounded-3xl"
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Reviews;
