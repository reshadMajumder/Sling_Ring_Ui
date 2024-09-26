import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // Retrieve user information from local storage
  const userName = localStorage.getItem('userName');
  const userId = localStorage.getItem('userId');

  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    
    // Redirect to the login page or homepage
    navigate('/login'); // Adjust this as needed
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Sling Ring</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link btn btn-outline-light rounded-pill m-1" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-outline-light rounded-pill m-1" href="/streaming">Streamings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-outline-light rounded-pill m-1" href="/explore">Explore</a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-outline-light rounded-pill m-1" href="/astronomy">Exoplanets</a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-outline-light rounded-pill m-1" href="/community">Community</a>
            </li>
          </ul>

          {/* Conditional rendering for logged in user */}
          {userId && (
            <div className="navbar-text ms-auto d-flex align-items-center">
              <span className="text-light me-3">Hello, {userName}!</span>
              <button className="btn btn-outline-light rounded-pill" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
