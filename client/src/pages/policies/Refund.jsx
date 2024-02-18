import { useState } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import NavBarMobile from "../../components/NavBarMobile";
const Refund = () => {
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
            REFUND POLICY
          </h1>
        </div>

        <p className="lg:w-[80%] p-2">
          We want you to be satisfied with your purchase. If you are not entirely
          satisfied with your purchase, we&apos;re here to help.
          <br />
         
          <br />
          Please contact us at support@adaptenterprise.tech to initiate a refund request.
          Once your request is received and inspected, we will send you an email
          to notify you that we have received your request. We will also notify
          you of the approval or rejection of your refund.
          <br />
          <br />
          If your refund is approved, we will initiate a refund to your original
          method of payment. You will receive the credit within a certain amount
          of days, depending on your card issuer&apos;s policies.
          <br />
          <br />
          If you have any questions about our refund policy, please contact us
          at support@adaptenterprise.tech.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Refund;
