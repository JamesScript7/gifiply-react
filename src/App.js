import React, { Component } from 'react';
import './App.css';

import Nav from './Nav.jsx';
import WebRTC from './WebRTC.jsx';
import Options from './Options.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <WebRTC />
        <Options />
      </div>
    );
  }
}

export default App;