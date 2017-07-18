import React from 'react';
import logo from '../Ojo-quarter.png'; // Tell Webpack this JS file uses this image



function OjoBot() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

export default OjoBot;