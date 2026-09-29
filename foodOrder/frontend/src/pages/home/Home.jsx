import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header.jsx";
import ExploreMenu from "../../components/exploreMenu/ExploreMenu.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <ExploreMenu />
      <div className="home">
        {/* <h1>Welcome to the Home Page</h1>
        <p>This is the home page content.</p> */}
      </div>
    </div>
  );
};

export default Home;
