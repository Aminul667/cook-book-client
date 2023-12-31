import React, { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { Link, useLoaderData, useLocation, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const ChefRecipes = () => {
  const recipesData = useLoaderData();
  const { id } = useParams();
  const [chef, setChef] = useState([]);

  useEffect(() => {
    fetch("https://b710-chef-recipe-server.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => {
        const findChef = data.find((chef) => chef.chef_id === parseInt(id));
        setChef(findChef);
      })
      .catch((error) => console.error(error));
  }, []);

  const { chef_picture, chef_name, description, experience, likes, recipes } =
    chef;

  return (
    <div className="lg:mx-9">
      <h2 className="text-5xl font-medium text-lime-500 mb-4 font-montez">
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
          <div className="flex gap-2 items-center text-xl">
            <AiFillLike></AiFillLike>
            {likes}
          </div>
        </div>
      </div>
      <h1 className="text-5xl font-medium text-lime-500 mb-4 font-montez">
        Chef's Recipe
      </h1>
      <ul className="flex flex-col w-1/2 mx-auto mb-12">
        {recipesData.map((data) => (
          <li
            key={data.recipe_id}
            className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          >
            <div className="flex justify-between w-full text-xl">
              {data.recipe_name}
              <div>
                <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-lime-500 text-white mr-5">
                  <Link to={`/recipe/${data.recipe_id}`}>Details</Link>
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChefRecipes;
