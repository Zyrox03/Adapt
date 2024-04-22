import { Link } from "react-router-dom";
import logo from "../assets/images/logo.webp";
const Footer = () => {
  const socials = [
    { icon: <i className="fa-brands fa-x-twitter"></i>, link: "https://twitter.com/adaptentai" },
    { icon: <i className="fa-brands fa-linkedin"></i>, link: "" },
  ];
  return (
    <footer id="footer" className="px-4 lg:px-12 flex flex-col gap-8">
      {/* Footer title */}

      <div
        className="flex jusitfy-center "
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h2 className="h2-title mx-auto lg:max-w-[60%]">
          Strategic Integration of AI in Business Operations
        </h2>
      </div>

      {/* footer center */}

      <div className="footer-center orbitron text-start border-t border-b border-white/25">
        <div className="flex flex-col lg:flex-row flex-wrap gap-12">
          <div
            className="flex-1 flex items-center justify-start"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Link to="/">
              <img src={logo} alt="" className="w-96" />
            </Link>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
              <div
                className="col-span-1 "
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <ul className=" flex flex-col gap-3">
                  <Link to="/">
                    <li className="hover:opacity-[0.6] transition duration-500 text-semibold cursor-pointer">
                      HOME
                    </li>
                  </Link>
                  <Link to="/contact">
                    <li className="hover:opacity-[0.6] transition duration-500 text-semibold cursor-pointer">
                      CONTACT
                    </li>
                  </Link>
                </ul>
              </div>
              <div
                className="col-span-1"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <ul className="flex flex-col gap-3">
                  <Link to="/learn">
                    <li className="hover:opacity-[0.6] transition duration-500 text-semibold cursor-pointer">
                      LEARN
                    </li>
                  </Link>
                  <Link to="/faq">
                    <li className="hover:opacity-[0.6] transition duration-500 text-semibold cursor-pointer">
                      FAQ
                    </li>
                  </Link>
                  <Link to="/pricing">
                    <li className="hover:opacity-[0.6] transition duration-500 text-semibold cursor-pointer">
                      PRICING
                    </li>
                  </Link>
                  <Link to="/careers">
                    <li className="hover:opacity-[0.6] transition duration-500 text-semibold cursor-pointer">
                      CAREERS
                    </li>
                  </Link>
                </ul>
              </div>
              {/* <div className="hidden lg:flex col-span-1"></div> */}
              <div
                className="col-span-2"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <ul className="flex flex-col gap-3">
                  <Link to="/terms-services">
                    <li className="hover:opacity-[0.6] transition duration-500 text-semibold cursor-pointer">
                      TERMS OF SERVICE
                    </li>
                  </Link>
                  <Link to="/privacy-policy">
                    <li className="hover:opacity-[0.6] transition duration-500 text-semibold cursor-pointer">
                      PRIVACY POLICY
                    </li>
                  </Link>
                  <Link to="/refund-policy">
                    <li className="hover:opacity-[0.6] transition duration-500 text-semibold cursor-pointer">
                      REFUND POLICY
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* copyright */}

      <div
        className="flex justify-between flex-col lg:flex-row gap-6 items-center text-p "
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <p>© Adapt Enterprise Inc. All Rights Reserved 2024.</p>

        <div className="flex gap-4 items-center flex-wrap justify-center">
          {socials.map(({ icon, link }, index) => (
            <a key={index} target="__blank" href={link}>

            <div  className="footer-socials">
              {icon}
            </div>
            </a>
          ))}
        </div>
      </div>


 
    </footer>
  );
};

export default Footer;
