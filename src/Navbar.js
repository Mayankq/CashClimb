import './App.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from './assets/Logo.png';
import avatar from './assets/avatar.png';

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        // Handle parsing error
        console.error('Error parsing user data:', error);
      }
    }
  }, []);

  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem('user');
    // Set user state to null
    setUser(null);
  };

  return (
    <nav className="navbar">
      <div className="left-items">
        <div className="logo">
          <img src={logoImage} alt="CashClimb Logo" className="logo-image" />
        </div>
        <div className="navbar-title">CashClimb</div>
      </div>
      <div className="right-items">
        <img src={avatar} alt="avatar" className="avatar" />
        {user ? (
          <>
            <div className="user-info">{user.Name}</div> {/* Accessing user's Name property */}
            <button className="logout" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link className="login" to="/login">Login/SignUp</Link>
        )}
        <button className='Connect'></button>
      </div>
    </nav>
  );
};

export default Navbar;
