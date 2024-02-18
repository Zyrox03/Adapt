import { Link } from "react-router-dom";

const Footer = () => {
  const socials = [
    { icon: <i className="fa-brands fa-x-twitter"></i>, link: "" },
    { icon: <i className="fa-brands fa-facebook-f"></i>, link: "" },
    { icon: <i className="fa-brands fa-youtube"></i>, link: "" },
    { icon: <i className="fa-brands fa-instagram"></i>, link: "" },
    { icon: <i className="fa-brands fa-tiktok"></i>, link: "" },
    { icon: <i className="fa-brands fa-discord"></i>, link: "" },
  ];
  return (
    <footer id="footer" className="px-4 lg:px-12 flex flex-col gap-8">
      {/* Footer title */}

      <div className="flex jusitfy-center "  data-aos="fade-up" data-aos-duration="2000">
        <h2 className="h2-title mx-auto lg:max-w-[60%]">
        Strategic Integration of AI in Business Operations
                </h2>
      </div>

      {/* footer center */}

      <div  className="footer-center orbitron text-start border-t border-b border-white/25">
        <div className="flex  gap-12">
         
          <div
            className=" ml-auto "
          >
            <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
              <div className="col-span-1 " data-aos="fade-up" data-aos-duration="2000">
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
              <div className="col-span-1" data-aos="fade-up" data-aos-duration="2000">
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
                </ul>
              </div>
              {/* <div className="hidden lg:flex col-span-1"></div> */}
              <div className="col-span-2" data-aos="fade-up" data-aos-duration="2000">
                <ul className="flex flex-col gap-3">
                  <li className="hover:opacity-[0.6] transition duration-500 text-semibold cursor-pointer">
                    TERMS OF SERVICE
                  </li>
                  <li className="hover:opacity-[0.6] transition duration-500 text-semibold cursor-pointer">
                    PRIVACY POLICY
                  </li>
                  <li className="hover:opacity-[0.6] transition duration-500 text-semibold cursor-pointer">
                    REFUND POLICY
                  </li>
                  <li className="hover:opacity-[0.6] transition duration-500 text-semibold cursor-pointer">
                    DISCORD TOS
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* copyright */}

      <div className="flex justify-between flex-col lg:flex-row gap-6 items-center text-p " data-aos="fade-up" data-aos-duration="2000">
        <p>© Adapt Enterprise Inc. All Rights Reserved 2024.</p>

        <div className="flex gap-4 items-center flex-wrap justify-center">
          {socials.map(({ icon }, index) => (
            <div key={index} className="footer-socials">
              {icon}
            </div>
          ))}
        </div>
      </div>

      {/* risk disclaimer */}

      {/* <div>
        <p className="text-xs text-start text-p">
Trading involves substantial risk and many traders incur losses. The website of Paytience Indicators Inc., along with our products and services, are intended solely for informational and educational purposes. All content should be perceived as hypothetical, chosen retrospectively to showcase our products, and must not be interpreted as financial advice. Decisions regarding buying, selling, holding, or trading in securities, commodities, and other investments carry significant risk and should be made based on the advice of qualified financial professionals. Past performance is not indicative of future results.
<br /><br />
Hypothetical or simulated performance results carry inherent limitations. Unlike actual performance records, simulated results do not represent real trading. Additionally, since the trades have not actually been executed, the results may overstate or understate the impact, if any, of certain market factors, such as a lack of liquidity. Simulated trading programs are also generally developed with the benefit of hindsight. There is no assurance that any account will or is likely to achieve profits or losses similar to those presented.
<br /><br />
Testimonials or reviews on our website may not reflect the experiences of all clients or customers and do not guarantee future performance or success.
<br /><br />
As a provider of technical analysis tools for charting platforms, Paytience Indicators Inc. does not have access to the personal trading accounts or brokerage statements of our customers. Therefore, we have no basis to claim that our customers perform better or worse than the average trader based on the content or tools we provide.
<br /><br />
The charts utilized on our site are provided by TradingView, which is the platform our tools are built upon. TradingView® is a registered trademark of TradingView, Inc. www.tradingview.com.
<br /><br />
This statement does not constitute our complete terms of service / disclaimer. We encourage you to read our Full Terms of Service.
<br /><br />
© 2023 Paytience Indicators Inc.
        </p>
      </div> */}

    </footer>
  );
};

export default Footer;
