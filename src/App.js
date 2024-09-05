import React from 'react';
import './App.css';
import signin from './signin.jpg';
import logo2 from './logo2.png';
import mainpic from './mainpic.jpg';
import Homepage from './homepage';

function App() {
  return (
    <div className="App">
      <Homepage />
      <b>Main Page</b> {/* <b1> is not a valid HTML element; use <b> for bold text */}
      <div className='Signin-icon'>
        <img src={signin} alt="Sign In Icon" />
      </div>
      <div className='logo-icon'>
        <img src={logo2} alt="Logo Image" />
      </div>
      <div className='main-pic'>
        <img src={mainpic} alt="Main Picture" />
      </div>
      <div className="button-container">
        <button className="explore-button">
          Explore
        </button>
      </div>
      <div className="button-container">
        <button className="learn-more-button">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default App;
