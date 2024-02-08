import plans from "../../assets/plans.json";
export const Pricings = () => {
  return (
    <section className="flex flex-col gap-12 items-center relative ">
      <div className="flex justify-around gap-12 lg:gap-4 w-full flex-wrap"  data-aos="fade-up" data-aos-duration="1000">
        

        {plans.map(({ plan, price, period, incentives }, index) => (
          <div
            key={index}
            className="pricing_card max-w-[90%] lg:max-w-[35%] flex flex-col items-center gap-12"
          >
            <div className="text-center flex flex-col gap-6">
              <strong className="font-bold orbitron text-4xl ">{plan} </strong>
              <p className="text-3xl">
                <span className="font-bold text-4xl mt-4">${price} </span> per{" "}
                {period}
              </p>

              <p className="gradient text-lg">
                All-Inclusive Paytience Membership.
              </p>
            </div>
            <div className="w-full space-y-6">
              <p className=" text-start font-semibold text-lg">
                Paytience Membership Includes:
              </p>

              <ul className=" space-y-2 text-xl">
                {incentives.map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    {" "}
                    <i className="text-yellow-400 fa-regular fa-circle-check"></i>{" "}
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <button className="primary- text-lg-button">BUY MEMBERSHIP</button>
          </div>
        ))}
      </div>

      <div className="gradient-con-2 banner " style={{zIndex :-1}}>
          <div className="blue-gradient-2 g-33"></div>
          <div className="blue-gradient-2 g-34"></div>
          <div className="purple-gradient-2 grad-35"></div>
        </div>
        
      <img
        src="https://assets-global.website-files.com/64bc3e1a76f02c3a8cf863a2/655b7f24e04a3a504ab4621b_Group%2010.svg"
        className="w-96"
        alt=""
      />
    </section>
  );
};
