import React, { useEffect, useState } from 'react';
import { FcLike } from 'react-icons/fc';
import { Link } from 'react-router';
import { Fade } from 'react-awesome-reveal';

const TopRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/topRecipe.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="h-screen flex items-center justify-center ">
        <span className="loading loading-bars loading-lg"></span>
      </div>


  return (
    <div className="mx-auto p-8  bg-base-300 ">

    <Fade>
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-600">Top Recipes</h1>
    </Fade>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
        {recipes.map((recipe) => (
          <div
            key={recipe._id}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">{recipe.title}</h2>
              <p className="text-gray-700  mb-2">
                <span className="font-semibold">Ingredients:</span> {recipe.cuisineType}
              </p>
             
              <p className="flex items-center text-red-400 font-bold text-lg">
                <span className="mr-2"><FcLike size={24}/></span> {recipe.likeCount} Likes
              </p>
            </div>
          </div>
        ))}
      </div>
      <Link to='/all-recipes'>
       <button className='btn btn-primary px-5'>See All Recipes</button>
      </Link>
    </div>
  );
};

export default TopRecipe;
