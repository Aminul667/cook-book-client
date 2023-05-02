import React from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";

const ChefRecipes = () => {
  const recipesData = useLoaderData();
  const { state } = useLocation();
  const { chef_picture, chef_name, description, experience, likes, recipes } = state;
  const {recipe_name} = recipesData;

  console.log(recipesData);

  return (
    <div className="lg:mx-9">
      <h2 className="text-5xl font-semibold text-lime-500 mb-4">
        Meet our Chef
      </h2>
      <div className="card lg:card-side shadow-x mb-8">
        <figure className="lg:w-1/4 lg:mr-10">
          <img src={chef_picture} alt="Album" className="w-full" />
        </figure>
        <div className="lg:w-3/4 lg:border-l-2 lg:border-lime-500 lg:pl-5 lg:pr-16">
          <h1 className="text-6xl font-medium mb-6">{chef_name}</h1>
          <p className="text-2xl mb-4">
            <span className="font-medium">Bio:</span> {description}
          </p>
          <p className="text-xl mb-4">
            <span className="font-medium">Experience: </span> {experience}
          </p>
          <p className="text-xl mb-4">
            <span className="font-medium">Recipes:</span> {recipes}
          </p>
          <p className="text-xl mb-4">
            <span className="font-medium">Likes:</span> {likes}
          </p>
        </div>
      </div>
      <h1 className="text-6xl font-medium mt-6 mb-5">Chef's Recipe</h1>
      {
        recipesData.map(data => <li key={data.recipe_id}><Link to='/recipe'>{data.recipe_name}</Link></li>)
      }
    </div>
  );
};

export default ChefRecipes;

{
  /* <div className="lg:mx-9 mt-9">
      <h2 className="text-5xl font-semibold text-lime-500 mb-4">
        Better Health with Healthy Food
      </h2>
      <div className="flex justify-between items-center gap-6 sm:flex-col lg:flex-row">
        <div className="lg:w-2/5">
          <img src={chef_picture} alt="" />
        </div>
        <div className="lg:w-3/5 text-lg leading-8 text-justify">
          <h1>{chef_name}</h1>
          <p>{description}</p>
          <p>{experience}</p>
          <p>{recipes}</p>
          <p>{likes}</p>
        </div>
      </div>
    </div> */
}
