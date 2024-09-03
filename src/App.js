import logo from './logo.svg';
import './App.css';
import signin from './signin.jpg';
import logo2 from './logo2.png'
import mainpic from './mainpic.jpg'
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
    </div>
  );
}

export default App;
