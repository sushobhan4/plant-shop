import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div
      className="landing"
      style={{
        backgroundImage: "url('/assets/background.jpg')",
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textShadow: '1px 1px 3px black'
      }}
    >
      <h1>🌿 Green Haven</h1>
      <p>
        Bringing nature to your home with our curated selection of indoor
        plants that purify your air and brighten your space.
      </p>
      <Link to="/products">
        <button className="btn">Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;
