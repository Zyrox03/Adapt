export const Contact = () => {
  return (
    <div className="flex flex-col gap-12 p-12 min-h-screen relative">
      <div className="gradient-con-2">
        <div
          className="blue-gradient g-32"
        ></div>
        <div
          className="blue-gradient g-30"
        ></div>
        <div
          className="purple-gradient grad-31"
        ></div>
      </div>

      <h2
        className="font-semibold orbitron text-4xl lg:text-5xl text-center mb-12"
        data-aos="fade-up" data-aos-duration="2000"
      >
        Have A Question Or Request?
      </h2>
      <div className="flex my-auto gap-4 flex-wrap"  data-aos="fade-up" data-aos-duration="3000">
        <div className="flex-1"></div>
        <div className="w-full lg:w-[60%]">
          <form className="shadow-md rounded flex flex-col gap-8">
            <div className=" flex items-center gap-8 flex-wrap lg:flex-nowrap">
              <input
                className="text-field outline-none w-full "
                id="name"
                type="text"
                placeholder="Your Name"
              />

              <input
                className="text-field outline-none w-full "
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>

            <div className="">
              <label
                className="block orbitron text-lg font-bold mb-6"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                className="text-field outline-none w-full h-60 "
                id="message"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button className="primary-gradient-button w-full" type="button">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
