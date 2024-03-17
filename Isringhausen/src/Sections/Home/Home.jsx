import React from 'react';
import './Home.css'; // Import CSS file for component-specific styles
import heroImage from '../../assets/Landing/IsringBuilding.jpg'; // Import the image file

import aunde from'../../assets/Logo/aunde.jpg'
import fehrer from '../../assets/Logo/fehrer.jpg'
import isrilogo from '../../assets/Logo/isri.gif'

function Home() {
  return (
    <section id="hero" className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="container position-relative">
        <div className="row gy-5" data-aos="fade-in">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
            <h2>Innovative seating systems <span>Impact</span></h2>
            <p>We are one of the leading specialists for seating systems and technical springs within the automotive and commercial vehicle industries.</p>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <a href="#about" className="btn-get-started">Get Started</a>
              <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
            </div>
          </div>
         
        </div>
      </div>

      <div className="icon-boxes position-relative align-items-center justify-content-between">
        <div className="container position-relative mt-10">
          <div className="row gy-4 mt-4">
            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-easel"></i></div>
                <img src={aunde}alt="Logo" />
                <h4 className="title"><a href="#" className="stretched-link">AUNDE</a></h4>   
                <p className="description">Surface Technologies</p>
              </div>
            </div>

          

            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-geo-alt"></i></div>
                <img src={isrilogo}alt="Logo" />
                <h4 className="title"><a href="#" className="stretched-link">ISRINGHAUSEN</a></h4>
                <p className="description">Seating Systems</p>
              </div>
            </div>

            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-command"></i></div>
                <img src={fehrer}alt="Logo" />
                <h4 className="title"><a href="#" className="stretched-link">FEHRER</a></h4>
                <p className="description">Interior modules</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
