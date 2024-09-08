import React from "react";
import King from "../Assets/file.png";
import Pillow from "../Assets/LogPillow.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={King} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Get Cozy with the Log Pillow: Clash Royale's Iconic Defense, Now Your Ultimate Comfort!
          </h1>
          <p className="primary-text">
          Soft as a pillow, sturdy as the Log—crafted for ultimate comfort and healthy support.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={Pillow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;