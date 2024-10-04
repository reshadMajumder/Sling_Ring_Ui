import React, { useState } from 'react';

function Lab() {
  const [name, setName] = useState('');
  const [coordinates, setCoordinates] = useState('');
  const [kip, setKip] = useState('');
  const [result, setResult] = useState('');

  // Simulate a result calculation (you can replace this with an actual calculation or API call)
  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(`Predicted planet type: its a super earth`);
  };

  return (
    <div className="home-background" >
      <div className="container">
        <div className="row mt-5 pt-5">
          <div className="col-md-6">
            <h3>Submit Data</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Planet's radius</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label"> Orbital period</label>
                <input
                  type="text"
                  className="form-control"
                  value={coordinates}
                  onChange={(e) => setCoordinates(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Magnitude</label>
                <input
                  type="text"
                  className="form-control"
                  value={kip}
                  onChange={(e) => setKip(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="col-md-6">
            <h3>Result</h3>
            <div className="result-box" style={{ padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: '8px' }}>
              {result ? <p>{result}</p> : <p>No result to display yet. Please submit the form.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lab;