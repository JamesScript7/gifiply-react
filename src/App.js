import React, { Component } from 'react';
import './App.css';

import Nav from './Nav.jsx';
import WebRTC from './WebRTC.jsx';
import Options from './Options.jsx';
import Gifs from './Gifs.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Nav />
        <WebRTC />
        <Options />
        <Gifs />
        
      </div>
    );
  }
}

export default App;