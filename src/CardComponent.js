import React from 'react';
import './style.css';
import ButtonComponent from './ButtonComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

class CardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TAName: this.props.TAName,
      TAOfficeHours: this.props.TAOfficeHours,
      TAContactButtonText: this.props.TAContactButtonText,
      buttonCallBackMessage: ''
    };
  }

  render() {
    return (
      <div className="col-sm-3">
        <div className="card border-default mx-1">
          <div className="card-body">
            <h6 className="TA-name">{this.state.TAName}</h6>
            <p className="TA-hour">{this.state.TAOfficeHours}</p>
            <ButtonComponent
              TAContactButtonText={this.state.TAContactButtonText}
              callbackFromCard={this.buttonCallback}
            />
          </div>
        </div>
        <p className="text-sm-center text-muted">
          {this.state.buttonCallBackMessage}
        </p>
      </div>
    );
  }

  buttonCallback = dataFromButton => {
    dataFromButton
      ? this.setState({ buttonCallBackMessage: '' })
      : this.setState({ buttonCallBackMessage: 'Connecting...' });
  };
}

export default CardComponent;
