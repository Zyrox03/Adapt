import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export const Reviews = () => {
  useEffect(() => {
    // Initialize Swiper inside the useEffect function
    const swiper = new Swiper(".reviews-swiper", {
      direction: "horizontal",
      slidesPerView: 1,
      spaceBetween: 20,

      speed: 2000,

      breakpoints: {
        // When window width is <= 1023px
        800: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1700: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
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
    <div className="flex flex-col gap-8 px-8 min-h-screen items-center  overflow-hidden">
      <h2
        className="font-semibold text-4xl lg:text-5xl text-center"
        style={{ fontFamily: "Syne, sans-serif" }}
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Reviews & Success Stories
      </h2>

      <div
        className="reviews-swiper w-full"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="swiper-wrapper">
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="swiper-slide">
              <div className="bg-purple-500 flex justify-center items-center w-96">
                <img
                  src="https://assets-global.website-files.com/64bc3e1b76f02c3a8cf863dc/65761841088f6cc99b6df8ff_PReview%203.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link to="/reviews">
        <button
          className="primary-gradient-button w-fit"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          View All
        </button>
      </Link>
    </div>
  );
};
