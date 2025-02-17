import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ background: '#141414', padding: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '24px', fontWeight: 'bold' }}>
          iBOX TV
        </Link>
        <div>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Home</Link>
          <Link to="/trending" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Trending</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
