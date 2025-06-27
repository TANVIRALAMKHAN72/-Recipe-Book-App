import React from "react";
import Hero from "./Hero";
import ChefTrips from "./ChefTrips";
import Review from "./Review";
import TopRecipe from "./TopRecipe";
import ExploreByCuisine from "./JoinCommunity";
import LatestRecipes from "./CookingMadeEasy";
import JoinCommunity from "./JoinCommunity";
import CookingMadeEasy from "./CookingMadeEasy";

const Home = () => {
  return (
    <div>
      <div>
        <Hero></Hero>
        <ChefTrips></ChefTrips>
        <TopRecipe></TopRecipe>
        <Review></Review>
        <JoinCommunity></JoinCommunity>
        <CookingMadeEasy></CookingMadeEasy>
      </div>

    </div>
  );
};

export default Home;
