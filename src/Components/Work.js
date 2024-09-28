
import React, { useState, useRef } from "react";
import './Work.css';
import Size from "../Assets/Size.jpg"
import Eatsleep from "../Assets/Eat-sleep-T.jpg";
import EatSleep1 from "../Assets/Eat-sleep-T1.jpg";
import King  from "../Assets/KingT-Shirt.jpg";
import  King1 from "../Assets/KingT-Shirt1.jpg";
import  King2 from "../Assets/KingT-Shirt2.jpg";
import  Bs from "../Assets/brawl-stars-hoodie.jpg";
import  kthumb from "../Assets/King Thumb-T-Shrt.jpg";
import  kthumb1 from "../Assets/King Thumb-T-Shrt1.jpg";
import  emote from "../Assets/emo.jpg";
import   Sup from "../Assets/SupT-Shirt.jpg";
import   Sup1 from "../Assets/SupT-Shirt1.jpg";
import   Sup2 from "../Assets/SupT-Shirt2.jpg";
import   skeli from "../Assets/Skeleton tshirt.jpg";
import   Wiz from "../Assets/Wizard tshrt.jpg";
import   Braw from "../Assets/brawl-stars-T-shirt.jpg";
import   Braw1 from "../Assets/brawl-stars-T-shirt1.jpg";

