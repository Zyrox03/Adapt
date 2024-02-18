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
        className="flex my-auto gap-4 justify-center items-center"
        data-aos="fade-up"
        data-aos-duration="3000"

      >
       
       <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="w-[90%] lg:w-[70%] "
        >
          <ContactForm messageLabel='Ask us Anything' includesAI/>
        </div>
      </div>
    </div>
  );
};
