import React from "react";

const GoodFood = () => {
  return (
    <div className="lg:mx-9 mt-9">
      <h2 className="text-5xl font-semibold text-lime-500 mb-4">Better Health with Healthy Food</h2>
      <div className="flex justify-between items-center gap-6 sm:flex-col lg:flex-row">
        <p className="lg:w-3/5 text-lg leading-8 text-justify">
          Good food and health are closely intertwined. Eating a well-balanced
          diet that is rich in essential nutrients, vitamins, and minerals is
          vital for maintaining good health. A healthy diet should include
          plenty of fruits, vegetables, whole grains, lean proteins, and healthy
          fats. These foods can provide the body with the necessary energy and
          nutrients it needs to function properly and maintain a healthy weight.
          In contrast, a poor diet that is high in processed and sugary foods
          can contribute to a range of health problems, including obesity,
          diabetes, heart disease, and other chronic illnesses. Therefore,
          making healthy food choices and maintaining a balanced diet is crucial
          for promoting good health and overall wellbeing.
        </p>
        <div className="lg:w-2/5">
            <img src="../../public/images/good-food.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default GoodFood;
