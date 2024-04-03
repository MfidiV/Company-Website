import React from "react";
import "./distributor.css"

const DistributorDetails = () => {
  const distributors = [
    {
      name: "All-Pro Products",
      location: "Cape Town",
      province: "Western Cape",
      tel: "(021) 511-5205",
      fax: "(021) 511-5259",
      email: "all-pro(at)mweb.co.za"
    },
    {
      name: "ATA Mining Supplies",
      location: "Middelburg/Witbank",
      tel: "(013) 650 1237",      
      cel: "083 415 7474",
      email: "admin(at)ataminingsupplies.co.za"
    },
    {
      name: "Chairman",
      location: "Paarl",
      province: "Western Cape",
      tel: "(082) 874 4026",
      email: "jackie(at)the-chairman.co.za"
    },
    {
      name: "J.M. Free & Associates",
      location: "Durban",
      province: "Kwa-Zulu Natal",
      tel: "(031) 702-4545",
      fax: "(031) 702-4512",
      email: "seatsjmf(at)iburst.co.za"
    },
    {
      name: "The Seat Connection",
      location: "Johannesburg (Edenvale)",
      province: "Gauteng",
      tel: "(011) 452-6802",
      fax: "(011) 452-7103",
      email: "info(at)seatconnection.co.za"
    },
    {
      name: "Truck Seat",
      location: "Bloemfontein",
      province: "Free State",
      tel: "(051) 522-2922",
      email: "henryvw(at)vodamail.co.za"
    },
    {
      name: "Weskus Filters",
      location: "Springbok",
      province: "Northern Cape",
      tel: "(027) 718-1280",
      fax: "(027) 712-1332",
      email: "sales(at)weskusfilters.co.za"
    },
    {
      name: "M B Truck Spares",
      location: "Windhoek",
      province: "Namibia",
      tel: "264 61 234 710",
      fax: "264 61 235 401",
      email: "frank(at)mbtruckspares.com"
    },
    {
      name: "Richards Bay Autoglass and Upholsterers",
      location: "Richards Bay",
      province: "Kwazulu Natal",
      tel: "(035) 751 1015/1573",
      fax: "(035) 751 1105",
      email: "rbau(at)telkomsa.net"
    },
    {
      name: "Pro Seat",
      location: "Jet Park",
      province: "Gauteng",
      tel: "(011) 397 8731",
      fax: "(011) 397 8745",
      email: "manager(at)proseat.co.za"
    },
    {
      name: "Execu Upholsterers",
      location: "Middelburg",
      province: "Gauteng",
      tel: "(013) 246 2153",
      fax: "(013) 086 664 9820",
      email: "execuseats(at)telkomsa.net"
    },
  ];

  return (
    <div>
      <h1 className="distributor-heading">Distributor Details</h1>
      <div className="distributor-container">
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
      </div>
    </div>
  );
};

export default DistributorDetails;