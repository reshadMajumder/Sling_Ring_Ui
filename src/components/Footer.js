import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3  text-white">
      <div className="container">
        <div className="row">
          {/* Footer Column 1 - About */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <h5>About Exoplanet Explorer</h5>
            <p>
              Explore the vast universe of exoplanets discovered by NASA. Get
              real-time data and insights on new discoveries and more.
            </p>
          </div>

          {/* Footer Column 2 - Links */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/explore" className="text-white">
                  Explore Exoplanets
                </a>
              </li>
              <li>
                <a href="/about" className="text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Footer Column 3 - Contact */}
          <div className="col-lg-4 col-md-12 col-sm-12 mb-4">
            <h5>Contact Us</h5>
            <p>Email: info@exoplanetexplorer.com</p>
            <p>Phone: +1 555-555-5555</p>
            <p>
              Follow us: 
              <a href="https://twitter.com/nasa" className="text-white mx-2">
                Twitter
              </a>
              |
              <a href="https://www.facebook.com/NASA" className="text-white mx-2">
                Facebook
              </a>
              |
              <a href="https://www.instagram.com/nasa" className="text-white mx-2">
                Instagram
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-3">
          <p>&copy; 2024 Exoplanet Explorer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
