import React, { useEffect, useState } from "react";
import axios from "axios";
import './Home.css';
import { Link } from "react-router-dom";
import B_URL from '../Services/Api';

const HomePage = () => {
  const [exoplanets, setExoplanets] = useState([]);

  // Fetch exoplanet data from NASA API
  useEffect(() => {
    const fetchExoplanets = async () => {
      try {
        const response = await axios.get(
          // 'http://127.0.0.1:8000/api/exoplanets/'
          `${B_URL}/api/exoplanets/`
      
        );
        console.log("Fetched Exoplanets Data: ", response.data); // Debugging to ensure data is received
        setExoplanets(response.data.slice(0, 10)); // Limit to first 10 exoplanets for demo purposes
      } catch (error) {
        console.error("Error fetching exoplanets: ", error);
      }
    };

    fetchExoplanets();
  }, []);

  return (
    <div className="home-background">
      <div className="container">
        <div className="row mt-5 pt-5">
          {exoplanets.length > 0 ? (
            exoplanets.map((planet, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4" key={index}>
                <div className="card text-white">
                  {/* Use kepler_name or kepoi_name as planet name */}
                  <div className="card-body text-center">
                    <h5 className="card-title">
                      {planet.kepler_name || planet.kepoi_name || "Unnamed Planet"}
                    </h5>
                    <p>Temperature: {planet.koi_teq ? `${planet.koi_teq} K` : "Unknown"}</p>
                    <p>Orbital Period: {planet.koi_period ? `${planet.koi_period} days` : "Unknown"}</p>
                    {/* Link to individual planet page based on ID */}
                    <Link to={`/planet/${planet.kepid}`} className="btn btn-primary">
                      Learn More
                    </Link>

                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center text-white">
              <h3>Loading Exoplanets...</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
