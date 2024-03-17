import React from 'react';
import Logo from '../../assets/Logo/isri.gif'

function Header() {
  return (
    <header id="header" className="header d-flex align-items-center bg-light sticky-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between flex-row">
        <a href="index.html" className="logo d-flex align-items-center text-decoration-none">
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src="/Isringhausen/public/Logo.svg" alt="Logo" /> */}
          <img src={Logo}alt="Logo" />
          {/* <h1 className="text-dark">ISRi<span className="text-primary">.</span></h1> */}
        </a>
        <nav id="navbar" className="navbar">
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item"><a className="nav-link px-3" href="#hero">Home</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#events">Events</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#team">Team</a></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle px-3" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Downloads
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">General terms and Conditions</a></li>
                <li className="dropdown">
                  <a className="dropdown-item dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
            <li className="nav-item"><a className="nav-link px-3" href="#contact">Contact</a></li>
          </ul>
        </nav>
        {/* .navbar */}
        <button className="mobile-nav-toggle bi bi-list btn btn-outline-dark d-block d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"></button>
        <button className="mobile-nav-toggle bi bi-x btn btn-outline-dark d-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"></button>
      </div>
    </header>
    
  );
}

export default Header;
