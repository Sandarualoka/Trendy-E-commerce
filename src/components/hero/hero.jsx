import React from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: image1,
    title: "Upto 50% off on all Hand made Products",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quia consequatur, sit dolor exercitationem fugiat ullam quod reiciendis? Dicta, magnam.",
  },

  {
    id: 2,
    img: image2,
    title: "Upto 50% off on all Powerlooom Products",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quia consequatur, sit dolor exercitationem fugiat ullam quod reiciendis? Dicta, magnam.",
  },

  {
    id: 3,
    img: image3,
    title: "Upto 20% off on all Products",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quia consequatur, sit dolor exercitationem fugiat ullam quod reiciendis? Dicta, magnam.",
  },
];

const Hero = () => {
  return (
    <div className="bg-gray-100">
      <div className="container pb-8 sm:pb-0">
        <div className="relative">
          <img
            src={image2}
            alt="image-1"
            className="w-full h-[600px] rounded-[40px]"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-8 text-white">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Lorem, <span className="text-white">ipsum dolor.</span>
            </h1>
            <p className="text-sm font-bold mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="bg-black text-white rounded-md p-2 text-md font-bold mt-4">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
