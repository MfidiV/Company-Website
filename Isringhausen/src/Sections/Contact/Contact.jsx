import React from "react";
import "./contact.css";
import DistributorDetails from '../../Components/Distributors/DistributorsDetails'

const Contact = () => {
  return (
    <div className="contact" id="contact">
    <div className ="heading">
       <h2>Contact Us</h2>
    </div>
   
    <div className="contact-container">
    <div className="map-div">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53055.140534510145!2d25.560121121679686!3d-33.78788529999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e64d54d9a0213db%3A0x8ea96b19569ca47f!2sCoega%20Industrial%20Development%20Zone%20(IDZ)!5e0!3m2!1sen!2sza!4v1712855782464!5m2!1sen!2sza" 
    width="100%" 
    height="100%" 
    style={{ border: "0", padding: "10px" }}
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
    </iframe>
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
    </div>
  );
};


export default Contact;
