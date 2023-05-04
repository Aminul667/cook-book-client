import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const FoodBooks = () => {

  return (
    <div className="lg:mx-9 mt-12">
      <h2 className="text-5xl font-medium text-lime-500 mb-4 font-montez">
        Buy Our Latest Books
      </h2>
      <div className="flex justify-between items-center lg:flex-row sm:flex-col">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-6 pt-6">
            <img
              src="https://m.media-amazon.com/images/I/81LrhdtjYbL._AC_UF1000,1000_QL80_.jpg"
              className="rounded-xl h-96"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">My Bangladeshi Kitchen</h2>
            <p>Saira Hamilton</p>
            <Rating style={{ maxWidth: 150 }} value={5} readOnly />
            <div className="card-actions">
              <button className="btn bg-lime-500 hover:bg-lime-700 border-none">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-6 pt-6">
            <img
              src="https://m.media-amazon.com/images/I/51SYjobDdzL.jpg"
              className="rounded-xl h-96"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Curry Cook Book</h2>
            <p>Valeriya Ray</p>
            <Rating style={{ maxWidth: 150 }} value={5} readOnly />
            <div className="card-actions">
              <button className="btn bg-lime-500 hover:bg-lime-700 border-none">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-6 pt-6">
            <img
              src="https://m.media-amazon.com/images/I/51ljjG3P38L.jpg"
              className="rounded-xl h-96"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Love of Biryani</h2>
            <p>Varman Matur</p>
            <Rating style={{ maxWidth: 150 }} value={5} readOnly />
            <div className="card-actions">
              <button className="btn bg-lime-500 hover:bg-lime-700 border-none">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodBooks;
