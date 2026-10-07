import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header.jsx";
import ExploreMenu from "../../components/exploreMenu/ExploreMenu.jsx";
import FoodDisplay from "../../components/foodDisplay/FoodDisplay.jsx";
import AppDownload from "../../components/appDownload/AppDownload.jsx";

const Home = () => {
  const [category, setCategory] = useState("All");
  // useEffect(() => {
  //   console.log(category);
  // }, [category]);
  // console.log(category);
  return (
    <>
      <div className="home">
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />

        <AppDownload />
        {/* <div className="home"> */}
        {/* <h1>Welcome to the Home Page</h1>
        <p>This is the home page content.</p> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default Home;
