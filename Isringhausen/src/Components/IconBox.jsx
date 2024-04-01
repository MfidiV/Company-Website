import React from 'react';
import aunde from '../assets/Logo/aunde.jpg';
import fehrer from '../assets/Logo/fehrer.jpg';
import isrilogo from '../assets/Logo/isri.gif';

function IconBox() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div className="icon-box">
            <div className="icon"><i className="bi bi-easel"></i></div>
            <img src={aunde} alt="Logo" />
            <h4 className="title"><a href="#" className="stretched-link">AUNDE</a></h4>
            <p className="description">Surface Technologies</p>
          </div>
        </div>
        <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div className="icon-box">
            <div className="icon"><i className="bi bi-geo-alt"></i></div>
            <img src={isrilogo} alt="Logo" />
            <h4 className="title"><a href="#" className="stretched-link">ISRINGHAUSEN</a></h4>
            <p className="description">Seating Systems</p>
          </div>
        </div>
        <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
          <div className="icon-box">
            <div className="icon"><i className="bi bi-command"></i></div>
            <img src={fehrer} alt="Logo" /><br/>
            <h4 className="title"><a href="#" className="stretched-link">FEHRER</a></h4>
            <p className="description">Interior modules</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IconBox;
