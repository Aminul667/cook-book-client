import React from "react";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import Chef from "./Chef";
import GoodFood from "./GoodFood";

const Home = () => {
  const chefs = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <h3 className="text-5xl font-semibold text-lime-500 lg:mx-9 mb-4">Our Chefs</h3>
      <div className="lg:ml-9 grid lg:grid-cols-3 gap-4 justify-center">
        {chefs.map((chef) => (
          <Chef key={chef.chef_id} chef={chef}></Chef>
        ))}
      </div>
      <GoodFood></GoodFood>
    </div>
  );
};

export default Home;
