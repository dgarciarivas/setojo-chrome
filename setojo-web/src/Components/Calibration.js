import React,{Component} from 'react';
import WebcamComponent from './WebcamComponent';

class Calibration extends Component {
	constructor(props) {
		super(props);
		this.props = ('startCalibrating', 'stopCalibrating');
		this.state = {
			isCalibrating: false,
		}
	}
	startCalibrating= () =>{
		this.setState({
			isCalibrating: true,
		});
	}
	stopCalibrating = () =>{
		this.setState ({
			isCalibrating: false,
		});
	}
	render(){
			console.log(this.state);
	return(
		<div>
		
		<WebcamComponent/>
		<div className="button-container">
          <button onClick = {this.startCalibrating}> Start Calibrating</button>
          <button onClick = {this.stopCalibrating}>End Calibration</button>
        </div>

		</div>
			);
	}
}
export default Calibration
