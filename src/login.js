import React, { useState } from 'react';
import './App.css';
import coinimg from "./assets/side.jpg";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

function Login() {
  const navigate = useNavigate(); // Initialize useNavigate

  const [formData, setFormData] = useState({
    aadharNumber: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', formData);
      if (response.data.success) {
        console.log(response.data.user);
        // Store user data in local storage
        localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate('/dashboard'); // Redirect to /dashboard upon successful login
      }
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
    }
  };

  return (
    <div className="log">
      <div className="row">
        <div className='col1'></div>
        <div className='col2'>
          <main className="App-main">
            <section className="login-section">
              <h1>Login Using Password</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder='Aadhar Number' 
                    name="aadharNumber" 
                    value={formData.aadharNumber} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    required 
                  />
                  <br></br>
                  <h6> <u>Forgot password? Try another way</u></h6>
                  <br></br>
                </div>
                <button type="submit" className="login-btn">Log In</button>
              </form>
              <br></br>
              <hr></hr>
              <p className="signup-message"><u>Do not have an account? Sign Up</u></p>
            </section>
          </main>
        </div>
        <div className='imagee'>
          <img src={coinimg} alt="Your Image" />
        </div>
      </div>
    </div>
  );
}

export default Login;
