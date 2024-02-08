// import benefits from "../../assets/benefits.json";

export const Benefits = () => {
  return (
    <section className="flex flex-col items-center gap-12  overflow-hidden">
      <div className="text-center lg:max-w-[60%] ">
        <h2 className="h2-title " data-aos="fade-up" data-aos-duration="3000">
          {" "}
          <span className="gradient">All-Inclusive</span> Trading Suite +
          Membership
        </h2>

        <p className="mt-6 text-p " data-aos="fade-up" data-aos-duration="3000">
          The Paytience Membership gives you access to all current & future
          trading indicators along with other members-only benefits.
        </p>
      </div>

      <div className=" min-h-screen w-full flex mt-12  ">
        <div className="flex-1">{/* STICKY THING */}</div>

        <div className="lg:flex-1  border-white/25 flex flex-col gap-12 items-center w-full  ">
          <div className="w-full h-full flex flex-col justify-center relative gap-12">
            <div className="gradient-con">
              <div className="purple-gradient grad-4"></div>
              <div className="blue-gradient grad-1"></div>
            </div>

            <div className="text-center lg:text-start space-y-12 lg:max-w-[60%] ">
              <h2
                className="h2-title"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Built On <span className="gradient">The Best</span>
              </h2>

              <p
                className="mt-6 text-p  "
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Paytience Trading Indicators are designed for use on the
                TradingView platform offering seamless integration for our
                users.
                <br />
                <br />
                Our TradingView account also provides our community with several
                free open-source indicators.
              </p>

              <div
                className="flex gap-4 justify-center lg:justify-start items-center mt-8"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <button className="secondary-gradient-button">
                  VISIT OUR TRADINGVIEW
                </button>
              </div>
            </div>
            {/*         cd 
            {benefits.map(({ title, text }, index) => (
              <div
                key={index}
                className="w-full h-full flex justify-center relative gap-8 "
                data-aos="fade-up-left"
                  data-aos-duration="1000"
              >
                <div
                  className="steps-card flex flex-col gap-8 w-[90%] lg:w-[80%] h-fit min-h-[300px] relative -translate-y-9"
                  
                >
                  <div className="hidden lg:flex w-6 h-6 border-r border-b border-[#ffffff1a] bg-[#222] transform rotate-[135deg] left-0 top-12 -translate-x-1/2 absolute "></div>

                  <span className="steps-icon">{index + 1} </span>
                  <h3 className="text-4xl font-semibold">{title}</h3>

                  <p className="text-p ">{text}</p>
                </div>

                <div className="hidden lg:flex w-12 h-12 justify-center items-center border border-[#90f] bg-transparent rounded-full absolute left-0 -translate-x-1/2 ">
                  <div
                    className="w-4 h-4 rounded-full"
                    data-aos="fade-up-left"
                    data-aos-duration="1000"
                    style={{
                      backgroundImage: "linear-gradient(135deg,#90f,#3f0efa)",
                    }}
                  ></div>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
};
