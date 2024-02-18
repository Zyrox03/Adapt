import hero_video from "../../assets/hero_video.mp4";
export const Hero = () => {
  return (
    <section
      className="flex flex-col justify-center items-center gap-12 p-4"
      id="hero"
      style={{ marginTop: "5rem" }}
      >
      {/* BLURS */}

      <div
        className="gradient-con  "
        data-aos="zoom-in"
        data-aos-duration="3000"
      >
        <div className="purple-gradient"></div>
        <div className="blue-gradient"></div>
        <div className="purple-gradient grad-5"></div>
        <div className="purple-gradient grad-6"></div>
        <div className="purple-gradient grad-9"></div>
        <div className="purple-gradient grad-10"></div>
      </div>

      <div className="flex flex-col justify-center items-center gap-6 text-center">
        <h1 className="hero-title text-3xl lg:text-5xl lg:max-w-[80%] uppercase">
          Generative Artificial Intelligence for Business Operations
        </h1>

        <p className="lg:max-w-[60%] text-p">
          Enhance operations, leverage data for strategic insights, and enhance
          efficiency across your whole business processes providing
          instantaneous support and forward momentum.
        </p>

        <button className="primary-gradient-button">Book a Demo</button>
      </div>

      <div className="dashboard-wrap w-full lg:w-[60%] " style={{ zIndex: 1 }}>
        <div className="dashboard">
          <video autoPlay loop muted playsInline>
            <source src={hero_video} />
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
