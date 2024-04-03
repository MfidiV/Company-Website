import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "./profile.css"; // Import custom CSS file for styling
import image01 from '../assets/Photos/NTS 2 ISRI-Seat.jpg';
import image03 from "../assets/Photos/ISRI bUS.jpg";
import image04 from "../assets/Photos/1675414528902.jpg"

const Profile = () => {
  return (
    <div className="profile">
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
              <div>
                <p><strong>ISRINGHAUSEN</strong> – a company of the AUNDE Group – is the global market leader in the development and production of innovative seating systems and technical springs.</p>
                <ul>
                  <li>Owns 52 plants in 20 countries for the production of driver, passenger, and rear passenger seats for trucks, vans, buses, and off-road vehicles.</li>
                  <li>Products are custom developed for the widest variety of demands and are characterized by reliability, durability, and the highest quality.</li>
                  <li>Offers its customers comprehensive service, from the product idea, exclusive design, styling, and development to prototyping and series production. Partners are supplied from plants with optimal production depth, individual JIT/JIS service, and a worldwide presence. Commercial vehicle industry leaders are among our customers.</li>
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
