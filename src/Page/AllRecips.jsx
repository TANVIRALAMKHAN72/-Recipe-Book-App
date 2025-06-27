import React, { useEffect, useState } from 'react';
import AllRecpiesCard from './AllRecpiesCard';
import { Fade } from 'react-awesome-reveal';

const AllRecips = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://recipe-book-server-chi.vercel.app/recipes')
      .then(res => res.json())
      .then(data => {
        setRecipes(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleLikeUpdate = (id, newLikeCount) => {
    setRecipes(prevRecipes =>
      prevRecipes.map(r => (r._id === id ? { ...r, likeCount: newLikeCount } : r))
    );

    fetch(`https://recipe-book-server-chi.vercel.app/recipes/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ likeCount: newLikeCount }),
    })
      .then(res => res.json())
      .then(data => {
        console.log('Like updated:', data);
      })
      .catch(err => console.error('Failed to update like:', err));
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center ">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  const filteredRecipes = recipes.filter(recipe =>
    recipe.cuisineType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-5">
<Fade>
        <h2 className="text-4xl font-bold text-center text-gray-800 my-10">All Recipes</h2>

</Fade>
      
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search by cuisine or title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full max-w-md"
        />
      </div>

  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
        {filteredRecipes.map(recipe => (
          <AllRecpiesCard
            key={recipe._id}
            recipe={recipe}
            onLikeUpdate={handleLikeUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default AllRecips;
