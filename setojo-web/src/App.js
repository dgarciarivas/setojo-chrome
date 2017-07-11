import React, { Component } from 'react';
import WebcamComponent from './Components/Webcam';
import OjoBot from './Components/OjoBot';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          
            <OjoBot/>
              <h2>Welcome to SetOjo</h2>
        </div>
        <p className="App-intro">
          ~  Computer vision to enhance your online experience  ~
        </p>
        <WebcamComponent/>
        <div className="button-container">
          <button> Start Calibrating</button>
          <button>End Calibration</button>
        </div>
      </div>
    );
  }
}

export default App;
