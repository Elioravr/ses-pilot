import React, { Component } from 'react';
import CountUp from 'react-countup';
import FlatButton from 'material-ui/FlatButton';

export default class Price extends Component {
  state = {
    completed: false,
    end: parseInt(Math.random() * 100000)
  }

  animationCompleted = () => {
    setTimeout(() => {
      this.setState({completed: true});
    }, 500)
  }

  render() {
    return (
      <div className="price-container">
        <div className="title sub-title">The renovation you wish for should cost you like:</div>
        <CountUp start={0}
                 end={this.state.end}
                 duration={2}
                 decimal=","
                 suffix="$"
                 className="title main-title"
                 callback={this.animationCompleted} />
        <FlatButton
          className={`submit-button ${this.state.completed ? 'visible' : ''}`}
          backgroundColor="rgba(255, 255, 255, 0.4)"
          hoverColor="rgba(255, 255, 255, 0.7)"
          style={{color: '#333', width: '80%', marginTop: '10px'}}
        >
          Order renovation
        </FlatButton>
      </div>
    )
  }
}
