import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Components/CongressionalDistricts.js';
import './Components/WorldMap'
import WorldMap from './Components/WorldMap.js';
// import CongressionalDistricts from './Components/CongressionalDistricts.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <WorldMap />
          {/* <CongressionalDistricts width={960} height={600}/> */}
        
      </div>
    );
  }
}

export default App;
