export const Hero = () => {
  return (
    <section
      className="flex flex-col justify-center items-center gap-12 "
      style={{ marginTop: "10rem" }}
    >
      {/* BLURS */}

      <div className="gradient-con  " data-aos="zoom-in" data-aos-duration="3000">
        <div className="purple-gradient"></div>
        <div className="blue-gradient"></div>
        <div className="purple-gradient grad-5"></div>
        <div className="purple-gradient grad-6"></div>
        <div className="purple-gradient grad-9"></div>
        <div className="purple-gradient grad-10"></div>
      </div>

      <div className="flex flex-col justify-center items-center gap-6 text-center">
        <h1 className="hero-title  lg:max-w-[70%] ">
          POWERFUL INDICATORS TO ELEVATE YOUR TRADING
        </h1>

        <p className="lg:max-w-[60%] text-p">
          Paytience is an all-inclusive indicator suite & trading membership
          designed to elevate your trading and help you navigate the markets
          more effectively.
        </p>

        <button className="primary-gradient-button">BUY MEMBERSHIP</button>
      </div>

      <div className="dashboard-wrap w-full lg:w-[60%] " style={{zIndex : 1}} >
        <div className="dashboard">
          <video autoPlay loop muted playsInline>
            <source src="https://assets-global.website-files.com/64bc3e1a76f02c3a8cf863a2/651f4ccb914c11ca1702ca4a_Paytience_draft_2_glitch (1)-transcode.mp4" />
          </video>
        </div>

        <div className="line-1"></div>
        <div className="line-3-bottom"></div>
        <div className="line-4"></div>
        <div className="line-2-right"></div>
      </div>
    </section>
  );
};
