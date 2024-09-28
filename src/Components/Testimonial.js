
import React from "react";
import ProfilePic from "../Assets/dobby.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading"><h1>Testimonial</h1></p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Discover what everyone’s raving about! Our customers can’t stop talking about how our products exceed expectations with exceptional quality and delightful surprises.
          Hear their stories and see why we're the talk of the town!
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        Why bother with all these shiny trinkets when you could have the genuine craftsmanship of my shop?
        Sure, those fancy items are pretty, but can they brew a potion that makes you dance like no one’s watching?
        I didn’t think so! Come on over to Goblin's Curiosities, where our products come with a 100% money-back guarantee if you don’t turn into a frog within a week!
        Just kidding—no refunds! But hey, you might get a great story out of it!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Jastor</h2>
      </div>
    </div>
  );
};

export default Testimonial;