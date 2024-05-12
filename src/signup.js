import React, { useState } from 'react';
import './App.css';
import coinimg from "./assets/side.jpg";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

function Signup({ onSignup }) {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    aadharNumber: '',
    password: '',
    otp: '123456' // Default OTP
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the new user data to the parent component (Login)
    onSignup(formData);
    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className="log">
      <div className="row">
        <div className='col2'>
          <main className="App-main">
            <section className="login-section">
              <h1>Sign Up</h1>
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
                    type="text" 
                    placeholder='OTP' 
                    name="otp" 
                    value={formData.otp} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <button type='submit' className='login-btn'>Send OTP</button>
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
                  <h6> <u>Didn’t receive OTP? Resend</u></h6>
                  <br></br>
                </div>
                <button type="submit" className="login-btn">Sign Up</button>
              </form>
              <br></br>
              <hr></hr>
              <Link to="/login" className="signup-message"><u>Already have an account? Log In</u></Link>
            </section>
          </main>
        </div>
        <div className='image'>
          <img src={coinimg} className='coin'/>
        </div>
      </div>
    </div>
  );
}

export default Signup;
