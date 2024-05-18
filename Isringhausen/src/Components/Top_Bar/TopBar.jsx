import React from 'react';
import './TopBar.css'; // Import custom CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // Import specific icons from FontAwesome
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import social media icons from FontAwesome

const TopBar = () => {
  return (
    <section id="topbar" className="topbar py-2 bg-dark text-light">
      <div className="container">
        <div className="contain row justify-content-around align-items-center">
          
          {/* Contact Information */}
          <div className="col-md-6 col-lg-8 contact-info d-flex align-items-center">
            <div className="d-flex align-items-center me-3">
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              <a href="mailto:reception@bunoseats.co.za" className="text-decoration-none text-light">reception@bunoseats.co.za</a>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faPhone} className="me-2" />
              <span>043 234 5678</span>
            </div>
          </div>
          
          {/* Social Media Links */}
          <div className="col-md-6 col-lg-4 social-links text-md-end mt-2 mt-md-0">
            <a href="https://www.twitter.com" className="twitter text-light me-3"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.facebook.com" className="facebook text-light me-3"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.instagram.com" className="instagram text-light me-3"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.linkedin.com" className="linkedin text-light"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopBar;
