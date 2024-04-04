import React, { useState } from 'react';
import Logo from '../../assets/Logo/isri.gif';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="header" className="header d-flex align-items-center bg-light sticky-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between flex-row">
        <a href="index.html" className="logo d-flex align-items-center text-decoration-none">
          <img src={Logo} alt="Logo" />
        </a>
        <nav id="navbar" className={`navbar ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link px-3" href="#hero">Home</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#events">Events</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#team">Team</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#contact">Contact</a></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle px-3" href="#" id="navbarDropdown" role="button" >
                Downloads
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">General terms and Conditions</a></li>
                <li className="dropdown">
                  <a className="dropdown-item dropdown-toggle" href="#" id="navbarDropdown2" role="button">
                    Deep Drop Down
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <li><a className="dropdown-item" href="#">General Terms and Conditions for Purchasing</a></li>
                    <li><a className="dropdown-item" href="#">Deep Drop Down 2</a></li>
                    <li><a className="dropdown-item" href="#">Deep Drop Down 3</a></li>
                    <li><a className="dropdown-item" href="#">Deep Drop Down 4</a></li>
                    <li><a className="dropdown-item" href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a className="dropdown-item" href="#">Drop Down 2</a></li>
                <li><a className="dropdown-item" href="#">Drop Down 3</a></li>
                <li><a className="dropdown-item" href="#">Drop Down 4</a></li>
              </ul>
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
