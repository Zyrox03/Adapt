
export const SectionState = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-4 p-4 lg:p-12 min-h-screen items-center ">
      <div className="lg:flex-1 flex justify-center relative w-full h-full">
        <div
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
            State of <span className="gradient">the Art</span>
          </h2>

          <p
            className="mt-6 text-p  "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Our GPTS represents the pinnacle of AI technology, delivering
            unparalleled customer service through websites and social media with
            cutting-edge responsiveness and accuracy.
            <br />
            <br />
            It revolutionizes user experience, setting the standard for seamless
            interaction and excellent customer service.
          </p>

          <div
            className="flex gap-4 justify-center lg:justify-start items-center mt-8"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            
          </div>
        </div>
      </div>
    </div>
  );
};
