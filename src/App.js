import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavbarCompo from './components/Navbar.js';
import InstructionsDiv from './components/InstructionsDiv'
import ImagesCompo from "./components/ImagesCompo"
import imagesData from "./components/imagesData"
import Wrapper from "./components/Wrapper";

class App extends Component {
  constructor() {
    super();
    this.state = {
   
    };
  }
  render() {
    const ImageComponents = imagesData.map(item => <ImagesCompo  key={item.id} image={item.image} />)
    // let hhhh = [Math.floor(Math.random() * ImageComponents)]
    return (
      <div>
      <div  className="App">
      <NavbarCompo />
      <InstructionsDiv />   
    </div>
      <Wrapper>
      {ImageComponents}
      </Wrapper>
      </div>
    );
  }
}

export default App;
