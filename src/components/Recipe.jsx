import React from "react";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Recipe = () => {
  const detailsRecipe = useLoaderData();
  const { photo, name, ingredients, method, rating } = detailsRecipe;

  console.log(detailsRecipe);
  return (
    <div className="lg:mx-9">
      <h2 className="text-5xl font-medium text-lime-500 mb-4 font-montez">
        Let's Cook {name}
      </h2>
      <div className="py-5 px-32">
        <img src={photo} alt="" className="mx-auto mb-7 rounded-lg" />
        <h2 className="text-2xl font-medium mb-2">Ingredients</h2>
        <p className="mb-6">{ingredients}</p>
        <h2 className="text-2xl font-medium mb-2">Method</h2>
        <p className="mb-6">{method}</p>
        <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
      </div>
    </div>
  );
};

export default Recipe;
