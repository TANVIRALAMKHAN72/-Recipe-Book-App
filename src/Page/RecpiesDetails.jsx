import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import { FcLike } from "react-icons/fc";

const RecipeDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://recipe-book-server-chi.vercel.app/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, [id]);

  const handleLike = () => {
    setError("");
    fetch(`https://recipe-book-server-chi.vercel.app/recipes/${id}/like`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userEmail: user?.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setRecipe((prev) => ({
            ...prev,
            likeCount: data.likeCount,
            
          }));
        }
      })
      .catch(() => setError("Failed to like the recipe"));
  };

  if (!recipe) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="p-5 max-w-4xl mx-auto">
      <div className="bg-base-300 dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-4">
       
        <div className="text-center"> 
          <div className="flex justify-center items-center gap-2 text-lg font-medium">
            <FcLike size={22} />
            <span>{recipe.likeCount || 0} people liked this recipe</span>
          </div>
    
          {recipe.likedBy && (
            <p className="mt-1">{recipe.likedBy.join(", ")}</p>
          )}
        </div>

       
        <div className="w-full">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="rounded-lg shadow-md w-full max-h-96 object-cover"
          />
        </div>

       
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold ">{recipe.title}</h2>
          <button
            onClick={handleLike}
            disabled={user?.email === recipe.userEmail}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-white font-medium transition-all duration-300 ${
              user?.email === recipe.userEmail
                ? " cursor-not-allowed"
                : " hover:bg-pink-700"
            }`}
          >
            <FcLike size={22} />
            Like
          </button>
        </div>

       
        <div className="space-y-2">
          <p>
            <strong>Cuisine Type:</strong> {recipe.cuisineType}
          </p>
          <p>
            <strong>Ingredients:</strong> {recipe.ingredients}
          </p>
          <p>
            <strong>Instructions:</strong> {recipe.instructions}
          </p>
          <p>
            <strong>Preparation Time:</strong> {recipe.preparationTime} minutes
          </p>
          <p>
            <strong>Posted by :</strong> {recipe.userEmail}
          </p>
        </div>

        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default RecipeDetails;
