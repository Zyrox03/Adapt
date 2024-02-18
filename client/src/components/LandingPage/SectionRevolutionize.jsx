import { Link } from "react-router-dom";
import automationGiphy from "../../assets/automationsGiphy.gif";
export const SectionRevolutionize = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen gap-12 lg:gap-4 p-4 lg:p-12 ">
      <div className="w-full lg:flex-1 flex items-center jusitfy-center ">
        <div className="text-center lg:text-start space-y-12 lg:max-w-[90%] ">
          <h2
            className="h2-title lg:text-start "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Transform your Operations,
            <span className="gradient "> Effortlessly !</span>
          </h2>

          <p
            className="mt-6 text-p "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            With our comprehensive GPT automation solutions, we handle all the
            heavy lifting.
            <br />
            <br />
            seamlessly transforming your operations and driving exponential
            sales growth while achieving the highest levels of customer
            satisfaction we have seen yet.
          </p>

          <div
            className="flex gap-4 items-center justify-center lg:justify-start mt-8"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Link to="/contact">
              <button className="secondary-gradient-button">
                Revolutionize Your Operations Now!
              </button>{" "}
            </Link>
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
