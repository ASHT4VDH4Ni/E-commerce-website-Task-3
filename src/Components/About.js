
import React, { useState, useRef } from "react";
import './Work.css';
import Bat from "../Assets/Bat.jpg";
import Dragon from "../Assets/Dragon.jpg";
import RichKing from "../Assets/RichKing.jpg";
import MegaKnight from "../Assets/Golden MegaKnight Statue.jpg";
import Barberian from "../Assets/golden barberian.jpg";
import Princess from "../Assets/Princess Victory globe.jpg";
import log from "../Assets/Log.jpg";
import log1 from "../Assets/log1.jpg";
import log2 from "../Assets/Log2.jpg";
import  Builder from "../Assets/Builder.jpg";
import  Builder1 from "../Assets/Builder1.jpg";
import  Builder2 from "../Assets/Builder2.jpg";
import  King from "../Assets/king globe.jpg";
import  Pekka from "../Assets/Pekka Statue.jpg";
import  Brawl from "../Assets/Brawl-Stars-Beddsheet.jpg";
import  BBdrag1 from "../Assets/Baby Dragon1.jpg";
import   BBdrag2 from "../Assets/Baby Dragon2.jpg";
import   BBdrag3 from "../Assets/Baby Dragon3.jpg";

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
      images: [log,log1 ,log2],
      title: "Log Rest",
      textFront: "From Rolling to Resting",
      textBack: "Smash your way to a good night’s sleep. Perfect for Clashers and lumberjacks alike.",
      price: "499₹",
      category: "Soft-Toy",
    },
    {
      images: [BBdrag2,BBdrag1,BBdrag3],
      title: "Dragon Cuddle",
      textFront: "So Cute, It’s Scorching!",
      textBack: "Soft, cuddly, and ready to warm your heart without the fire.",
      price: "799₹",
      category: "Soft-Toy",
    },
    {
      images: [Builder,Builder2, Builder1],
      title: "Hammer Lift",
      textFront: "Golden Hammer, Infinite Power",
      textBack: "Raise the hammer of progress with this powerful builder statue.",
      price: "19,999₹",
      category: "statue",
    },
    {
      images: [King,King,King],
      title: "King's Trophy",
      textFront: "Victory in Hand",
      textBack: "A royal globe for champions. Let your inner king shine.",
      price: "99,999₹",
      category: "Globe",
    },
    {
      images: [Princess, Princess, Princess],
      title: "Princess Globe",
      textFront: "In the Princess Globe, where dreams entwine.",
      textBack: "A beautiful globe to adorn your shelves.",
      price: "26,000₹",
      category: "Globe",
    },
    {
      images: [MegaKnight, MegaKnight, MegaKnight],
      title: "Golden MegaKnight",
      textFront: "Rule The Arena.",
      textBack: "Bring grandeur to your décor with this majestic statue.",
      price: "9,999₹",
      category: "statue",
    },
    {
      images: [Pekka,Pekka,Pekka],
      title: "Steel Power",
      textFront: "P.E.K.K.A Stands Strong",
      textBack: "Channel the might of P.E.K.K.A into your décor. Sturdy and fearless.",
      price: "8,999₹",
      category: "statue",
    },
    {
      images: [Brawl ,Brawl ,Brawl],
      title: "Brawl Sleep",
      textFront: "Battle by Day, Rest by Night",
      textBack: "Dream of victories on this epic Brawl Stars-themed bedsheet.",
      price: "4,999₹",
      category: "Bedsheet",
    },
    {
      images: [Barberian, Barberian, Barberian],
      title: "Gold Barberian",
      textFront: "The Golden Barbarian Statue is a striking piece of art.",
      textBack: "A must-have for fans of strong warrior statues.",
      price: "24,500₹",
      category: "statue",
    },
    {
      images: [Bat, Bat, Bat],
      title: "Bat",
      textFront: "Fly into style with a touch of nocturnal flair.",
      textBack: "An ideal gift for collectors of quirky keychains.",
      price: "49₹",
      category: "keychain",
    },
    {
      images: [Dragon, Dragon, Dragon],
      title: "Baby Dragon",
      textFront: "Ignite your charm with this tiny fiery friend.",
      textBack: "Perfect for those who love fantasy Keychain.",
      price: "79₹",
      category: "keychain",
    },
    {
      images: [RichKing, RichKing, RichKing],
      title: "$ Eyes",
      textFront: "Rule your accessories with a touch of bling.",
      textBack: "The perfect accessory for lovers of luxury.",
      price: "99₹",
      category: "keychain",
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
        <p className="primary-subheading"><h1>Accessories</h1></p>
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