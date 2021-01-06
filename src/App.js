import React from 'react'
import './App.css';
import logo from './logo.svg';
import hero from './hero.jpg';
import arrow from './arrow.svg';
import desktop from './desktop.svg';


class App extends React.Component {
  render(){
    return (
    <div>
      <h1>WE'RE</h1>
      <h1>COMING <br></br> SOON</h1>
      <p>Hello fellow shoppers! We're currently building our new <br></br> fashion store. Add your email below to stay up to date with <br></br> annoucements and our launch details.</p>
      <form>
        <input placeholder="Email Address"></input>
      </form>
      <img src={logo} id="logo" alt="logo" />
      <img src={hero} id="hero" alt="woman" />
      {/* <img src={arrow} id="arrow" alt="arrow" /> */}
      {/* <img src={desktop} id="desktop" alt="desktop background" /> */}

    </div>
  );
  }
  
}

export default App;
