import infos from "../../assets/infos.json";
export const AboutUs = () => {
  return (
    <section className="flex flex-col px-4 lg:px-12 gap-12  relative  ">
      <div className="gradient-con">
        <div className="purple-gradient grad-7 diff-pos"></div>
      </div>

      <div className="flex gap-3 ">
        <div className=" lg:flex-1">
          <div className="text-center lg:text-start ">
            <h2
              className="h2-title"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Level Up <span className="gradient">Your Trading</span>
            </h2>

            <p
              className="mt-6 text-p"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              The Paytience Trading Indicator Suite & Membership helps optimize
              your market strategies and navigate markets more effectively
            </p>

            <div
              className="flex gap-4 items-center mt-8"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <button className="secondary-gradient-button">SEE REVIEWS</button>
              <button className="primary-gradient-button">
                BUY MEMBERSHIP
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>

      <div className="info-cards flex flex-wrap  gap-4 grid lg:grid-cols-4">
        {infos.map(({ title, description }, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-duration="2000"
            className={`service-item  rounded-xl p-4 flex flex-col gap-3  ${
              index === 0
                ? "lg:col-span-3"
                : index === 1
                ? "lg:col-span-1"
                : index === 2
                ? "lg:col-span-1"
                : "lg:col-span-3"
            }`}
            style={{ backgroundColor: "rgba(255,255,255,.05)" }}
          >
            <h3
              className="text-2xl orbitron font-semibold"
              
            >
              {title}
            </h3>
            <p className="text-p">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
