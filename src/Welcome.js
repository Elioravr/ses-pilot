import React, { Component } from 'react';

export default class Welcome extends Component {
  handleClick = (text) => {
    this.setState({text})
    this.props.nextStep()
  }

  renderedText() {
    return this.state.text || "Where?";
  }

  render() {
    return(
      <div className="welcome-section">
        <div className="title main-title">Welcome</div>
        <div className="title sub-title">Where would you like to renovate in your house?</div>
        <div className="buttons-container">
          <div className="button exterior" onClick={() => {this.handleClick("Exterior")}}>Exterior</div>
          <div className="button interior" onClick={() => {this.handleClick("Interior")}}>Interior</div>
        </div>
      </div>
    );
  }
}
