import React from "react";
import banner from "../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div
      className="text-center bg-no-repeat bg-center lg:mx-9 mb-8"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="backdrop-brightness-50 py-28 lg:py-44">
        <h2 className="text-4xl lg:text-6xl text-white font-medium">
          Enjoy Cooking
        </h2>
        <p className="text-3xl lg:text-4xl font-normal text-white mt-6">
          Easily Learn to cook from our Bangladeshi recipes
        </p>
      </div>
    </div>
  );
};

export default Banner;
