import compatibilityPNG from "../../assets/images/compatibility.png";
export const Compatibility = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:min-h-screen gap-12 lg:gap-4 px-4 py-8 lg:p-12 ">
      <div className="w-full lg:flex-1 flex items-center jusitfy-center ">
        <div className="text-center lg:text-start space-y-12 lg:max-w-[90%] ">
          <h2
            className="h2-title lg:text-start "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            We&apos;re
            <span className="gradient "> Compatible </span>
            With
          </h2>

          <p
            className="mt-6 text-p "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
           These are some of the top integrations that our systems are compatible with:

          </p>

         
        </div>
      </div>
      <div className="w-full lg:flex-1 flex flex-col items-center justify-center gap-8 relative ">
        <div className="gradient-con-2 banner better-blend">
          <div className="purple-gradient-2 grad-16"></div>
          <div className="purple-gradient-2 grad-17"></div>
          <div className="purple-gradient-2 grad-18"></div>
        </div>

        <img
          src={compatibilityPNG}
          className="w-full max-w-lg lg:max-w-xl lg:w-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};
