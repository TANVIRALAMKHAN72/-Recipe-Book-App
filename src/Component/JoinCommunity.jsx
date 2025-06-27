import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaUsers, FaUtensils, FaSmile, FaRegCommentDots } from "react-icons/fa";
import { Link } from "react-router";

const JoinCommunity = () => {
  const features = [
    {
      icon: <FaUsers size={40} className="text-blue-500" />,
      text: "10,000+ Active Users",
    },
    {
      icon: <FaUtensils size={40} className="text-green-500" />,
      text: "5,000+ Recipes Shared",
    },
    {
      icon: <FaSmile size={40} className="text-pink-500" />,
      text: "Happy Home Chefs",
    },
    {
      icon: <FaRegCommentDots size={40} className="text-yellow-500" />,
      text: "Community Feedback",
    },
  ];

  return (
    <section className="py-10 bg-base-300 text-center">
      <Fade>
        <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-4">
          Join Our Cooking Community
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Share your own recipes, discover others, and become part of our
          growing food-lover family.
        </p>
      </Fade>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {features.map((item, index) => (
          <Fade key={index} delay={index * 100}>
            <div className="bg-white p-6 rounded-lg shadow hover:-translate-y-1 transition duration-300">
              <div className="mb-3 flex justify-center">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700">
                {item.text}
              </h3>
            </div>
          </Fade>
        ))}
      </div>

      <Link to="/login">
        <button className="mt-10 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded shadow hover:shadow-lg transition duration-300">
          Join Now
        </button>
      </Link>
    </section>
  );
};

export default JoinCommunity;
