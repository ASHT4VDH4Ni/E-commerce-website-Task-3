
import React, { useState, useRef } from 'react';
import "./App.css";
import Home from "./Components/Home";
import Work from "./Components/Work";
import About from "./Components/About";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from './Components/Navbar';
import ShoppingCart from './Components/ShoppingCart';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);


  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);


  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {

      const itemIndex = prevItems.findIndex((item) => item.title === product.title);
      if (itemIndex !== -1) {

        const updatedItems = [...prevItems];
        if (updatedItems[itemIndex].quantity < 3) {
          updatedItems[itemIndex].quantity += 1;
        }
        return updatedItems;
      } else {

        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    console.log(cartItems);
  };


  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Navbar
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        workRef={workRef}
        testimonialsRef={testimonialsRef}
        contactRef={contactRef}
      />

      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={workRef}>
        <Work addToCart={handleAddToCart} />
      </div>
      <div ref={aboutRef}>
        <About addToCart={handleAddToCart} />
      </div>
      <div ref={testimonialsRef}>
        <Testimonial />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />

      <ShoppingCart
        openCart={isCartOpen}
        toggleCart={toggleCart}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </div>
  );
}

export default App;
