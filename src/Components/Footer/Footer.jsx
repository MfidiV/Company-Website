import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <section className="Footer-container">
        <div className="CompanyDetails">
          <h2 className="text-uppercase fw-bold mb-4">BUNO <span>SEAT</span></h2>
          <p>
          A global market leader in the development and manufacture of 
          innovative seating systems for commercial vehicles as well as technical springs.
          </p>
          {/* Grid column */}
          <div class="col-auto">
            <p class="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div class="col-md-5 col-12">
            {/* Email input */}
            <div data-mdb-input-init class="form-outline mb-2">
              <input type="email" placeholder="Email" id="form5Example24" class="form-control" />
             
            </div>
          </div>
          {/* Grid column */}
        </div>
        <div className="Product-container align-items-left">
          <h6 className="text-uppercase fw-bold mb-4">Products</h6>
          <p>
            <a href="#!" className="text-reset">
              Truck Seats
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              Bus Seats
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              Commercial
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              Heavy Construction
            </a>
          </p>
        </div>
        <div className="Links-container">
          <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
          <p>
            <a href="#!" className="text-reset">
              Home
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              About Company
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              Orders
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
            <i className="fas fa-home me-3"></i>Cnr Alycon&Mazibuko Str,Coega ,P.E
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
      <div
        className=" m-2 text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Mfidi Vuyolwethu
        </a>
      </div>
    </footer>
  );
}

export default Footer;
