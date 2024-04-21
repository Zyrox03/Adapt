import AdoptionChart from "../../assets/images/chart.webp";
export const AdoptionRate = () => {
  return (
    <div className="flex flex-col lg:min-h-screen gap-12 lg:gap-4 p-4 lg:p-12 w-full lg:flex-1 flex items-center text-center jusitfy-center  ">
        <div className="space-y-12">
          <h2
            className="h2-title  "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Adoption rate of
            <span className="gradient "> Gen AI </span>
          </h2>

          
      </div>
      <div className="w-full lg:flex-1 flex flex-col items-center justify-center gap-8 relative ">
        <div className="gradient-con-2 banner better-blend">
          <div className="purple-gradient-2 grad-16"></div>
          <div className="purple-gradient-2 grad-17"></div>
          <div className="purple-gradient-2 grad-18"></div>
        </div>

        <img
         data-aos="fade-up"
         data-aos-duration="1000"
          src={AdoptionChart}
          className="w-full max-w-lg lg:max-w-xl lg:w-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};
