
import React from "react";
import ProfilePic from "../Assets/dobby.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Discover what everyone’s raving about! Our customers can’t stop talking about how our products exceed expectations with exceptional quality and delightful surprises.
          Hear their stories and see why we're the talk of the town!
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Attention, brave shopper! Be extra careful with your delivery,those cheeky goblins might be lurking around,
          ready to swipe your goodies for a sneaky midnight feast.
          Watch out for sneaky goblins! Double-check your delivery—some of us might 'borrow' your loot for a midnight snack!
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