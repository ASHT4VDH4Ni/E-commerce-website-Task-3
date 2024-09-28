
import React from "react";
import King from "../Assets/hero_bg_clashroyale.612fcf42.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={King} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
           Welcome To The Arena Shop
          </h1>
          
        </div>
      </div>
    </div>
  );
};

export default Home;