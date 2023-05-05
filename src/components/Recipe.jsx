import React, { useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { ToastContainer, toast } from "react-toastify";
import "@smastrom/react-rating/style.css";
import { FaArrowLeft } from "react-icons/fa";

const Recipe = () => {
  const detailsRecipe = useLoaderData();
  const navigate = useNavigate();

  const { photo, name, ingredients, method, rating } = detailsRecipe;

  // changing disable state
  const [isDisabled, setIsDisabled] = useState(false);

  const notify = () => {
    toast("Added to the Favorite!!");
    setIsDisabled(true);
  };

  const handleNavigation = () =>{
    navigate(-1, { replace: true });
  }

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
        <div className="mt-6">
          <button
            onClick={notify}
            className="btn bg-lime-500 hover:bg-lime-700 border-none"
            disabled={isDisabled}
          >
            Add to Favourite
          </button>
          <ToastContainer />
        </div>
        <button onClick={handleNavigation} className="btn bg-white text-black p-0 border-none hover:bg-white"><FaArrowLeft></FaArrowLeft> Back to the recipes</button>
      </div>
    </div>
  );
};

export default Recipe;
