import { useState } from "react";
import Footer from "../components/Footer";
// import { AboutUs } from "../components/LandingPage/AboutUs";
// import { Benefits } from "../components/LandingPage/Benefits";
import { Community } from "../components/LandingPage/Community";
import { Contact } from "../components/LandingPage/Contact";
import { Hero } from "../components/LandingPage/Hero";
import { Pricings } from "../components/LandingPage/Pricings";
// import { Reviews } from "../components/LandingPage/Reviews";
import { TradingView } from "../components/LandingPage/TradingView";
import NavBar from "../components/NavBar";
import NavBarMobile from "../components/NavBarMobile";

const LandingPage = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div className="min-h-screen flex flex-col gap-12 overflow-hidden">
      <NavBar toggleMobileNav={toggleMobileNav} />
      <NavBarMobile mobileNav={mobileNav} toggleMobileNav={toggleMobileNav} />

      <div className="py-4 flex flex-col gap-12 ">
        <Hero />
        {/* <Benefits /> */}
        {/* <AboutUs /> */}
        <TradingView />
        {/* <Reviews /> */}
        <Community />

        <Pricings />

        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
