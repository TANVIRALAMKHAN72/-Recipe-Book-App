import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { RxDashboard } from "react-icons/rx";
import { RiAddBoxLine } from "react-icons/ri";
import { FaHome, FaSearchPlus } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalRecipes: 0,
    topLikedRecipe: { name: "", likes: 0 },
    wishlistItems: 0,
    recentlyAdded: "",
    yourAddedRecipes: 0,
  });

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail") || "";

    fetch("https://recipe-book-server-chi.vercel.app/recipes")
      .then((res) => res.json())
      .then((recipes) => {
        const totalRecipes = recipes.length;

        let topLikedRecipe = { name: "", likes: 0 };
        recipes.forEach((r) => {
          if ((r.likeCount || 0) > topLikedRecipe.likes) {
            topLikedRecipe = { name: r.title, likes: r.likeCount || 0 };
          }
        });

        const recentlyAdded = recipes.length
          ? recipes[recipes.length - 1].title
          : "";

        setStats((prev) => ({
          ...prev,
          totalRecipes,
          topLikedRecipe,
          recentlyAdded,
        }));
      });

    // ✅ Fetch user added recipe count
    if (userEmail) {
      fetch(
        `https://recipe-book-server-chi.vercel.app/user-recipes-count?userEmail=${userEmail}`
      )
        .then((res) => res.json())
        .then((data) => {
          setStats((prev) => ({
            ...prev,
            yourAddedRecipes: data.count,
          }));
        });
    }
  }, []);

  return (
    <section className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard Menu</h2>
        <nav className="flex flex-col space-y-4">
          <Link
            to="/add-recipes"
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <RiAddBoxLine /> <span>Add Recipe</span>
          </Link>
          <Link
            to="/my-recipes"
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <FaSearchPlus /> <span>My Recipes</span>
          </Link>
          <Link
            to="/blog"
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <TfiWrite /> <span>Blog</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <FaHome /> <span>Back to Home</span>
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <div className="mb-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-lg p-8">
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <RxDashboard className="text-5xl" /> Dashboard Overview
          </h2>
          <p className="text-lg leading-relaxed">
            Welcome to your{" "}
            <span className="font-semibold">Recipe Book Dashboard</span>! Here
            you can <span className="underline">add new recipes</span>,
            <span className="underline">manage your favorite dishes</span>,
            track <span className="font-semibold">likes & wishlist items</span>,
            and stay inspired with delicious ideas. Keep exploring and happy
            cooking!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Total Recipes</h3>
            <p className="text-gray-600">
              You have {stats.totalRecipes} recipes.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Top Liked Recipe</h3>
            <p className="text-gray-600">
              "{stats.topLikedRecipe.name}" with {stats.topLikedRecipe.likes}{" "}
              likes.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Cooking Tip</h3>
            <p className="text-gray-600">
              “Cooking is like love. It should be entered into with abandon or
              not at all.” – Harriet Van Horne
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Recently Added</h3>
            <p className="text-gray-600">Last added: "{stats.recentlyAdded}"</p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Dashboard;
