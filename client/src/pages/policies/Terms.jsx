import { useState } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import NavBarMobile from "../../components/NavBarMobile";
const Terms = () => {
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
TERMS OF SERVICE

</h1>
        </div>

<p className="lg:w-[80%] p-2">
Welcome to Adapt Enterprise!
<br /><br />
These Terms of Service outline the rules and regulations for the use of Adapt Enterprise&apos;s website, located at <a className="text-blue-500" href="https://www.adaptenterprise.tech/">www.adaptenterprise.tech</a>.
<br /><br />
By accessing this website, we assume you accept these terms and conditions. Please do not continue to use Adapt Enterprise if you do not agree to take all of the terms and conditions stated on this page.
<br /><br />
The following terminology applies to these Terms of Service, Privacy Policy, Refund Policy, and all agreements: &ldquo;User,&ldquo; &ldquo;You,&ldquo; and &ldquo;Your&ldquo; refer to you, the person accessing this website and compliant to Adapt Enterprise&apos;s terms and conditions. &ldquo;Adapt Enterprise,&ldquo; &ldquo;We,&ldquo; &ldquo;Us,&ldquo; and &ldquo;Our&ldquo; refer to our company. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to you in the most appropriate manner for the express purpose of meeting your needs in respect to the provision of our services, in accordance with and subject to prevailing law.
<br /><br />
By using our website, you agree to comply with and be bound by these Terms of Service. If you disagree with any part of these terms, then you may not access the website.
<br /><br />
Please read these Terms of Service carefully before using our website.

</p>
        </div>

        
     

      <Footer />
    </div>
  );
};

export default Terms;
