import React from "react";

const Chef = ({ chef }) => {
  console.log(chef);
  const { chef_picture, chef_name, experience, recipes, likes } = chef;

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure className="h-96">
          <img src={chef_picture} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{chef_name}</h2>
          <p>{experience}</p>
          <p>{recipes}</p>
          <p>{likes}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
