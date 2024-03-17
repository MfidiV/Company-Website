import React from 'react';
import './Home.css'; // Import CSS file for component-specific styles
import heroImage from '../../assets/Landing/IsringBuilding.jpg'; // Import the image file
import IconBox from '../../Components/IconBox';

function Home() {
  return (
    <>
      <section id="hero" className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="container position-relative">
          <div className="row gy-5" data-aos="fade-in">
            <div className=" HeroText col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
              <h2>Innovative Seating <br></br> Systems</h2>
              <div className="line"></div> {/* Straight line element */}
              <p>We are one of the leading specialists for seating systems and technical springs within the automotive and commercial vehicle industries.</p>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a href="#about" className="btn-get-started">Get Started</a>
                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <IconBox />
    </>
  );
}

export default Home;
