import React, { Component } from 'react';

import './stylesheets/index.css';
import './stylesheets/style.css';

// import './javascripts/dependencies/jquery-3.2.0.min.js';
// import './javascripts/dependencies/esprima.min.js';
// import './javascripts/dependencies/lodash.min.js';
// import './javascripts/dependencies/classList.js';
// import './javascripts/dependencies/gifshot.js';
// import './javascripts/main.js';

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
