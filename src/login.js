import React, { useState, useEffect } from 'react';
import './App.css';
import coinimg from "./assets/side.jpg";
import { Link, useLocation, useNavigate } from 'react-router-dom'; 

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleSignup = (newUserData) => {
    // Process the new user data here (e.g., add to users state)
    console.log('New user signed up:', newUserData);
}

  const [users, setUsers] = useState([
    {
      aadharNumber: '123456789012',
      password: 'password123',
      name: 'John Doe',
      investmentAmount: 5000,
      category: 'Stocks'
    },
    {
      aadharNumber: '987654321098',
      password: 'abc123',
      name: 'Jane Smith',
      investmentAmount: 8000,
      category: 'Bonds'
    }
  ]);

  useEffect(() => {
    if (location.state && location.state.newUser) {
      const newUser = location.state.newUser;
      setUsers(prevUsers => [...prevUsers, newUser]);
    }
  }, [location.state]);

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
      const user = users.find(user => user.aadharNumber === formData.aadharNumber);
      if (user && user.password === formData.password) {
        console.log('Login successful');
        // Inside handleSubmit function, after successful login
localStorage.setItem('user', JSON.stringify(user));
navigate('/dashboard', { state: { user } }); // Pass user data as state
        navigate('/dashboard');
      } else {
        console.error('Invalid Aadhar number or password');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="log">
      <div className="row">
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
                  <br></br>
                </div>
                <button type="submit" className="login-btn">Log In</button>
              </form>
              <br></br>
              <Link className="signup-message" to="/signup"><u>Do not have an account? Sign Up</u></Link>
            </section>
          </main>
        </div>
        <div className='image'>
          <img src={coinimg} className='coin' style={{height:'604px'}}/>
        </div>
      </div>
    </div>
  );
}

export default Login;
