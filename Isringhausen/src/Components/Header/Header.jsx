import React, { useState } from 'react';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBoxOpen, faCalendar, faConciergeBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/Logo/Logo.png';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header id="header" className="header d-flex align-items-center bg-light sticky-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between flex-row">
        <a href="index.html" className="container logo d-flex align-items-center text-decoration-none">
          <img src={Logo} alt="Logo" />
        </a>
        <nav id="navbar" className={`navbar ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-70}
                duration={0}
                onClick={handleNavLinkClick}
              >
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="profile"
                spy={true}
                smooth={true}
                offset={-70}
                duration={0}
                onClick={handleNavLinkClick}
              >
                <FontAwesomeIcon icon={faUser} /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={0}
                onClick={handleNavLinkClick}
              >
                <FontAwesomeIcon icon={faConciergeBell} /> Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="products"
                spy={true}
                smooth={true}
                offset={-70}
                duration={0}
                onClick={handleNavLinkClick}
              >
                <FontAwesomeIcon icon={faBoxOpen} /> Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="events"
                spy={true}
                smooth={true}
                offset={-70}
                duration={0}
                onClick={handleNavLinkClick}
              >
                <FontAwesomeIcon icon={faCalendar} /> Blogs/Events
              </Link>
            </li>
            
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={0}
                onClick={handleNavLinkClick}
              >
                <FontAwesomeIcon icon={faEnvelope} /> Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button className="mobile-nav-toggle btn btn-outline-dark d-block d-md-none" type="button" onClick={toggleMenu}>
          {isMenuOpen ? <span>&#10006;</span> : <span>&#9776;</span>}
        </button>
      </div>
    </header>
  );
}

export default Header;
