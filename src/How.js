import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

export default class Which extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, index, value) => {
    this.setState({value})
  }

  render() {
    return (
      <div className="how-container">
        <div className="title sub-title">Please choose the roof angle that that matches yours the most</div>
        <div className="example-image"></div>
        <div className="select-container">
          <SelectField
            value={this.state.value}
            className="angles-select"
            onChange={this.handleChange}
            labelStyle={{color: '#333'}}
            style={{margin: '30px 0'}}
          >
            <MenuItem value={0} primaryText="Please Choose Items" />
            <MenuItem value={1} primaryText="15°" />
            <MenuItem value={2} primaryText="30°" />
            <MenuItem value={3} primaryText="40°" />
            <MenuItem value={4} primaryText="50°" />
          </SelectField>
        </div>
        <div className={`controls-container ${this.state.value !== 0 ? 'visible' : ''}`}>
          <FlatButton
            backgroundColor="rgba(255, 255, 255, 0.4)"
            hoverColor="rgba(255, 255, 255, 0.7)"
            style={{color: '#333', width: '480px', marginTop: '10px'}}
            onClick={this.props.nextStep}
          >
            Continue
          </FlatButton>
        </div>
      </div>
    )
  }
}
