import React from "react";
import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const { chef_id, chef_picture, chef_name, experience, recipes, likes } = chef;

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure className="h-96">
          <img src={chef_picture} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-semibold">{chef_name}</h2>
          <p className="text-lg">
            <span className="font-medium">Experience:</span> {experience}
          </p>
          <p className="text-lg">
            <span className="font-medium">Recipes:</span> {recipes}
          </p>
          <div className="flex gap-2 items-center text-xl">
            <AiFillLike></AiFillLike>
            {likes}
          </div>
          <div className="card-actions justify-center">
            <button className="btn bg-lime-500 border-none hover:bg-lime-700">
              <Link to={`/${chef_id}`} state={chef}>
                View Recipes
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
