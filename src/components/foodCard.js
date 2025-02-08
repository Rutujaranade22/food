import React from "react";
import "../styles.css";

const FoodCard = ({ title,  price, isVeg }) => {
  return (
    <div className="food-card">
       <div className="food-details">
        <h3>{title}</h3>
        <p>Price: ₹{price}</p>
         <p className={isVeg ? "veg" : "non-veg"}>
          {isVeg ? "🥣 Vegetarian" : "🍗 Non-Vegetarian"}
        </p>
      </div>
    </div>
  );
};

export default FoodCard;
