import React from "react";
import heroPic from "../assets/labor-day-barbecue-feast-with-grilled-meats-and-vegetables-photo.jpg";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";


const Hero = () => {
  return (
    <div
      className="w-full h-[90vh] bg-cover bg-center flex items-center justify-center text-white px-4"
      style={{ backgroundImage: `url(${heroPic})` }}
    >
      <div className=" bg-opacity-75 p-6 rounded-lg text-center max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 tracking-wide bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
           <Typewriter
            words={['Flavor Hunt', 'Discover New Recipes', 'Cook with Love']}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>
        <p className="mb-5 text-base sm:text-lg md:text-xl font-bold leading-relaxed text-gray-900 ">
          No more lost recipes! Keep everything in one place and share your
          culinary creations with the world.
        </p>

        <Link
          className="relative inline-block rounded px-4 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-base overflow-hidden group bg-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Explore Recipes</span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
