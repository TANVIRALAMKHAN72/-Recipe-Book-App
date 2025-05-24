import React from "react";
import Hero from "./Hero";
import ChefTrips from "./ChefTrips";
import Review from "./Review";
import TopRecipe from "./TopRecipe";

const Home = () => {
  return (
    <div>
      <div>
        <Hero></Hero>
        <ChefTrips></ChefTrips>
        <TopRecipe></TopRecipe>
        <Review></Review>
      </div>

    </div>
  );
};

export default Home;
