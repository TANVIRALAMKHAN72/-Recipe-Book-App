import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaClock, FaBookOpen, FaUtensils } from "react-icons/fa";
import cookingLottie from "../assets/Animation - 1750958223514.json";
import Lottie from "lottie-react";
import { Link } from "react-router";

const CookingMadeEasy = () => {
  return (
    <section className="py-10 bg-white mx-20">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 gap-12">
        <Fade cascade>
          <div className="lg:w-3/5 text-center lg:text-left">
            <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              Cooking Made Easy
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Whether you're a beginner or a pro, find easy-to-follow recipes,
              cooking tips, and kitchen hacks — all in one place!
            </p>
            <ul className="mb-8 space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <FaClock className="text-orange-500 text-2xl" />
                <span className="font-medium">Quick & Time-saving Recipes</span>
              </li>
              <li className="flex items-center gap-3">
                <FaBookOpen className="text-blue-500 text-2xl" />
                <span className="font-medium">Step-by-step Instructions</span>
              </li>
              <li className="flex items-center gap-3">
                <FaUtensils className="text-green-500 text-2xl" />
                <span className="font-medium">Variety of Cuisines</span>
              </li>
            </ul>
            <Link to={"/add-recipes"}>
              <button className="relative inline-block rounded px-3 py-1.5 text-xs sm:px-5 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg overflow-hidden group bg-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Start Cooking Now</span>
              </button>
            </Link>
          </div>
        </Fade>

        <Fade>
          <div className="lg:w-3/5">
            <Lottie
              animationData={cookingLottie}
              loop={true}
              className="w-full h-auto"
            />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default CookingMadeEasy;
