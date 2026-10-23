import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import house1 from "../assets/header_img.png"
import house12 from "../assets/house12.jpg"
import project_img_1 from "../assets/project_img_2.jpg"


const Header = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const slides = [house1,house12,project_img_1
  ];

  return (
    <div className="relative flex justify-center items-center h-screen text-center text-white bg-gray-800 ">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-screen object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-6 md:px-20 lg:py-32 text-white z-10"
      >
        <h2
          className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20"
        >
          Explore homes that fit your dreams
        </h2>
        <div className="space-x-6 mt-16">
          <a
            href="#Projects"
            className="border border-white px-8 py-3 rounded hover:bg-white hover:text-gray-800"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="bg-blue-500 px-8 py-3 rounded hover:bg-blue-600"
          >
            Contact us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
