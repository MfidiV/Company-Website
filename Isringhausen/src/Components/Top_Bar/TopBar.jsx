import React from 'react';
import './TopBar.css'; // Import custom CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const TopBar = () => {
  return (
    <section id="topbar" className="topbar py-2 bg-dark text-light">
      <div className=" container">
        <div className="top-b row justify-content-around align-items-center">
          <div className="col-md-6 col-lg-8 contact-info">
            <FontAwesomeIcon icon={faEnvelope} className="me-2" />
            <a href="mailto:contact@example.com" className="text-decoration-none text-light">reception@bunoseats.co.za</a>
            {/* <span className="ms-2 me-2">|</span> */}
            <div>
            <FontAwesomeIcon icon={faPhone} className="me-2" />
            <span>043 234 5678</span>
            </div>
            
          </div>
          <div className="col-md-6 col-lg-4 social-links text-md-end mt-2 mt-md-0">
            <a href="#" className="twitter text-light me-3"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="facebook text-light me-3"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" className="instagram text-light me-3"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="linkedin text-light me-3"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopBar;
