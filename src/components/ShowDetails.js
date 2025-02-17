import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/shows/${id}`)
      .then(response => response.json())
      .then(data => setShow(data))
      .catch(error => console.error('Error fetching show details:', error));
  }, [id]);

  if (!show) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px', color: '#fff' }}>
      <h1>{show.title}</h1>
      <p>{show.description}</p>
      <p>Streamable: {show.is_streamable ? 'Yes' : 'No'}</p>
      <p>Popularity: {show.popularity}</p>
    </div>
  );
};

export default ShowDetails;
