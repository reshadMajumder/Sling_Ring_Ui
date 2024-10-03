import React from 'react';
import './nasaTv.css';

function NasaTv({ url }) {
  return (
    <div className="home-background">
      <div className="container">
        <div className="iframe-container">
          <iframe
            src={url}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="Live Website Viewer"
          />
        </div>
      </div>
    </div>
  );
}

export default NasaTv;
