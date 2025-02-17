import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Trending = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/trending`)
      .then(response => response.json())
      .then(data => setTrending(data))
      .catch(error => console.error('Error fetching trending shows:', error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: '#fff' }}>Trending Shows</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {trending.map(show => (
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

export default Trending;
