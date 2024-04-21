import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NavBarMobile from "../components/NavBarMobile";
import ContactForm from "../widgets/ContactForm";
import { Helmet } from 'react-helmet';

const ContactPage = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };
  return (
    <div className="min-h-screen flex flex-col gap-12">
      <NavBar toggleMobileNav={toggleMobileNav} />
      <NavBarMobile mobileNav={mobileNav} toggleMobileNav={toggleMobileNav} />
      <Helmet>
        <title>Contact Us - Adapt Enterprise</title>
        <meta name="description" content="Contact Adapt Enterprise for inquiries, support, or feedback regarding our generative artificial intelligence solutions for business operations." />
        <meta name="keywords" content="contact, Adapt Enterprise, inquiries, support, feedback, artificial intelligence, business operations" />
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
        className="flex  flex-col justify-center items-center gap-12 "
      >
        <div className="p-12 flex flex-col justify-center items-center gap-6 text-center">
          <h1
            data-aos="fade-up"
            data-aos-duration="2000"
            className="hero-title orbitron  text-3xl lg:text-5xl lg:max-w-[70%]  "
          >
            Contact us{" "}
          </h1>

          <p
            className="lg:max-w-[80%] text-lg text-p"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Get answers to some of the most common questions we get about
            Adapt Ennterprises.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="w-[90%] lg:w-[70%] "
        >
          <ContactForm messageLabel='Ask us Anything' includesAI/>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
