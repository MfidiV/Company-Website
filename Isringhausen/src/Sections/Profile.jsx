import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import image01 from '../assets/Photos/NTS 2 ISRI-Seat.jpg';
import image02 from "../assets/Photos/ISRI AIR SEAT.jpg";
import image03 from "../assets/Photos/ISRI bUS.jpg";
import { Carousel } from "react-bootstrap";

const Profile = () => {
  return (
    <div className="profile">
      <div className="Heading">
    <h1>
      Company
      <span className="SpanText"> Profile</span>
    </h1>
  </div>

      <div className="profileContainer container">
        <div className="row">
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
          <div className="col-md-6 Information d-flex align-items-center justify-content-center">
            <div>
              <p>
              ISRINGHAUSEN – a company of the AUNDE Group – is the global market leader in the development and production of innovative seating systems and technical springs.

ISRINGHAUSEN owns 52 plants in 20 countries for the production of driver, passenger and rear passenger seats for trucks, vans, buses and off-road vehicles.

ISRINGHAUSEN products are custom developed for the widest variety of demands and are characterized by reliability, durability and the highest quality.

ISRINGHAUSEN offers its customers comprehensive service, from the product idea, exclusive design, styling and development to prototyping and series production. Partners are supplied from plants with optimal production depth, individual JIT/JIS service and a worldwide presence. Commercial vehicle industry leaders are among our customers, such as:

CATERPILLAR, DAF, DAIMLER AG, FAW, FIAT, HINO, ISUZU, IVECO, JCB, KOMATSU, LIEBHERR, MAN, MITSUBISHI, NAVISTAR, PACCAR, RENAULT, SCANIA, TATA, VOLKSWAGEN, VOLVO

ISRINGHAUSEN's tight network of strategically placed domestic and foreign dealers guarantees professional and local retrofitting.
              </p>

              <p>
                Nullam sit amet tortor nulla. Donec sed metus urna. Cras fringilla
                purus sed enim tristique, in tristique libero fermentum. Integer
                non mi non sapien tristique vehicula nec at libero. Ut id leo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
