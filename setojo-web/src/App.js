import React, { Component } from 'react';
import Calibration from './Components/Calibration';
import OjoBot from './Components/OjoBot';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <div className="App-header">
           <div className='Logo'>
              <OjoBot/>
              <h>SetOjo</h>
             </div>
        </div>
        <p className="App-intro">
          ~  Computer vision to enhance your online experience  ~
        </p>
          <Calibration/>
      </div>
    );
  }
}

export default App;