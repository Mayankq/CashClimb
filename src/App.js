import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.js';
import Dashboard from './Dashboard.js'; // Import Dashboard component
import Login from './login.js';
import sideImage from './assets/side.jpg';
import person1 from './assets/person1.png';
import person2 from './assets/person3.png';
import person3 from './assets/person2.png';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={ <Dashboard /> } />
          <Route path="/" element={ <Home /> } />
          <Route path="/login" element={<Login />}/>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="actual">
      <img src={sideImage} height="607px" width="500px" alt="Side Image" />
      <div className='idk'>
        <p className='hed'>Fuel Your Dreams<br /> With Hassle Free Capital</p>
        <p className='hed' style={{fontSize:"1.5em"}}>Come join us to empower millions, and you. Changing the world with you, for you...</p>
        <p className='hed' style={{textAlign:'left' ,marginLeft:'20px', fontSize:'2.5em'}}>Testimonials</p>
        <div className='testimonials'>
          <div className='testi'><img src={person1} height="120px" width="120px" style={{borderRadius:'50%', marginTop:'15px'}} alt="Person 1" /><br />
          Finally, a lending platform that understands small businesses. Quick, reliable, and a game-changer for our growth<br /><br />-Sukhwinder Singh</div>
          <div className='testi'><img src={person2} height="120px" width="120px" style={{borderRadius:'50%', marginTop:'15px'}} alt="Person 2" /><br />
          SMEs, rejoice! This platform not only simplified our loan process but also propelled our business to new heights!<br /><br />-Savitri Devi</div>
          <div className='testi'><img src={person3} height="120px" width="120px" style={{borderRadius:'50%', marginTop:'15px'}} alt="Person 3" /><br />
          With this app, getting the funds we needed was as easy as pie – goodbye stress, hello success!<br /><br />-Sharad Mehta</div>
        </div>
      </div>
    </div>
  );
}

export default App;
