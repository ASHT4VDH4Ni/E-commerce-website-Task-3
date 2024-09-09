import React from "react";
import Bat from "../Assets/Bat.jpg";
import Dragon from "../Assets/Dragon.jpg";
import RichKing from "../Assets/RichKing.jpg";
import MegaKnight from "../Assets/Golden MegaKnight Statue.jpg"
import Barberian from "../Assets/golden barberian.jpg"
import Princess from "../Assets/Princess Victory globe.jpg"
const Work = () => {
  const itemInfoData = [
    {
      image: Bat,
      title: "Bat",
      text: "Fly into style with a touch of nocturnal flair.",
      buttonText: "Add to Cart",
      price: "49₹",
    },

    {
      image: MegaKnight,
      title: "Golden MegaKnight",
      text: "Rule The Arena.",
      buttonText: "Add to Cart",
      price: "9,999₹",
    },

    {
      image: Dragon,
      title: "Baby Dragon",
      text: "Ignite your charm with this tiny fiery friend.",
      buttonText: "Add to Cart",
      price: "79₹",
    },

    {
      image: Barberian,
      title: "Gold Barberian",
      text: "The Golden Barbarian Statue is a striking piece of art that exudes grandeur and strength.Charggg",
      buttonText: "Add to Cart",
      price: "24,500₹",
    },

    {
      image: RichKing,
      title: "$ Eyes",
      text: "Rule your accessories with a touch of bling.",
      buttonText: "Add to Cart",
      price: "99₹",
    },
    {
      image: Princess,
      title: "Princess Globe",
      text: "In the Princess Globe, where dreams entwine.",
      buttonText: "Add to Cart",
      price: "26,000₹",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Explore our exclusive SuperSell merchandise, add your favorite items to the cart, and checkout seamlessly with secure payment options.
          Your order will be delivered right to your doorstep!
        </p>
      </div>
      <div className="work-section-bottom">
        {itemInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt={data.title} />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            <div className="button-price-container">
              <button className="info-button">{data.buttonText}</button>
              <span className="price-tag">{data.price}</span> {/* Price tag beside the button */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
