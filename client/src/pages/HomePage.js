import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li><Link to="/listings">View Listings</Link></li>
          <li><Link to="/match">Find a Match</Link></li>
        </ul>
      </nav>
    </div>
  );
}
