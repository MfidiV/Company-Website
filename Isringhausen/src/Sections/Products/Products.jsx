import React from "react";
import "./products.css"; // Import CSS file for styling

// Images imports
import image01 from "../../assets/Seat_Products/2021-mine-3000.png";
import image02 from "../../assets/Seat_Products/img01.jpg";
import image03 from "../../assets/Seat_Products/img02.jpg";
import image04 from "../../assets/Seat_Products/img04.jpg";
import image05 from "../../assets/Seat_Products/img12.jpg";
import image06 from "../../assets/Seat_Products/ISRI-6830KM-870-AIR-SEAT-500x749.jpg";
import image07 from "../../assets/Seat_Products/6030_880_Large.png";
import image08 from "../../assets/Seat_Products/Bus.jpg";
import image09 from "../../assets/Seat_Products/img11.jpg";
import image10 from "../../assets/Seat_Products/Bus06.jpg";
import image11 from "../../assets/Seat_Products/VOLVO-air-seat-shovel-ISRI-air-6500-500x678.jpg";


const images = [
  {
    src: image08,
    alt: "Bus.png",
    desc: "Commuter Seat 2005",
  },
  {
    src: image02,
    alt: "Commuter 2000.jpg",
    desc: "Commuter 2000 Bus Seat",
  },
  {
    src: image09,
    alt: "img11.jpg",
    desc: "Commuter",
  },
  {
    src: image04, // Reusing the same image
    alt: "img04.jpg",
    desc: "Bus commuter Seat",
  },
  {
    src: image05, // Reusing the same image
    alt: "img12.jpg",
    desc: "ISRI 6860/870 AIR-SEAT",
  },
  {
    src: image06, // Reusing the same image
    alt: "ISRI-6830KM-870-AIR-SEAT-500x749.jpg",
    desc: "ISRI 6830KM/880 AIR SEAT",
  },
  {
    src: image07, // Reusing the same image
    alt: "6030_880_Large.png",
    desc: "ISRI 6030/880 Large",
  },
  {
    src: image11, // Reusing the same image
    alt: "VOLVO-air-seat-shovel-ISRI-air-6500-500x678.jpg",
    desc: "ISRI-Air-6500 Shovel",
  },
  {
    src: image03, // Reusing the same image
    alt: "img02.jpg",
    desc: "ISRI 100/575 driver Seat",
  },{
    src: image10, // Reusing the same image
    alt: "Bus06",
    desc: "ISRI 6000/577 driver Seat",
  },
  {
    src: image01, // Reusing the same image
    alt: "2021-mine-300.jpg",
    desc: "2021-mine-300",
  },
];

const Products = () => {
  return (
    <div>
     <div className ="heading">
       <h2>Products</h2>
    </div>
      <div className="gallery-container">
        {images.map((image, index) => (
          <div className="responsive" key={index}>
            <div className="gallery">
              <a href={image.src} target="_blank" rel="noopener noreferrer">
                <img src={image.src} alt={image.alt} />
              </a>
              <div className="desc">{image.desc}</div>
            </div>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default Products;
