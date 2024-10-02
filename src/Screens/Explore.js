import React from 'react';


function ExploreExoplanets({ url }) {
    return (
        <div className="home-background">
            <div className="container">
                <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
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

export default ExploreExoplanets;
