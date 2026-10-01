import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download-container">
      <h2>
        Get the better experience using the App available on both{" "}
        <span>Platforms</span> .
      </h2>
      <div className="app-download">
        <img src={assets.app_store} alt="appstore" />
        <img src={assets.play_store} alt="playstore" />
      </div>
    </div>
  );
};

export default AppDownload;
