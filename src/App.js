import React from 'react'
import './App.css';
import logo from './logo.svg';
import hero from './hero.jpg';
import arrow from './arrow.svg';
import desktop from './desktop.svg';
import error from './error.svg'

class App extends React.Component {
  
  
  handleClick = (e) => {

  console.log(e.type);
  alert('hey')
  }
  
  
  render(){
    return (
    <div>
      <h1 id="first">WE'RE</h1>
      <h1 id="second">COMING <br></br> SOON</h1>
      <p id="p">Hello fellow shoppers! We're currently building our new </p>
     <br></br> <p id="p1"> fashion store. Add your email below to stay up to date with </p>
     <br></br><p id="p2"> annoucements and our launch details.</p>
      <form name="form">
        <input placeholder="Email Address" name="email"></input>
        <button id="button" type="submit" onClick={this.handleClick.bind(this)}></button>
      </form>
      <img src={logo} id="logo" alt="logo" />
      <img src={hero} id="hero" alt="woman" />
      <img src={arrow} id="arrow" alt="arrow" />
      <img src={desktop} id="desktop" alt="desktop background" />
      {/* <img src={error} id="error" alt="error" /> */}

    </div>
  );
  }
  
}

export default App;
