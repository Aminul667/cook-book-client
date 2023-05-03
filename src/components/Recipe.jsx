import React from "react";
import { useLoaderData } from "react-router-dom";

const Recipe = () => {
  const detailsRecipe = useLoaderData();
  const { photo, name, ingredients, method, rating } = detailsRecipe;

  console.log(detailsRecipe);
  return (
    <div className="lg:mx-9">
      <h2 className="text-5xl font-semibold text-lime-500 mb-7">
        Let's Cook {name}
      </h2>
      <img src={photo} alt="" className="mx-auto mb-7" />
      <h2>Ingredients</h2>
      <p>{ingredients}</p>
      <h2>Method</h2>
      <p>{method}</p>
      <h2>Rating</h2>
      <p>{rating}</p>
    </div>
  );
};

export default Recipe;
