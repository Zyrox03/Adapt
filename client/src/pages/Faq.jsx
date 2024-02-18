import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import faq from "../assets/faq.json";
import NavBarMobile from "../components/NavBarMobile";
import { Helmet } from 'react-helmet';

const Faq = () => {
  const [showResponses, setShowResponses] = useState(
    Array(faq.length).fill(false)
  );

  const toggleResponse = (index) => {
    const newShowResponses = [...showResponses];
    newShowResponses[index] = !newShowResponses[index];
    setShowResponses(newShowResponses);
  };

  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };
  return (
    <div className="min-h-screen flex flex-col gap-12">
      <NavBar toggleMobileNav={toggleMobileNav} />
      <NavBarMobile mobileNav={mobileNav} toggleMobileNav={toggleMobileNav} />
      <Helmet>
        <title>FAQ - Adapt Enterprise</title>
        <meta name="description" content="Frequently Asked Questions about Adapt Enterprise's generative artificial intelligence solutions for business operations." />
        <meta name="keywords" content="FAQ, frequently asked questions, Adapt Enterprise, artificial intelligence, business operations" />
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
        className="flex flex-col justify-center items-center gap-12 "
      >
        <div className="p-12 flex flex-col justify-center items-center gap-6 text-center">
          <h1
            data-aos="fade-up"
            data-aos-duration="2000"
            className="hero-title orbitron  text-3xl lg:text-5xl lg:max-w-[70%]  "
          >
            Frequently Asked Questions{" "}
          </h1>

          <p
            className="lg:max-w-[60%] text-lg text-p"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Get answers to some of the most common questions we get about
            Paytience.
          </p>
        </div>

        <div
          className="flex flex-wrap gap-x-8 justify-center w-full "
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {faq.map(({ question, answer }, index) => (
            <div className=" w-full p-2 lg:w-[45%] overflow-hidden" key={index}>
              <div
                className={`question select-none py-12 px-2 border-t border-white/25 flex items-center justify-between transition duration-300 ${
                  showResponses[index] ? "text-teal-500" : ""
                } cursor-pointer`}
                onClick={() => toggleResponse(index)}
              >
                <p>{question}</p>
                <i
                  className={`fas ${
                    showResponses[index] ? "fa-minus" : "fa-plus"
                  }`}
                ></i>
              </div>

              <div
                className={`response transition-opacity duration-300 ${
                  showResponses[index]
                    ? "opacity-100 p-8 h-fit"
                    : " p-0 opacity-0 h-0"
                }  bg-white/10 `}
              >
                {answer}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Faq;
