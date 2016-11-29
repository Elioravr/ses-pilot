import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

export default class HorizontalLinearStepper extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, index, value) => {
    this.setState({value})
  }

  render() {
    return (
      <div className="items-chooser">
        <div className="title sub-title">What would you like to renovate in your house?</div>
        <SelectField
          value={this.state.value}
          className="items-select"
          onChange={this.handleChange}
          labelStyle={{color: '#333'}}
          style={{margin: '30px 0'}}
        >
          <MenuItem value={0} primaryText="Please Choose Items" />
          <MenuItem value={1} primaryText="Roof" />
          <MenuItem value={2} primaryText="Windows" />
          <MenuItem value={3} primaryText="Exterior Paint" />
          <MenuItem value={4} primaryText="Garden" />
          <MenuItem value={5} primaryText="Hard Scope" />

        </SelectField>
        <div className={`controls-container ${this.state.value !== 0 ? 'visible' : ''}`}>
          <FlatButton
            backgroundColor="rgba(255, 255, 255, 0.4)"
            hoverColor="rgba(255, 255, 255, 0.7)"
            style={{color: '#333', width: '80%'}}
            onClick={this.props.nextStep}
          >
            Continue
          </FlatButton>
        </div>
      </div>
    )
  }
}
