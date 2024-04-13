import React, { useState } from 'react';
import { Link } from "react-scroll";
// import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import Logo from '../../assets/Logo/Logo.png';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const history = useHistory(); // Get the history object from react-router-dom

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to navigate to the Events page
  // const navigateToEventsPage = () => {
  //   history.push('/events'); // Navigate to the /events route
  //   setIsMenuOpen(false); // Close the menu
  // };

  // Function to handle click on navigation links
  const handleNavLinkClick = () => {
    setIsMenuOpen(false); // Hide the menu when a navigation link is clicked
  };

  return (
    <header id="header" className="header d-flex align-items-center bg-light sticky-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between flex-row">
        <a href="index.html" className=" container logo d-flex align-items-center text-decoration-none">
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
                Home
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
                About
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
                Products
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#contact" >
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team" onClick={handleNavLinkClick}>
                Team
              </a>
            </li> */}
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
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* .navbar */}
        {/* Toggle button for mobile navigation */}
        <button className="mobile-nav-toggle btn btn-outline-dark d-block d-md-none" type="button" onClick={toggleMenu}>
          {isMenuOpen ? <span>&#10006;</span> : <span>&#9776;</span>}
        </button>
      </div>
    </header>
  );
}

export default Header;
