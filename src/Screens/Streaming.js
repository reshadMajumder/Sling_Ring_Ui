import React from 'react';
import './Streaming.css';
import B_URL from '../Services/Api';

const StreamingPlatforms = () => {


  const [platforms, setPlatforms] = React.useState([]);
  
    React.useEffect(() => {
      const fetchPlatforms = async () => {
        try {
          const response = await fetch(`${B_URL}/api/streaming/streams/`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setPlatforms(data);
        } catch (error) {
          console.error('Error fetching platforms:', error);
        }
      };
  
      fetchPlatforms();
    }, []);
  

  return (
    <div className="streaming-container">
      <h2>Available Streaming Platforms</h2>
      <div className="platforms-list">
        {platforms.map((platform) => (
          <div className="platform-card" key={platform.name}>
            <a href={platform.url} target="_blank" rel="noopener noreferrer">
              <img src=  {`${B_URL}${platform.logo}`} alt={`${platform.name} logo`} className="platform-logo" />
              <button className="btn btn-primary">{platform.name}</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StreamingPlatforms;
