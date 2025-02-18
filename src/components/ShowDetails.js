import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const backendURL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';

  useEffect(() => {
    fetch(`${backendURL}/shows`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id.toString() === id);
        setShow(found);
      })
      .catch((err) => console.error("Error fetching show details:", err));
  }, [id, backendURL]);

  if (!show) return <div style={{ color: '#fff', padding: '1rem' }}>Loading...</div>;

  return (
    <div style={{ padding: '1rem', color: '#fff' }}>
      <h1>{show.title}</h1>
      <p>
        Download Link:{' '}
        <a href={show.download_link} style={{ color: '#e50914' }}>
          {show.download_link}
        </a>
      </p>
      <p>{show.is_streamable ? "Streamable" : "Not Streamable"}</p>
      <p>Popularity: {show.popularity}</p>
    </div>
  );
};

export default ShowDetails;
