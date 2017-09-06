import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import MartaDashboard from './MartaDashboard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="http://atlantaintownpaper.com/wp-content/uploads/2013/09/MARTA-logo.jpg" className="App-logo" alt="logo" />
          <h2>Welcome to Marta</h2>
        </div>
        <MartaDashboard /> 
      </div>
    );
  }
}

export default App;
