import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <section className="Footer-container">
        <div>
          <h2 className="text-uppercase fw-bold mb-4">Company name</h2>
          <p>
            Here you can use rows and columns to organize your footer content.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
            <div data-mdb-input-init class="form-outline mb-4">
              <input type="email" placeholder="Email" id="form5Example24" class="form-control" />
             
            </div>
          </div>
          {/* Grid column */}
        </div>
        <div className="Product-container align-items-left">
          <h6 className="text-uppercase fw-bold mb-4">Products</h6>
          <p>
            <a href="#!" className="text-reset">
              Angular
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              React
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              Vue
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              Laravel
            </a>
          </p>
        </div>
        <div className="Links-container">
          <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
          <p>
            <a href="#!" className="text-reset">
              Pricing
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              Settings
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
            <i className="fas fa-home me-3"></i> New York, NY 10012, US
          </p>
          <p>
            <i className="fas fa-envelope me-3"></i> info@example.com
          </p>
          <p>
            <i className="fas fa-phone me-3"></i> + 01 234 567 88
          </p>
          <p>
            <i className="fas fa-print me-3"></i> + 01 234 567 89
          </p>
        </div>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
