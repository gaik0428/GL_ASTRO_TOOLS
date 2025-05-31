import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import './Welcome.css';
import Footer from './Footer/Footer';

function Welcome() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simple validation
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    // Example credentials (replace with real auth logic)
    if (username === 'admin' && password === '1234') {
      setError('');
      navigate('/'); // Redirect to home
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="welcome-root">
      <div className="Welcome">
        <div className="page-wrapper">
          <div className="main-container">
            <div className="image-column">
              <img
                src="/GL Astro Tools UI/Logo.png"
                alt="Logo"
                style={{ width: '350px', height: 'auto' }}
              />
              <img
                src="/GL Astro Tools UI/Pushan-Devta.png"
                alt="Pushan Devta"
                style={{ width: '350px', height: 'auto' }}
              />
            </div>
            <div className="centered-container">
              <h1 className="welcome-text">Welcome To</h1>
              <h1 className="title-text">GL Astro Tools</h1>
              <div className="input-actions-container">
                <input
                  placeholder="Username"
                  className="custom-input username-input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="custom-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                {/* Error Message */}
                {error && <p className="error-message">{error}</p>}

                <div className="actions-row-bottom">
                  <a href="#" className="change-password-link">Change Password</a>
                  <button className="btn-primary" onClick={handleLogin}>Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Welcome;
