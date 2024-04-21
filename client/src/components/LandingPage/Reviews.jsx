import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

import testi1 from '../../assets/images/testi1.jpg'
import testi2 from '../../assets/images/testi2.jpg'

export const Reviews = () => {
  useEffect(() => {
    // Initialize Swiper inside the useEffect function
    const swiper = new Swiper(".reviews-swiper", {
      direction: "horizontal",
      slidesPerView: 1,
      spaceBetween: 20,

      speed: 2000,

      loop: true,

     
      freeMode: {
        enabled: true,
        sticky: true,
      },

      grabCursor: true,
      autoplay: {
        delay: 2000,
      },

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    });

    // Destroy Swiper when the component unmounts
    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col gap-2 p-8 lg:min-h-screen items-center  overflow-hidden">
      <h2
        className="font-semibold orbitron text-4xl lg:text-5xl text-center"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
Client Testimonials
      </h2>


      <p
            className="mt-6 text-p  "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
           Discover what our satisfied clients have to say about their experience with our AI solutions:

(testimonials images)

          </p>

      <div
        className="reviews-swiper w-full mt-8"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="swiper-wrapper">
        <div className="swiper-slide flex justify-center">
              <div className="bg-purple-500 flex justify-center items-center max-w-lg lg:max-w-xl">
                <img
                  src={testi1}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="swiper-slide flex justify-center">
              <div className="bg-purple-500 flex justify-center items-center max-w-lg lg:max-w-xl">
                <img
                  src={testi2}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
        </div>

        <div className="hidden lg:flex swiper-button-next"></div>
        <div className="hidden lg:flex swiper-button-prev"></div>
      </div>

     
    </div>
  );
};
