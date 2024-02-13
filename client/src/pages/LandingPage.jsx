import { useState, useEffect } from "react";
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
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const threshold = 2000; // Adjust this value based on when you want the button to appear
      setShowScrollButton(scrollTop > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen flex flex-col gap-12 overflow-hidden relative">
      <NavBar toggleMobileNav={toggleMobileNav} />
      <NavBarMobile mobileNav={mobileNav} toggleMobileNav={toggleMobileNav} />

      <div className="py-4 flex flex-col gap-12 ">
        <Hero />
        <SectionState />
        <SectionRevolutionize />
        <SectionMomentum />
        <Contact />
      </div>
      
        <div
          style={{ zIndex: 1 }}
          className={`fixed right-10 bottom-5 w-fit px-3 py-1 flex rounded-full backdrop-blur-lg cursor-pointer border border-teal-500/25 transition duration-500 ${showScrollButton ?' translate-y-0' : 'translate-y-[200%]'} `}
          onClick={scrollToTop}
        >
          <i className="text-teal-600 text-xl fas fa-arrow-up"></i>
        </div>
  

      <Footer />
    </div>
  );
};

export default LandingPage;
