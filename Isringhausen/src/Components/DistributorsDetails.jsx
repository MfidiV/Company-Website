import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/distributor.css";


const DistributorDetails = () => {
  const [distributors] = useState([
    {
      name: "Elite Seating",
      location: "Cape Town",
      province: "Western Cape",
      tel: "(021) 500-5111",
      fax: "(021) 511-5259",
      email: "vicky@Telkom.co.za"
    },
    {
      name: "Comfort Crafts",
      location: "Witbank",
      tel: "(013) 278 9898",      
      cel: "083 278 9898",
      email: "admin@comfycrafts.co.za"
    },
    {
      name: "Prime Seating ",
      location: "Durbanville",
      province: "Western Cape",
      tel: "(082) 123 4567",
      email: "admin@primeseating .co.za"
    },
    {
      name: "Summit Seat",
      location: "Durban",
      province: "Kwa-Zulu Natal",
      tel: "(031) 123 4567",
      fax: "(031) 123 8765",
      email: "admins@telkom.co.za"
    },
    {
      name: "Optimum Seating",
      location: "Johannesburg",
      province: "Gauteng",
      tel: "(011) 452-0000",
      fax: "(011) 452-0000",
      email: "info@optimum.co.za"
    },
    {
      name: "Mayivuthelwe",
      location: "Bloemfontein",
      province: "Free State",
      tel: "(051) 000 1234",
      email: "abongile@gmail.co.za"
    },
    {
      name: "Bongie & Shaun ",
      location: "Bellvile",
      province: "Western Cape",
      tel: "(021) 999-3220",
      fax: "(021) 999-3220",
      email: "sales@bsdist.co.za"
    },
    {
      name: "Wesley Spares",
      location: "Windhoek",
      province: "Namibia",
      tel: "098 76 786 666",
      fax:  "098 76 786 666",
      email: "wesley@telkom.com"
    },
    {
      name: "T'dos and X",
      location: "East London",
      province: "Esatern Cape",
      tel: "(043) 222 4532",
      fax: "(043) 751 1105",
      email: "majita@telkom.net"
    },
    {
      name: "Luxe Lounge",
      location: "Jet Park",
      province: "Gauteng",
      tel: "(011) 111 6576",
      fax: "(011) 111 6576",
      email: "reception@luxelounge.com"
    },
    {
      name: "Premium Comfort ",
      location: "Middelburg",
      province: "Gauteng",
      tel: "(013) 604 9820",
      fax: "(013) 604 9820",
      email: "premium@telkomsa.net"
    },
  ]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
     slidesToShow: 4,
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // pauseOnHover: true,
    // pauseOnFocus: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "0px",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h1 className="heading">Our trusted distributors</h1>
      <div className="slideshow-container">
        <Slider {...settings}>
          {distributors.map((distributor, index) => (
            <div className="distributor-card" key={index}>
              <h2 className="distributor-name">{distributor.name}</h2>
              <div className="details">
                <p><strong>Location:</strong> {distributor.location}</p>
                <p><strong>Tel:</strong> {distributor.tel}</p>
                <p><strong>Email:</strong> {distributor.email}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DistributorDetails;