const Work = ({ addToCart }) => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const [reviews, setReviews] = useState({});
  const [showReviewBox, setShowReviewBox] = useState(false);
  const [currentReview, setCurrentReview] = useState('');
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);
  const [showAddedMessage, setShowAddedMessage] = useState(false); 

  const productRefs = useRef([]);

  const itemInfoData = [
    {
      images: [Sup, Sup1,Sup2 ],
      title: "Supercell",
      textFront: "Powered by Pixels",
      textBack: "Where magic meets mayhem. Wear the logo, feel the power.",
      price: "249₹",
      category: "T-shirt",
    },
    {
      images: [King,King1 ,King2 ],
      title: "Gold League",
      textFront: "Crown Me King!",
      textBack: "Shining brighter than my victory chest!",
      price: "249₹",
      category: "Champ",
    },
    {
      images: [kthumb,Size ,kthumb1 ],
      title: "All The Best",
      textFront: "All the Best, Clasher!",
      textBack: "When in doubt, just smash ‘em with the thumb of approval!",
      price: "249₹",
      category: "T-shirt",
    },
    {
      images: [skeli,Size ,skeli],
      title: "Larry",
      textFront: "Skeleton Warrior: Small but Deadly!",
      textBack: "Bone to pick? I’ve got a sword for that.",
      price: "249₹",
      category: "T-shirt",
    },
    {
      images: [EatSleep1,Eatsleep ,Size ],
      title: "Eat-Sleep-Clash-Reapeat",
      textFront: "Eat. Sleep. Clash. Repeat.",
      textBack: "The cycle of a true champion.",
      price: "249₹",
      category: "T-shirt",
    },
    {
      images: [emote,Size ,emote ],
      title: "Ohh! Noo",
      textFront: "Oh No!",
      textBack: "When the Elixir runs out and you’re out of spells!",
      price: "249₹",
      category: "T-shirt",
    },
    {
      images: [Wiz,Size ,Wiz ],
      title: "Baby Wizard",
      textFront: "Abracadabra!",
      textBack: "Turn enemies to ashes… or my dinner, we’ll see.",
      price: "249₹",
      category: "T-shirt",
    },
    {
      images: [Braw, Braw1,Size ],
      title: "Brawl Stars",
      textFront: "Brawl On!",
      textBack: "It’s not just a game, it’s a way of life.",
      price: "249₹",
      category: "Funky-shirt",
    },
    {
      images: [Bs,Size ,Bs ],
      title: "Brawl On!",
      textFront: "Ready for a Brawl?",
      textBack: "Keep warm while dominating the arena.",
      price: "249₹",
      category: "Funky-shirt",
    },
    
  ];

  const handleCardClick = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
    setActiveImageIndex(0);
  };


  const handleAddToCartClick = (e, product) => {
    e.stopPropagation();
    const cartItem = {
      title: product.title,
      price: product.price,
      quantity: 1,
      image: product.images[0],
      category: product.category,
    };
    addToCart(cartItem);
  
    setShowAddedMessage(`${product.title} added to cart!`);
    setTimeout(() => {
      setShowAddedMessage('');
    }, 2000);
  };
  

  const handleWriteReviewClick = (index) => {
    setSelectedProductIndex(index);
    setShowReviewBox(true);
  };

  const handleReviewSubmit = () => {
    setReviews({
      ...reviews,
      [selectedProductIndex]: currentReview,
    });
    setShowReviewBox(false);
    setCurrentReview('');
    alert("We Received Something!!! Oops It's your REVIEW");
  };

  const handleSuggestionClick = (index) => {
    productRefs.current[index].scrollIntoView({ behavior: "smooth", block: "center" });
    setHighlightedIndex(index);
    
    setTimeout(() => {
      setFlippedIndex(index);
    }, 500);

    setTimeout(() => {
      setHighlightedIndex(null);
    }, 1500);
  };

  const getSuggestions = (currentCategory) => {
    return itemInfoData
      .filter((item) => item.category === currentCategory)
      .filter((item, i) => i !== flippedIndex)
      .map((item, i) => {
        const suggestedIndex = itemInfoData.findIndex((data) => data.title === item.title);
        return (
          <img
            key={i}
            src={item.images[0]}
            alt={item.title}
            className="suggestion-icon"
            onClick={() => handleSuggestionClick(suggestedIndex)}
          />
        );
      });
  };

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading"><h1>Merchandise</h1></p>
      </div>
      <div className="work-section-bottom">
        {itemInfoData.map((data, index) => (
          <div
            className={`work-section-info ${flippedIndex === index ? "flipped enlarged" : ""} ${highlightedIndex === index ? "highlighted" : ""}`}
            key={data.title}
            onClick={() => handleCardClick(index)}
            ref={(el) => (productRefs.current[index] = el)}
          >
            <div className="info-boxes-img-container">
              <img src={data.images[0]} alt={data.title} className="main-image" />
            </div>
            {flippedIndex !== index ? (
              <>
                <h2>{data.title}</h2>
                <p>{data.textFront}</p>
                <div className="button-price-container">
                  <button
                    className="info-button"
                    onClick={(e) => handleAddToCartClick(e, data)}
                  >
                    Add to Cart
                  </button>
                  <span className="price-tag">{data.price}</span>
                </div>
              </>
            ) : (
              <div className="flipped-content">
                <div className="product-images">
                  <img
                    src={data.images[activeImageIndex]}
                    alt={`product-${activeImageIndex}`}
                    className="small-image"
                  />
                  <div className="navigation-dots">
                    {data.images.map((_, i) => (
                      <span
                        key={i}
                        className={`dot ${i === activeImageIndex ? "active" : ""}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex(i);
                        }}
                      />
                    ))}
                  </div>
                </div>
                <p>{data.textBack}</p>
                <div className="button-container-back">
                  <button
                    className="info-button"
                    onClick={(e) => handleAddToCartClick(e, data)}
                  >
                    Add to Cart
                  </button>
                  <button className="info-button" onClick={() => handleWriteReviewClick(index)}>
                    Write Review
                  </button>
                </div>
                {reviews[index] && (
                  <div className="review-section">
                    <p><strong>Review:</strong> {reviews[index]}</p>
                  </div>
                )}
                <div className="suggestions">
                  <p>Suggestions:</p>
                  <div className="suggestion-icons">{getSuggestions(data.category)}</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {showReviewBox && (
        <div className="review-dialog">
          <button className="close-button" onClick={() => setShowReviewBox(false)}>
            X
          </button>
          <h3>Write a Review</h3>
          <textarea
            placeholder="Write a review"
            value={currentReview}
            onChange={(e) => setCurrentReview(e.target.value)}
          />
          <button className="submit-review-button" onClick={handleReviewSubmit}>
            Submit Review
          </button>
          <button className="cancel-review-button" onClick={() => setShowReviewBox(false)}>
            Cancel
          </button>
        </div>
      )}

      {showAddedMessage && (
        <div className="added-to-cart-message">
          Added to Cart
        </div>
      )}
    </div>
  );
};

export default Work;