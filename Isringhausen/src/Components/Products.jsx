import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/Styles/products.css";
import image01 from "../assets/Seat_Products/2021-mine-3000.png";
import image02 from "../assets/Seat_Products/img01.jpg";
import image03 from "../assets/Seat_Products/img02.jpg";
import image04 from "../assets/Seat_Products/img04.jpg";
import image05 from "../assets/Seat_Products/img12.jpg";
import image06 from "../assets/Seat_Products/ISRI-6830KM-870-AIR-SEAT-500x749.jpg";
import image07 from "../assets/Seat_Products/6030_880_Large.png";
import image08 from "../assets/Seat_Products/Bus.jpg";
import image09 from "../assets/Seat_Products/img11.jpg";
import image10 from "../assets/Seat_Products/Bus06.jpg";
import image11 from "../assets/Seat_Products/VOLVO-air-seat-shovel-ISRI-air-6500-500x678.jpg";
import image12 from "../assets/Seat_Products/csm_tabbar_lkw_418d154521.jpg";

const images = [
  {
    src: image08,
    alt: "Bus.png",
    desc: "Commuter Seat 2005",
    applications: ["Bus", "Public Transport"],
    features: ["Ergonomic Design", "Durable Material"],
    options: ["Custom Upholstery", "Adjustable Headrest"],
  },
  {
    src: image02,
    alt: "Commuter 2000.jpg",
    desc: "Commuter 2000 Bus Seat",
    applications: ["Bus", "Shuttle"],
    features: ["High Durability", "Comfort Padding"],
    options: ["Various Colors", "Armrests"],
  },
  {
    src: image09,
    alt: "img11.jpg",
    desc: "Commuter",
    applications: ["Commuter Vehicles"],
    features: ["Reclining Mechanism", "Adjustable Height"],
    options: ["Leather Upholstery", "Integrated Seatbelt"],
  },
  {
    src: image04,
    alt: "img04.jpg",
    desc: "Bus commuter Seat",
    applications: ["Bus"],
    features: ["Anti-Slip Material", "Lightweight"],
    options: ["Cup Holder", "Reading Light"],
  },
  {
    src: image05,
    alt: "img12.jpg",
    desc: "ISRI 6860/870 AIR-SEAT",
    applications: ["Trucks", "Construction Vehicles"],
    features: ["Air Suspension", "Adjustable Armrests"],
    options: ["Heated Seat", "Massage Function"],
  },
  {
    src: image06,
    alt: "ISRI-6830KM-870-AIR-SEAT-500x749.jpg",
    desc: "ISRI 6830KM/880 AIR SEAT",
    applications: ["Truck Driver Seat"],
    features: [
      "Backrest Reclining Mechanism",
      "Seat Height & Slope Adjustment",
      "Suspension Dust Cover",
      "Front Operated Double Locking Slides"
    ],
    options: [
      "Style of Backrest – 575, 577",
      "2 Point Safety Lap Belt",
      "RH or LH Operating Handles",
      "Adjustable Armrests",
      "Headrest",
      "Cloth or Vinyl Upholstery (Local & Imported)",
      "ABS Backing",
      "Turntable",
      "Side operated Reinforced slides"
    ],
  },
  {
    src: image07,
    alt: "6030_880_Large.png",
    desc: "ISRI 6030/880 Large",
    applications: ["Heavy Duty Trucks"],
    features: ["Heavy Duty Suspension", "Wide Seat Base"],
    options: ["Gel Cushion", "Custom Embroidery"],
  },
  {
    src: image12,
    alt: "Isri_NTS2.jpg",
    desc: "NTS-2 6860kM/870",
    applications: ["Commercial Vehicles"],
    features: ["Compact Design", "Energy Absorption"],
    options: ["Cooling System", "Integrated Speakers"],
  },
  {
    src: image11,
    alt: "VOLVO-air-seat-shovel-ISRI-air-6500-500x678.jpg",
    desc: "ISRI-Air-6500 Shovel",
    applications: ["Construction Equipment"],
    features: ["Enhanced Cushioning", "Sturdy Frame"],
    options: ["Waterproof Cover", "Lumbar Support"],
  },
  {
    src: image03,
    alt: "img02.jpg",
    desc: "ISRI 100/575 driver Seat",
    applications: ["Trucks"],
    features: ["Basic Suspension", "Ergonomic Shape"],
    options: ["Adjustable Lumbar", "Vibration Dampening"],
  },
  {
    src: image10,
    alt: "Bus06",
    desc: "ISRI 6000/577 driver Seat",
    applications: ["Buses"],
    features: ["High Backrest", "Adjustable Armrests"],
    options: ["Integrated Controls", "Memory Foam"],
  },
  {
    src: image01,
    alt: "2021-mine-300.jpg",
    desc: "2021-mine-300",
    applications: ["Mining Vehicles"],
    features: ["Heavy Duty Build", "Enhanced Safety"],
    options: ["Adjustable Headrest", "Removable Cushion"],
  },
];

const Products = () => {
  const navigate = useNavigate();


  return (
    <div className="products" id="products">
      <div className="heading">
        <h2>Products</h2>
      </div>
      <div className="gallery-container">
        {images.map((image, index) => (
          <div className="responsive" key={index}>
            <div className="gallery">
              <img
                src={image.src}
                alt={image.alt}
                onClick={() => navigate("/SelectedImage", { state: { image } })}
              />
              <div className="desc">{image.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
