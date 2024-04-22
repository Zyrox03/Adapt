export const SectionState = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:gap-12 lg:gap-4 p-4 lg:p-12 lg:min-h-screen items-center ">
      <div className="lg:flex-1 flex justify-center relative w-80 lg:w-full ">
        <div
          className="max-w-80 "
          style={{
            width: "70%",
            height: 0,
            paddingBottom: "100%",
            position: "relative",
            pointerEvents: "none", // Disable pointer events on the container
          }}
        >
          {" "}
          <iframe
            src="https://giphy.com/embed/piYoJnSM5CLO8"
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              pointerEvents: "none", // Disable pointer events on the iframe itself
            }}
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="lg:flex-1 relative">
        <div className="gradient-con-2 banner blend">
          <div className="purple-gradient-2 grad-17"></div>
          <div className="purple-gradient-2 grad-18"></div>
        </div>

        <div className="text-center lg:text-start space-y-12 lg:max-w-[90%] ">
          <h2
            className="h2-title text-center lg:text-start"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="gradient">Customisable</span>
          </h2>

          <p
            className="mt-6 text-p  "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Tailor our AI solutions to fit your needs. From:
          </p>

          <div
            className="flex gap-4 pl-6 justify-start items-center mt-8"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <ul className="list-disc space-y-3 text-start">
              <li>Customizable designs to fit with your sites theme</li>
              <li>Objective based prompt engineering</li>
              <li>Personalised automation workflows</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
