import React,{Component} from 'react';
import Webcam from 'react-webcam'

class WebcamComponent extends Component {
	render(){
	return(
		<div>
		
		<Webcam 
			audio={false}
			style={{
    MozTransform: 'scale(-1, 1)',
    WebkitTransform: 'scale(-1, 1)',
    OTransform: 'scale(-1, 1)',
    transform: 'scale(-1, 1)'
  }}
		/>

		</div>
			);
	}
}
export default WebcamComponent
