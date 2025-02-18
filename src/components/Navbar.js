import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ background: '#141414', padding: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link
          to="/"
          style={{
            color: '#e50914',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            marginRight: '2rem'
          }}
        >
          All Shows
        </Link>
        <Link
          to="/trending"
          style={{ color: '#fff', textDecoration: 'none' }}
        >
          Trending
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
