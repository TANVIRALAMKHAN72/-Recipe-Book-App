
import React from 'react';
import { useNavigate } from 'react-router';
import { FcLike } from "react-icons/fc";

const AllRecpiesCard = ({ recipe }) => {
  const navigate = useNavigate();
  const likeCount = recipe.likeCount || 0;

  return (
    <div className="bg-gray-300 shadow-md hover:shadow-lg transition duration-300 rounded-xl overflow-hidden flex flex-col">
      <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">{recipe.title}</h3>

          <div className="flex justify-between items-center text-sm text-gray-700 mb-4">
            <p className='text-lg font-semibold'>
              <span className="font-bold text-lg">Cuisine:</span> {recipe.cuisineType}
            </p>
            <p
              className="flex items-center gap-1 text-gray-600 select-none"
              title="Total Likes"
            >
              <FcLike size={20} />
              {likeCount}
            </p>
          </div>
        </div>

        <button
          onClick={() => navigate(`/recipes-details/${recipe._id}`)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default AllRecpiesCard;
