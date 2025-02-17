import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/shows`)
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.error('Error fetching shows:', error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: '#fff' }}>All Shows</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {shows.map(show => (
          <div key={show.id} style={{ width: '300px', padding: '10px', backgroundColor: '#333', borderRadius: '8px' }}>
            <h3 style={{ color: '#e50914' }}>{show.title}</h3>
            <p style={{ color: '#fff' }}>Popularity: {show.popularity}</p>
            <Link to={`/show/${show.id}`} style={{ color: '#00A0E4' }}>Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
