import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import RecipeModal from './RecipeModal';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const MyRecipes = () => {
  const { user } = useContext(AuthContext);
  const [myRecipes, setMyRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    if (user?.email) {
      console.log('Fetching recipes for:', user.email);
      fetch(`https://recipe-book-server-chi.vercel.app/recipes?userEmail=${user.email}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setMyRecipes(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [user]);

  const handleDelete = (id) => {
    fetch(`https://recipe-book-server-chi.vercel.app/recipes/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(() => {
        setMyRecipes(prev => prev.filter(recipe => recipe._id !== id));
      });
  };

  const handleUpdate = (recipe) => {
    setSelectedRecipe(recipe);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedRecipe(null);
  };

  const handleUpdateSubmit = (updatedRecipe) => {
    fetch(`https://recipe-book-server-chi.vercel.app/recipes/${selectedRecipe._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...updatedRecipe,
        userEmail: user.email,
      }),
    })
      .then(res => res.json())
      .then(data => {
        setMyRecipes(prev =>
          prev.map(recipe => (recipe._id === data._id ? data : recipe))
        );
        closeModal();
      })
      .catch(err => {
        console.error('Update failed:', err);
      });
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="py-5 px-8">
      <h2 className="text-3xl font-bold mt-8 mb-12 text-center">My Recipes</h2>
      {myRecipes.length === 0 ? (
        <p className='my-20 text-center font-semibold'>You have not added any recipes yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {myRecipes.map(recipe => (
            <div key={recipe._id} className="bg-base-300 rounded px-3 py-3 space-y-1 shadow">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover mb-3 rounded"
              />

              
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-2xl font-bold">{recipe.title}</h3>
                <div className="flex gap-2">
                  <button onClick={() => handleUpdate(recipe)} className="btn btn-sm btn-primary">
                    <FaEdit size={18} />
                  </button>
                  <button onClick={() => handleDelete(recipe._id)} className="btn btn-sm btn-error">
                    <RiDeleteBin6Line size={18} />
                  </button>
                </div>
              </div>

              <p><strong>Cuisine:</strong> {recipe.cuisineType}</p>
              <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
              <p><strong>Instructions:</strong> {recipe.instructions}</p>
              <p><strong>Preparation Time:</strong> {recipe.preparationTime} mins</p>
              <p><strong>Categories:</strong> {recipe.categories.join(', ')}</p>
             <p><strong>Likes:</strong> {recipe.likeCount || 0}</p>
            </div>
          ))}
        </div>
      )}

      {modalOpen && (
        <RecipeModal
          isOpen={modalOpen}
          onClose={closeModal}
          recipeData={selectedRecipe}
          onUpdate={handleUpdateSubmit}
        />
      )}
    </div>
  );
};

export default MyRecipes;
