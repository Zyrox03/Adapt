export const TradingView = () => {
  return (
    <div className="flex gap-4 min-h-screen items-center ">
      

      <div className="flex-1"></div>
      <div className="lg:flex-1 relative">

      <div className="gradient-con-2 banner blend">
        <div className="purple-gradient-2 grad-17"></div>
        <div className="purple-gradient-2 grad-18"></div>
      </div>

        <div className="text-center  lg:text-start space-y-12 lg:max-w-[60%] "  >
          <h2 className="h2-title" data-aos="fade-up" data-aos-duration="1000">
            Built On <span className="gradient">The Best</span>
          </h2>

          <p className="mt-6 text-p  " data-aos="fade-up" data-aos-duration="2000">
            Paytience Trading Indicators are designed for use on the TradingView
            platform offering seamless integration for our users.
            <br />
            <br />
            Our TradingView account also provides our community with several
            free open-source indicators.
          </p>

          <div className="flex gap-4 justify-center lg:justify-start items-center mt-8" data-aos="fade-up" data-aos-duration="3000">
            <button className="secondary-gradient-button">
              VISIT OUR TRADINGVIEW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
