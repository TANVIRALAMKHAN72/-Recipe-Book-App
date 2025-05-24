import React from "react";
import Swal from "sweetalert2";

const AddRecpies = () => {
    const handleAddRecipes = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newRecipe = {
    image: formData.get('image'),
    title: formData.get('title'),
    ingredients: formData.get('ingredients'),
    instructions: formData.get('instructions'),
    cuisineType: formData.get('cuisineType'),
    preparationTime: parseInt(formData.get('preparationTime')),
    categories: formData.getAll('categories'),
    userEmail: formData.get('email') 
  };
  console.log(newRecipe);

       fetch('https://recipe-book-server-chi.vercel.app/recipes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newRecipe)
  })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId) {
        Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your recpie has been added successfully",
  showConfirmButton: false,
  timer: 1500
});
form.reset();
      }
     
    });
};



  return (
     <div className="my-12 w-11/12 md:w-9/12 mx-auto">
      <h1 className="text-3xl font-bold mb-10 text-center text-gray-600">Add a Recipe</h1>

      <form onSubmit={handleAddRecipes}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label font-semibold">Recipe Title</label>
            <input type="text" name="title" required className="input w-full" placeholder="Recipe title" />
          </fieldset>
   <fieldset className=" fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <label className="label font-semibold">Your Email</label>
  <input type="email" name="email" required className="input w-full" placeholder="Your email" />
</fieldset>
        

         
          <fieldset className=" fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label font-semibold">Ingredients</label>
            <textarea name="ingredients" required className="textarea w-full" placeholder="List ingredients..."></textarea>
          </fieldset>

          
          <fieldset className=" fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label font-semibold">Instructions</label>
            <textarea name="instructions" required className="textarea w-full" placeholder="Cooking instructions..."></textarea>
          </fieldset>

         
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label font-semibold">Cuisine Type</label>
            <select name="cuisineType" required className="select w-full">
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
            <input type="number" name="preparationTime" required className="input w-full" placeholder="Time" />
          </fieldset>

         
          <fieldset className="md:col-span-2 fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label font-semibold mb-2">Categories</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
             <label>
  <input type="checkbox" name="categories" value="Breakfast" className="checkbox mr-2" />
  Breakfast
</label>
<label>
  <input type="checkbox" name="categories" value="Lunch" className="checkbox mr-2" />
  Lunch
</label>
<label>
  <input type="checkbox" name="categories" value="Dinner" className="checkbox mr-2" />
  Dinner
</label>
<label><input type="checkbox" name="categories" value="Dessert" className="checkbox mr-2" />Dessert</label>

            </div>
          </fieldset>
         <fieldset className="md:col-span-2 fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label font-semibold">Image URL</label>
            <input type="text" name="image" required className="input w-full" placeholder="Image URL" />
          </fieldset>


        </div>

        <div className="text-center mt-8">
          <button type="submit" className="btn btn-primary w-full">Add Recipe</button>
        </div>
      </form>
    </div>
  );
};

export default AddRecpies;
