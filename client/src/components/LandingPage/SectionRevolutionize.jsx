import automationGiphy from "../../assets/automationsGiphy.gif";
export const SectionRevolutionize = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:min-h-screen gap-12 lg:gap-4 p-4 lg:p-12 ">
      <div className="w-full lg:flex-1 flex items-center jusitfy-center ">
        <div className="text-center lg:text-start space-y-12 lg:max-w-[90%] ">
          <h2
            className="h2-title lg:text-start "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Effortless AI
            <span className="gradient "> Transformation </span>
          </h2>

          <p
            className="mt-6 text-p "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            We handle the heavy lifting, ensuring that your new AI powered asset
            is up and running in no time, freeing up your resources for more:
          </p>

          <div
            className="flex gap-4  pl-6 justify-start items-center mt-8"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <ul className="list-disc space-y-3 text-start">
              <li>strategic initiatives</li>
              <li>creative initiatives</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full lg:flex-1 flex flex-col items-center justify-center gap-8 relative ">
        <div className="gradient-con-2 banner better-blend">
          <div className="purple-gradient-2 grad-16"></div>
          <div className="purple-gradient-2 grad-17"></div>
          <div className="purple-gradient-2 grad-18"></div>
        </div>

        <img
          src={automationGiphy}
          className="w-full max-w-80 lg:w-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};
