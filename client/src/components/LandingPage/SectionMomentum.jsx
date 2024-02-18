
export const SectionMomentum = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row  lg:gap-4 p-4 lg:p-12 min-h-screen items-center ">
      <div className="lg:flex-1 flex justify-center relative w-80 lg:w-full h-full">
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
          <iframe
            src="https://giphy.com/embed/0YwHADEH90Mjii6qHV"
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
            Automations with Forward <span className="gradient">Momentum</span>
          </h2>

          <p
            className="mt-6 text-p  "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Experience constant, instantaneous support across all your
            ecosystems, freeing up valuable time for other tasks.
            <br />
            <br />
            Our chatbots are engineered for forward momentum, seamlessly guiding
            customers to their end goals, from scheduling appointments to
            completing checkout processes.
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
