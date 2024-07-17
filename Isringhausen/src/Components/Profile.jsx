import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "../Styles/profile.css"; // Import custom CSS file for styling
import image01 from '../assets/Photos/NTS 2 ISRI-Seat.jpg';
import image03 from "../assets/Photos/ISRI bUS.jpg";
import image04 from "../assets/Photos/1675414528902.jpg"

const Profile = () => {
  return (
    <div className="profile" id="profile">
      <div className="heading">
        <h1>Company <span className="span-text">Profile</span></h1>
      </div>

      <div className="profile-container container">
        <div className="row">
          <div className="Image-Carousel col-md-6">
          <Carousel interval={5000} pause={false} indicators={true} fade={true} slide={false}>
                  <Carousel.Item>
                    <img className="d-block w-100" src={image04} alt="First slide" style={{ height: "500px", objectFit: "cover" }} />
                    <Carousel.Caption>
                      <h3>Mfidi</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  
                  <Carousel.Item>
                    <img className="d-block w-100" src={image03} alt="Third slide" style={{ height: "500px", objectFit: "cover" }} />
                    <Carousel.Caption>
                      <h3>BUS SEATS</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block w-100" src={image01} alt="Fourth slide" style={{ height: "500px", objectFit: "cover" }} />
                    <Carousel.Caption>
                      <h3>Driver Seats</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
          </div>
          <div className="col-md-6 information">
            <div className="d-flex align-items-center justify-content-center">
              <div className="comp-profile">
                <p><strong>Buno Seats Pty(Ltd)</strong> a member of the Global Seating Group, is a leading provider in the design and manufacturing of high-quality seating solutions.</p>
                <ul>
                  <li>15 manufacturing facilities across 10 countries, we specialize in crafting seats for a diverse range of vehicles, including cars, trucks, buses, and specialized equipment.</li>
                  <li>Our products are tailored to meet a variety of customer needs, renowned for their reliability, durability, and exceptional quality.</li>
                  <li>We offer a full spectrum of services, from initial concept and exclusive design to prototyping and mass production, ensuring our customers receive comprehensive support throughout the entire development process.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Profile;
