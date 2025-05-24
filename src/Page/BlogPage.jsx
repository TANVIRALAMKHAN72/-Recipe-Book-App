import React from 'react';

const BlogPage = () => {
    return (
        <div className="w-10/12 mx-auto px-6 py-12 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-500">Recipe Book FAQs</h1>

      <div className="bg-white p-6 rounded-2xl shadow mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">
          How do I save recipes in this app?
        </h2>
        <p className="text-gray-700 leading-relaxed font-semibold">
          You can save recipes by clicking the 'Add to My Recipes' button on any recipe page.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">
          Can I share my recipes with friends?
        </h2>
        <p className="text-gray-700 leading-relaxed font-semibold">
          Yes! After saving a recipe, you can share its unique link with anyone.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">
          Is there a way to search for recipes by ingredient?
        </h2>
        <p className="text-gray-700 leading-relaxed font-semibold">
          Currently, we offer a search bar where you can type ingredients to filter recipes.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">
          Can I edit or delete my saved recipes?
        </h2>
        <p className="text-gray-700 leading-relaxed font-semibold">
          Yes, go to 'My Recipes' section and use the edit or delete options on each recipe.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">
          Do I need to create an account to use the app?
        </h2>
        <p className="text-gray-700 leading-relaxed font-semibold">
          No, but creating an account allows you to save recipes and sync across devices.
        </p>
      </div>
    </div>
    );
};

export default BlogPage;