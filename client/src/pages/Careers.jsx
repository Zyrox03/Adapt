import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NavBarMobile from "../components/NavBarMobile";
import ContactForm from "../widgets/ContactForm";
import { Helmet } from 'react-helmet';

const Careers = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div className="min-h-screen flex flex-col gap-12">
      <NavBar toggleMobileNav={toggleMobileNav} />
      <NavBarMobile mobileNav={mobileNav} toggleMobileNav={toggleMobileNav} />
      <Helmet>
        <title>Careers - Adapt Enterprise</title>
        <meta name="description" content="Explore career opportunities at Adapt Enterprise and join us in revolutionizing business operations with state-of-the-art generative artificial intelligence technology." />
        <meta name="keywords" content="careers, jobs, employment, Adapt Enterprise, artificial intelligence, business operations" />
      </Helmet>
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
            className="hero-title orbitron  text-3xl lg:text-5xl lg:max-w-[80%]  "
          >
            Explore Commission-Based Careers{" "}
          </h1>
        </div>

        {/* Add commission-related divs here */}
        <div className="w-full space-y-4 w-full lg:w-[70%] p-2 text-start">
          <div className="commission-details">
            <h2 className="text-xl font-semibold">Available Positions</h2>
            <ul className="mt-4 w-fit">
              <li className="list-disc">
                Outbound Caller: Commission-based role focused on outbound sales
                calls.
              </li>
            </ul>
          </div>
          <div className="commission-benefits ">
            <h2 className="text-xl font-semibold">Benefits</h2>
            <ul className="list-disc mt-4">
              <li>Competitive commission rates</li>
              <li>Flexible working hours</li>
              <li>Opportunity for uncapped earnings based on performance</li>
              <li>Independence in managing your work schedule</li>
              <li>Potential for career advancement based on sales success</li>
              <li>
                Experience in sales and communication skills that are
                transferable to various industries
              </li>
              <li>
                Training and development opportunities to enhance sales skills
              </li>
              <li>
                Networking opportunities with potential clients and industry
                professionals
              </li>
              <li>Performance-based incentives and bonuses</li>
              <li>Work-from-home options, providing convenience and comfort</li>
            </ul>
          </div>

          <div className="mt-12">
            <ContactForm messageLabel="Application Message" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;
