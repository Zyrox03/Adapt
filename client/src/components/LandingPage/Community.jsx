export const Community = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen gap-4 p-12 ">
      <div className="w-full flex-1 ">
        <div className="text-center lg:text-start space-y-12 lg:max-w-[70%] ">
          <h2 className="h2-title"  data-aos="fade-up" data-aos-duration="1000">
            Join A Thriving Built On{" "}
            <span className="gradient"> Community</span>
          </h2>

          <p className="mt-6 text-p "  data-aos="fade-up" data-aos-duration="2000">
            Paytience is the brainchild of Mason Versluis (Crypto Mason) and
            Meghan Boyczuk (Megbzk), who together boast over 7 years of combined
            experience in cryptocurrency and content creation.
            <br />
            <br />
            Our collaboration with their &apos;Gold Squad&apos; community
            enables us to engage with an audience of 1.5M followers, enhancing
            our reach and community interaction.
          </p>

          <div className="flex gap-4 items-center justify-center lg:justify-start mt-8"  data-aos="fade-up" data-aos-duration="3000">
            <button className="secondary-gradient-button">
              VIEW OUR FOUNDERS & PARTNERS
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex-1 flex flex-col items-center gap-8 relative">
        <div className="gradient-con-2 banner better-blend">
          <div className="purple-gradient-2 grad-16"></div>
          <div className="purple-gradient-2 grad-17"></div>
          <div className="purple-gradient-2 grad-18"></div>
        </div>

        <img
          src="https://assets-global.website-files.com/64bc3e1a76f02c3a8cf863a2/65299f4079cbf4ed0721eb0f_Untitled-1-p-800.png"
          className="w-full max-w-96 object-cover"
          alt=""
        />

        <div className="flex gap-12 lg:gap-4 text-center lg:text-start lg:flex-row flex-col">
          <div className="flex flex-col gap-4">
            <span
             data-aos="fade-right" data-aos-duration="2000"
              className="font-semibold text-3xl orbitron"
            >
              {" "}
              1.5M+
            </span>
            <p className="text-p ">Total reach on social platforms</p>
          </div>
          <div className="flex flex-col gap-4">
            <span
             data-aos="fade-right" data-aos-duration="2000"
              className="font-semibold text-3xl orbitron"
            >
              25K+
            </span>
            <p className="text-p ">Discord members in our servers</p>
          </div>
          <div className="flex flex-col gap-4">
            <span
             data-aos="fade-right" data-aos-duration="2000"
              className="font-semibold text-3xl orbitron"
            >
              100+
            </span>
            <p className="text-p ">Reviews from our community</p>
          </div>
        </div>
      </div>
    </div>
  );
};
