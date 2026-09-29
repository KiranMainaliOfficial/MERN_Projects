import React, { useState } from "react";
import { assets } from "../../assets/assets.js";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("menu");
  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" />
      <ul className="navbar-menu">
        <li
          className={menu === "home" ? "active" : ""}
          onClick={() => setMenu("home")}
        >
          Home
        </li>
        <li
          className={menu === "menu" ? "active" : ""}
          onClick={() => setMenu("menu")}
        >
          Menu
        </li>
        <li
          className={menu === "about" ? "active" : ""}
          onClick={() => setMenu("about")}
        >
          About
        </li>
        <li
          className={menu === "contact" ? "active" : ""}
          onClick={() => setMenu("contact")}
        >
          Contact
        </li>
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
