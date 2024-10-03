import React from 'react';
import './Streaming.css';
import NasaTv from '../components/NasaTv';

const StreamingPlatforms = () => {
  return (

    <div className="streaming-container">
      <h2 className='pt-5 mt-5'>Available Streaming Platforms</h2>    
      <div className="streaming-row ">
        <NasaTv url={"https://www.nasa.gov/live/"} />
        <NasaTv url={"https://www.n2yo.com/space-station/"} />
        <NasaTv url={"https://www.nasa.gov/general/nasa-embraces-streaming-service-to-reach-inspire-artemis-generation/"} />
      </div>
    </div>
  );
};

export default StreamingPlatforms;
