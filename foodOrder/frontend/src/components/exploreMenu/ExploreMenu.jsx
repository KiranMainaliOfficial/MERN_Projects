import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = () => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Menu</h1>
      <p className="explore-menu-text">
        Discover our delicious selection of dishes.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((items, index) => {
          return (
            <div className="explore-menu-list-item" key={index}>
              <img src={items.menu_image} alt="menu_images" className="" />
              <h3>{items.menu_name}</h3>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
