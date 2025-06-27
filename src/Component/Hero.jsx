import React from "react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div
      className="w-full h-[90vh] bg-cover bg-center flex items-center justify-center text-white px-4"
      style={{
        backgroundImage: `url(https://i.ibb.co/2RT9pyj/pngtree-food-overlooking-the-background-banner-image-138613.jpg)`,
      }}
    >
      <div className=" bg-opacity-50 p-4 sm:p-6 md:p-8 rounded-lg text-center max-w-2xl mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-3 sm:mb-4 tracking-wide bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg leading-snug">
          <Typewriter
            words={["Flavor Hunt", "Discover New Recipes", "Cook with Love"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>

        <p className="mb-4 text-sm sm:text-base md:text-lg font-medium leading-relaxed text-gray-300">
          No more lost recipes! Keep everything in one place and share your
          culinary creations with the world.
        </p>

        <Link
          to="/all-recipes"
          className="relative inline-block rounded px-3 py-1.5 text-xs sm:px-5 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg overflow-hidden group bg-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Explore Recipes</span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
