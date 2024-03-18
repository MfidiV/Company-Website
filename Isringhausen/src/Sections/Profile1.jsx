import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import image01 from '../assets/Photos/NTS 2 ISRI-Seat.jpg';
import image02 from "../assets/Photos/ISRI AIR SEAT.jpg";
import image03 from "../assets/Photos/ISRI bUS.jpg";
import { Carousel } from "react-bootstrap";

const Profile1 = () => {
  return (
    <div className="profileContainer container"> {/* Opening tag added */}
      <div className="row">
        <div className="col-md-6 Information d-flex align-items-center justify-content-center">
          <div>
            <p>
            The Integrated Management System (IMS) is process-oriented.<br/>
            It integrates the individual management systems of the group, the scope of this operation being enhanced by the factoring in of customer requirements, pertinent legislation and industrial standards.

            The modular structure serves to heighten the degree of transparency.<br/>
            The system’s versatility makes it possible to adapt to future requirements.<br/>

            <strong>Our Integrated Management System includes:</strong>
            
            <ul>
                <li>  IATF 16949    	Quality management system automotive industry</li>
                <li> ISO 14001	Environmental management system </li>
                <li> OHSAS 18001	Health & safety management system </li>
                <li>  ISO 50001	Energy management system</li>
            </ul>
           
           
           
          
        
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <Carousel
            className="mt-4"
            interval={4000}
            pause={false}
            indicators={true}
            fade={true}
            slide={false}
            style={{ height: "100%" }}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image01}
                alt="First slide"
                style={{ height: "500px", objectFit: "cover" }} // Set fixed height for all images
              />
              <Carousel.Caption>
                <h3>NTS 6860/870 RH</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image02}
                alt="Second slide"
                style={{ height: "500px", objectFit: "cover" }} // Set fixed height for all images
              />
              <Carousel.Caption>
                <h3>ISRI 6000/870 LH</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image03}
                alt="Third slide"
                style={{ height: "500px", objectFit: "cover" }} // Set fixed height for all images
              />
              <Carousel.Caption>
                <h3>BUS SEATS</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Profile1;
