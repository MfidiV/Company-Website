import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <section className="Footer-container">
        <div className="CompanyDetails">
          <h2 className="text-uppercase fw-bold mb-4">
            BUNO <span>SEAT</span>
          </h2>
          <p>
          A global market leader in the development and manufacture of innovative seating systems.
          </p>
          <div className="newsletter">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
            <div className="form-outline mb-2">
              <input type="email" placeholder="Email" id="form5Example24" className="form-control" />
            </div>
          </div>
        </div>
        <div className="Product-container">
          <h6 className="text-uppercase fw-bold mb-4">Products</h6>
          <p>
            <a href="#!" className="text-reset">
              Outdoor 
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              Indoors
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              Garden
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              Dinning Area
            </a>
          </p>
        </div>
        <div className="Links-container">
          <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
          <p>
            <a href="" className="text-reset">
              Home
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              About
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              Services
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              Help
            </a>
          </p>
        </div>
        <div className="ContactUs-container">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p>
            <i className="fas fa-home me-3"></i>Cnr Alycon & Mazibuko Str, Coega, P.E
          </p>
          <p>
            <i className="fas fa-envelope me-3"></i> reception@bunoseats.co.za
          </p>
          <p>
            <i className="fas fa-phone me-3"></i> (043)-290 9922
          </p>
          <p>
            <i className="fas fa-print me-3"></i> (043)-290 9922
          </p>
        </div>
      </section>
      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2024 Copyright@
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Mfidi Vuyolwethu
        </a>
      </div>
    </footer>
  );
}

export default Footer;
