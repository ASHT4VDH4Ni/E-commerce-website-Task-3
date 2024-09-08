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
  // Create references for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to handle scrolling to a section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };



  return (
    <div className="App">
      {/* Render Navbar once */}
      <Navbar 
        scrollToSection={scrollToSection} 
        homeRef={homeRef} 
        aboutRef={aboutRef} 
        workRef={workRef} 
        testimonialsRef={testimonialsRef} 
        contactRef={contactRef} 
      />

      {/* Components with their respective refs */}
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