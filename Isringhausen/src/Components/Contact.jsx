import React, { useState } from "react";
import "../Styles/contact.css";
import DistributorDetails from "./DistributorsDetails";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    msg: ""
  });
  const [error, setError] = useState("");

  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(""); // Clear error message when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationMessage = validateForm();
    console.log("Validation Message:", validationMessage);
    if (validationMessage === true) {
      // Perform your form submission logic here
      setModalContent("Success");
      setIsModalOpen(true);
    } else {
      setError(validationMessage); // Set error message
      setModalContent(validationMessage); // Set modal content to the error message
      setIsModalOpen(true); // Open modal to show error message
    }
  };
  
  const validateForm = () => {
    const { fullName, email, mobile } = formData;

    if (!fullName || !email || !mobile) {
      return "All fields must be filled.";
    }

    const fullNameRegex = /^[A-Za-z\s]+$/;
    if (!fullNameRegex.test(fullName) || fullName.length < 3) {
      return "Full name must not contain digits and must be at least 3 characters.";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return "Email entered is wrong.";
    }

    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
      return "Contact must contain 10 digits.";
    }

    // No errors, form is valid
    return true;
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setError(null); // Clear error message
    setModalContent(null);
  };

  return (
    <div className="contact" id="contact">
      <div className="heading">
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
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">
              Full Name:
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                
              />
            </label>

            <label htmlFor="email">
              Email Address:
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              
              />
            </label>

            <label htmlFor="mobile">
              Contact No:
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                
              />
            </label>

            <label htmlFor="msg">
              Write Message:
              <textarea
                id="msg"
                name="msg"
                value={formData.msg}
                onChange={handleChange}
                rows="5"
              ></textarea>
            </label>

            <button type="submit">Send</button>
          </form>
          {error && <p className="error">{error}</p>}
        </div>
      </div>
      {/* <DistributorDetails /> */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
