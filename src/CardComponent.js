import React from 'react'

class CardComponent extends React.CardComponent {
  constructor(props) {
    this.state = {
      TAName: this.props.TAName,
      TAOfficeHours: this.props.TAOfficeHours,
      TAContactButtonText: this.props.TAContactButtonText,
      TAContectButtonStyle: "btn btn-success",
      buttonCallBackMessage: ""
    };
  }

  render() {
    return{
      <div className = "col-sm-3">

      </div>
    };
  }
}

export default CardComponent