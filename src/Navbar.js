import './App.css';
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation hook
import logoImage from './assets/Logo.png';
import avatar from './assets/avatar.png';

const Navbar = ({ user, onLogout, currentPage }) => { // Add currentPage prop
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        // setUser(JSON.parse(storedUser)); // This line is unnecessary and can be removed
      } catch (error) {
        // Handle parsing error
        console.error('Error parsing user data:', error);
      }
    }
  }, []);

  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem('user');
    // Call onLogout prop
    onLogout();
  };

  // Get the current pathname using useLocation hook
  const location = useLocation();
  const currentPath = location.pathname;

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
    <div className="user-info">{user.name}</div>
    <button className="logout" onClick={handleLogout}>Logout</button>
  </>
) : (
  currentPage !== '/login' && (
    <div style={{ display: 'flex' }}>
      <Link style={{ marginRight: '10px' }} className="login" to="/login">Login</Link>
      <Link className="login" to="/signup">Signup</Link>
    </div>
  )
)}
        <button className='Connect'></button>
      </div>
    </nav>
  );
};

export default Navbar;
