import './App.css';
import signin from './signin.png';
import logo2 from './logo.png'
import mainpic from './mainpic.png'

function App() {
  return (
    <div className="App">
          <b1>Main Page</b1>
      <div className='Signin-icon'>
        <img src={signin} alt="Sign In Icon" />
      </div>
      <div className='logo-icon'>
        <img src={logo2} alt="logo image" />
      </div>
      <div className='main-pic'>
        <img src={mainpic} alt="main picture" />
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
