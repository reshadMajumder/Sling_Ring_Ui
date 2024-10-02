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
                <a href="/streaming" className="text-white">
                  Streaming
                </a>
              </li>
              <li>
                <a href="/comunity" className="text-white">
                Comunity
                </a>
              </li>
            </ul>
          </div>

          {/* Footer Column 3 - Contact */}
          <div className="col-lg-4 col-md-12 col-sm-12 mb-4">
            <h5>Contact Us</h5>
            <p>Team Exoverse</p>

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
