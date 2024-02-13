import { useState } from "react";
import Footer from "../components/Footer";
import { SectionRevolutionize } from "../components/LandingPage/SectionRevolutionize";
import { SectionMomentum } from "../components/LandingPage/SectionMomentum";
import { Contact } from "../components/LandingPage/Contact";
import { Hero } from "../components/LandingPage/Hero";
import { SectionState } from "../components/LandingPage/SectionState";
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
        <SectionState />
        <SectionRevolutionize />
        <SectionMomentum />
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
