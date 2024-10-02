import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Chat from '../components/Chat'; // Import the Chat component

const PlanetDetails = () => {
    const { id } = useParams(); // Get planet ID from URL
    const [planet, setPlanet] = useState(null); // State to store planet data
    const [loading, setLoading] = useState(true); // New state for loading

    useEffect(() => {
        const fetchPlanetDetails = async () => {
            try {
                setLoading(true); // Set loading to true before fetching
                const response = await axios.get(
                    'http://127.0.0.1:8000/api/exoplanets/'
                );
                // Filter for the selected planet by its kepid
                const selectedPlanet = response.data.find(p => p.kepid === parseInt(id));
                setPlanet(selectedPlanet); // Save the selected planet data in state
            } catch (error) {
                console.error("Error fetching planet details: ", error);
            } finally {
                setLoading(false); // Set loading to false after fetching (success or error)
            }
        };

        fetchPlanetDetails();
    }, [id]); // Fetch the details when the component mounts or the ID changes

    if (loading) {
        return (
            <div className="home-background" >
                <h3>Loading Planet Details...</h3>
            </div>
        ); // Loading state
    }

    if (!planet) {
        return (
            <div className="home-background" >
                <h3>Loading Planet not found...</h3>
            </div>
        ); // No planet found state
    }

    // Display structured information
    return (
        <div className="home-background" >
            <div className="container mt-5 d-flex">
                <div className="row justify-content-center">
                <div className="details-container">
                    <h1>Exoplanet Details: {planet.kepler_name || planet.kepoi_name}</h1>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Kepler Name: {planet.kepler_name || "Unknown"}</h5>
                            <p><strong>Kepid:</strong> {planet.kepid}</p>
                            <p><strong>Temperature (Teq):</strong> {planet.koi_teq ? `${planet.koi_teq} K` : "Unknown"}</p>
                            <p><strong>Orbital Period:</strong> {planet.koi_period ? `${planet.koi_period} days` : "Unknown"}</p>
                            <p><strong>Radius:</strong> {planet.koi_prad ? `${planet.koi_prad} Earth radii` : "Unknown"}</p>
                            <p><strong>Stellar Temperature:</strong> {planet.koi_steff ? `${planet.koi_steff} K` : "Unknown"}</p>
                            <p><strong>Orbital Impact Parameter:</strong> {planet.koi_impact || "Unknown"}</p>
                            <p><strong>Orbital Depth:</strong> {planet.koi_depth || "Unknown"}</p>
                        </div>
                    </div>
                </div>
                </div>
                {/* Render Chat Component */}
                <Chat planet={planet} />
            </div>
        </div>
    );
};

export default PlanetDetails;
