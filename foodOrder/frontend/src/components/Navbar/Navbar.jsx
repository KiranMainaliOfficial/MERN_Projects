import React from "react";
import { assets } from "../../assets/assets.js";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" />
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Menu</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="Basket" className="" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
