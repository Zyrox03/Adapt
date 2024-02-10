import ContactForm from "../../widgets/ContactForm";

export const Contact = () => {
  return (
    <div className="flex flex-col gap-12 p-4 lg:p-12 min-h-screen relative">
      <div className="gradient-con-2">
        <div className="blue-gradient g-32"></div>
        <div className="blue-gradient g-30"></div>
        <div className="purple-gradient grad-31"></div>
      </div>

      <h2
        className="font-semibold orbitron text-4xl lg:text-5xl text-center mb-12"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Have A Question Or Request?
      </h2>
      <div
        className="flex my-auto gap-4 flex-wrap-reverse items-end"
        data-aos="fade-up"
        data-aos-duration="3000"

      >
        <div className="flex-1 flex justify-center relative w-full h-full " 
        >
          <div
            style={{
              width: "60%",
              height: 0,
              paddingBottom: "100%",
              position: "relative",
              pointerEvents: "none", // Disable pointer events on the container
            }}
          >
            <iframe
              src="https://giphy.com/embed/9tY5faiNd7syLaTpwQ"
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
        <div className="w-full lg:w-[60%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
