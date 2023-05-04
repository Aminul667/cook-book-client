import React from "react";

const FoodBooks = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
            <p>Rating 5</p>
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
            <h2 className="card-title">My Bangladeshi Kitchen</h2>
            <p>Saira Hamilton</p>
            <p>Rating 5</p>
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
            <h2 className="card-title">My Bangladeshi Kitchen</h2>
            <p>Saira Hamilton</p>
            <p>Rating 5</p>
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
