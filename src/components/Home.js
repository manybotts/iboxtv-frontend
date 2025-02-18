import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [shows, setShows] = useState([]);
  // Ensure that REACT_APP_BACKEND_URL is set in your Vercel dashboard (or .env.local for local development)
  const backendURL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';

  useEffect(() => {
    fetch(`${backendURL}/shows`)
      .then((res) => res.json())
      .then((data) => setShows(data))
      .catch((err) => console.error("Error fetching shows:", err));
  }, [backendURL]);

  return (
    <div style={{ padding: '1rem' }}>
      <h1 style={{ color: '#fff' }}>All Shows</h1>
      <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
        {shows.map((show) => (
          <div key={show.id} style={{
              background: '#333',
              padding: '1rem',
              borderRadius: '8px'
            }}>
            <h3 style={{ color: '#e50914' }}>{show.title}</h3>
            <p style={{ color: '#fff' }}>Download: {show.download_link}</p>
            <Link to={`/show/${show.id}`} style={{
                color: '#fff',
                textDecoration: 'underline'
              }}>
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
