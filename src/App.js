import React, { useRef } from 'react'; 
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from './Components/Navbar'; 
// import ShoppingCart from "./Components/ShoppingCart";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);


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
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={workRef}>
        <Work />
      </div>
      <div ref={testimonialsRef}>
        <Testimonial />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;