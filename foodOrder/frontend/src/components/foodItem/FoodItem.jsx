import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext.jsx";

const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = React.useState(0);
  const { addToCart, removeFromCart, cartItems } = useContext(StoreContext);
  console.log(itemCount);

  return (
    <div className="food-item">
      <div className="food-item-container">
        <img src={image} alt="" className="food-item-image" />
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_green}
            alt="add"
            onClick={() => addToCart(id)}
            className="oneAdd"
          />
        ) : (
          <div className="food-item-count">
            <img
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(id)}
              alt="remove"
              className="remove"
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              onClick={() => addToCart(id)}
              alt="add"
              className="add"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p>{description}</p>
        <p className="food-item-price"> $ {price} </p>{" "}
      </div>
    </div>
  );
};

export default FoodItem;
