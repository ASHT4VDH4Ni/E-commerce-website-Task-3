
import React, { useState } from "react";
import contactus from "../Assets/Contact.png";

const Contact = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (email) {
      alert(`Thank you for your submission, ${email}!`);
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="contact-page-wrapper">
      <div className=".contact-form-container" >
        <div className="contact-background-image-container">
        <img src={contactus} alt="" />
        </div>
       <h1 className="primary-heading">Have a Question in Mind?</h1>
       <h1 className="primary-heading">Let Us Help You</h1>
       <form className="contact-form-container" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="yourlevel@gmail.com"
          required
        />
        <button type="submit" className="secondary-button">Submit</button>
       </form>
      </div>
    </div>
  );
};

export default Contact;

