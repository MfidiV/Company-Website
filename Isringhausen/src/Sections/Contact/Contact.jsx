import React from "react";
import "./contact.css";
import DistributorDetails from '../../Components/Distributors/DistributorsDetails'

const Contact = () => {
  return (
    <>
    <div className ="heading">
       <h2>Contact Us</h2>
    </div>
   
    <div className="contact-container">
    <div className="map-div">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d418.0807049667931!2d27.87660804108615!3d-33.03946516133332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e66e178b5620157%3A0x83dd16344e39357b!2sIsringhausen!5e0!3m2!1sen!2sza!4v1711609927349!5m2!1sen!2sza"
          // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.1602802684192!2d77.39638073968018!3d28.504825075835775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks%20%7C%20Coding%20Classes!5e0!3m2!1sen!2sin!4v1702963476861!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: "0", padding: "10px" }}
        ></iframe>
      </div>
      <div className="Right-div">
        <form>
          <label htmlFor="fullName">
            <i className="fa fa-solid fa-user" style={{ margin: "2px" }}></i>{" "}
            Full Name:
          </label>
          <input type="text" id="fullName" name="fullName" required />

          <label htmlFor="email">
            <i
              className="fa fa-solid fa-envelope"
              style={{ margin: "2px" }}
            ></i>{" "}
            Email Address:
          </label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="mobile">
            <i className="fa fa-solid fa-phone" style={{ margin: "2px" }}></i>{" "}
            Contact No:
          </label>
          <input type="tel" id="mobile" name="mobile" required />

          <label htmlFor="msg">
            <i className="fa fa-solid fa-comment" style={{ margin: "2px" }}></i>{" "}
            Write Message:
          </label>
          <textarea id="msg" name="msg" rows="5" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
    <DistributorDetails/>
    </>
  );
};


export default Contact;
