import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NavBarMobile from "../components/NavBarMobile";

import pricingPlans from "../assets/pricing_plans.json";
const Pricing = () => {
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
            className="hero-title orbitron  text-3xl lg:text-5xl  "
          >
            Our Pricing Plans{" "}
          </h1>

          <p
            className="lg:max-w-[80%] text-lg text-p"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Choose the Perfect Plan for Your Needs.
          </p>
        </div>

        <div className="flex flex-wrap items-start justify-center  gap-8">
          {/* PLANS GO HERE */}
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="relative w-96 h-fit p-6 border rounded-lg shadow-lg backdrop-blur-lg hover:bg-black/50 transition"
            >
              <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
              {plan.plans ? (
                <ul>
                  {plan.plans.map((subPlan, subIndex) => (
                    <li key={subIndex} className="mb-2">
                      {subPlan.name}: {subPlan.details}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{plan.details}</p>
              )}
            </div>
          ))}{" "}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
