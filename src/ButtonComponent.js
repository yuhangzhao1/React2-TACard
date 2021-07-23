import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TAContactButtonText: this.props.TAContactButtonText,
      TAContectButtonStyle: 'btn btn-success',
      TAContextButtonPressed: false
    };
    this.changeButtonState = this.changeButtonState.bind(this);
  }

  changeButtonState() {
    this.state.TAContextButtonPressed
      ? this.setState({ TAContextButtonPressed: false })
      : this.setState({ TAContextButtonPressed: true });
    this.state.TAContextButtonPressed
      ? this.setState({ TAContectButtonStyle: 'btn btn-success' })
      : this.setState({ TAContectButtonStyle: 'btn btn-danger' });
    this.props.callbackFromCard(this.state.TAContextButtonPressed);
  }

  render() {
    return (
      <button
        className={this.state.TAContectButtonStyle}
        onClick={this.changeButtonState}
      >
        {this.state.TAContactButtonText}
      </button>
    );
  }
}

export default ButtonComponent;
