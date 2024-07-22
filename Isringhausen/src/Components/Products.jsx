import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Testimonials from "../Components/Testimonials"
import "../Styles/products.css";
import image01 from "../assets/Seat_Products/office1.png";
import image02 from "../assets/Seat_Products/hom4.png";
import image03 from "../assets/Seat_Products/Office2.jpg";
import image04 from "../assets/Seat_Products/hom1.png";
import image05 from "../assets/Seat_Products/outdoor2.png";
import image06 from "../assets/Seat_Products/outdoor1.png";
import image07 from "../assets/Seat_Products/hom3.png";
import image08 from "../assets/Seat_Products/hom2.png";
import image09 from "../assets/Seat_Products/hom5.png";
import image10 from "../assets/Seat_Products/Office3.png";
import image11 from "../assets/Seat_Products/office4.png";
import image12 from "../assets/Seat_Products/foldingTable.png";


const images = [

  {
    src: image02,
    alt: "Strain Net.jpg",
    "desc": "Strain Net 001",
    "applications": ["Ideal for dining rooms and kitchen seating"],
    "features": ["High Comfort", "Ergonomic Design"],
    "options": ["Various Fabrics", "Reclining Function"]
  },
  {
    src: image08,
    alt: "Finger Shaped.png",
    'desc': "Finger Shaped 005",
   " applications": ["Perfect for living rooms, reading nooks, and lounges"],
    "features": ["Ergonomic Design", "Durable Material"],
    "options": ["Custom Upholstery", "Adjustable Headrest"],
  },
  {
    src: image09,
    alt: "Elegance Dining chair.jpg",
    desc: "Elegance Dining Chair",
    applications: ["Suited for living rooms, home theaters, and relaxation spaces"],
    features: [" Upholstered seat and backrest with high-density foam", "Solid wood legs with a walnut finish","Ergonomic design for comfort during long meals","Available in multiple colors and fabrics"],
    options: ["Single Chair", "Set of 2,4,6"],
  },
  {
    src: image04,
    alt: "Traditional pieces.jpg",
    desc: "Traditional pieces",
    applications: ["Suited for dinning area"],
    features: ["Anti-Slip Material", "Lightweight"],
    options: ["Cup Holder", "Reading Light"],
  },
  {
    src: image05,
    alt: "Patio Paradise.jpg",
    desc: "Patio Paradise",
    applications: ["Ideal for patios, balconies, and outdoor dining areas"],
    features: ["Weather-resistant", "Lightweight and stackable design"],
    options: ["Colors","Single chair","Set of 4", "Massage Function"],
  },
  {
    src: image06,
    alt: "Garden Oasis Bench.jpg",
    desc: "Garden Oasis Bench",
    applications: ["Perfect for garden settings, parks, and backyard seating"],
    features: [
      "Solid teak wood construction",
      "Durable and weather-resistant finish",
      "Easy assembly with reliable hardware",
      "Front Operated Double Locking Slides"
    ],
    options: [
      "Bench fold",
      "Removable Seats"
    ],
  },
  {
    src: image07,
    alt: "Poolside Comfort Lounger.png",
    desc: "Poolside Lounger",
    applications: ["Ideal for patios and outdoor dining areas"],
    features: ["Heavy Duty Suspension", "Wide Seat Base"],
    options: ["Gel Cushion", "Custom Embroidery"],
  },
  {
    src: image12,
    alt: "Stainless bench.jpg",
    desc: "Stainless steel bench",
    applications: ["Perfect for garden settings, parks, and backyard seating"],
    features: ["Easy assembly with stainless steel hardware", "Energy Absorption"],
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
    alt: "ErgoPro.jpg",
    desc: "ErgoPro Office Chair",
    applications: ["Ideal for office workstations and home offices"],
    features: ["Adjustable lumbar support", "Breathable mesh backrest","360-degree swivel and smooth-rolling casters","","Fixed armrests"],
    options: ["Adjustable Lumbar", "Vibration Dampening"],
  },
  {
    src: image10,
    alt: "Executive Comfort Chair.png",
    desc: "Executive Comfort Chair",
    applications: ["Perfect for executive offices and managerial seating"],
    features: ["High backrest with built-in headrest", "Premium bonded leather upholstery"],
    options: ["Waterproof Cover", "Multi-function tilt mechanism"],
  },
  {
    src: image01,
    alt: "Conference Elite Chair.jpg",
    desc: "Conference Elite Chair",
    applications: ["Suited for conference rooms and meeting spaces"],
    features: ["Padded seat for extended comfort", "360-degree swivel with smooth-rolling casters","Mid-back mesh design for optimal airflow"],
    options: ["Adjustable Headrest", "Removable Cushion"],
  },
];

const Products = () => {
  const navigate = useNavigate();

  return (
    <>
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
                  onClick={() =>
                    navigate("/SelectedImage", { state: { image } })
                  }
                />
                <div className="desc">{image.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Testimonials /> */}
    </>
  );
};

export default Products;