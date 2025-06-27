import React, { useState, useEffect } from 'react';

const RecipeModal = ({ isOpen, onClose, recipeData, onUpdate }) => {
  const [formData, setFormData] = useState({
    title: '',
    email: '',
    ingredients: '',
    instructions: '',
    cuisineType: '',
    preparationTime: '',
    categories: [],
    image: '',
  });

  useEffect(() => {
    if (recipeData) {
      setFormData({
        title: recipeData.title || '',
        email: recipeData.userEmail || '',
        ingredients: recipeData.ingredients || '',
        instructions: recipeData.instructions || '',
        cuisineType: recipeData.cuisineType || '',
        // preparationTime: recipeData.prepTime || '',
        preparationTime: recipeData.preparationTime || '',
        categories: recipeData.categories || [],
        image: recipeData.image || '',
      });
    }
  }, [recipeData]);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;

    if (name === 'categories') {
      let newCategories = [...formData.categories];
      if (checked) {
        newCategories.push(value);
      } else {
        newCategories = newCategories.filter(cat => cat !== value);
      }
      setFormData(prev => ({ ...prev, categories: newCategories }));
    } else if (type === 'number') {
      setFormData(prev => ({ ...prev, [name]: Number(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
  
    onUpdate(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-base-200 rounded-lg p-6 max-w-3xl w-full overflow-auto max-h-[90vh]">
        <button
          className="float-right text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-3xl font-bold mb-6 text-center">Update Recipe</h2>
        <form onSubmit={handleSubmit}>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label font-semibold">Recipe Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="input w-full"
                placeholder="Recipe title"
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label font-semibold">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input w-full"
                placeholder="Your email"
              />
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label font-semibold">Ingredients</label>
              <textarea
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                required
                className="textarea w-full"
                placeholder="List ingredients..."
              ></textarea>
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label font-semibold">Instructions</label>
              <textarea
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                required
                className="textarea w-full"
                placeholder="Cooking instructions..."
              ></textarea>
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label font-semibold">Cuisine Type</label>
              <select
                name="cuisineType"
                value={formData.cuisineType}
                onChange={handleChange}
                required
                className="select w-full"
              >
                <option value="Italian">Italian</option>
                <option value="Mexican">Mexican</option>
                <option value="Indian">Indian</option>
                <option value="Bangladeshi">Bangladeshi</option>
                <option value="Japanese">Japanese</option>
                <option value="Chinese">Chinese</option>
                <option value="Others">Others</option>
              </select>
            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label font-semibold">Preparation Time (minutes)</label>
              <input
                type="number"
                name="preparationTime"
                value={formData.preparationTime || ''}
                onChange={handleChange}
                required
                className="input w-full"
                placeholder="Time"
              />
            </fieldset>

            <fieldset className="md:col-span-2 fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label font-semibold mb-2">Categories</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {['Breakfast', 'Lunch', 'Dinner', 'Dessert'].map(cat => (
                  <label key={cat}>
                    <input
                      type="checkbox"
                      name="categories"
                      value={cat}
                      checked={formData.categories.includes(cat)}
                      onChange={handleChange}
                      className="checkbox mr-2"
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="md:col-span-2 fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label font-semibold">Image URL</label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
                className="input w-full"
                placeholder="Image URL"
              />
            </fieldset>

          </div>

          <div className="text-center mt-8">
            <button type="submit" className="btn btn-primary w-full">Update Recipe</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecipeModal;
