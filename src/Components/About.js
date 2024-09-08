import React from "react";
import Redking from "../Assets/file (1).png";
import AboutBackgroundImage from "../Assets/king_globe-removebg-preview.png";
// import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={Redking} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Blue King's Victory Snow Globe: Red King's Worst Nightmare!
        {/* Celebrate Victory with the Limited Edition King Snow Globe Red King’s Worst Nightmare! */}
        </h1>
        <p className="primary-text">
        Showcase your triumph with the Limited Edition Blue King's Victory Snow Globe where Red King’s envy meets your celebration.
        </p>
        {/* <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p> */}
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          {/* <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default About;