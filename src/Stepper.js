import React, { Component } from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import Welcome from './Welcome';
import ItemsChooser from './ItemsChooser';
import Which from './Which';
import How from './How';

/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
class HorizontalLinearStepper extends Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Welcome nextStep={this.handleNext} />
      case 1:
        return <ItemsChooser nextStep={this.handleNext} />
      case 2:
        return <Which nextStep={this.handleNext} />
      case 3:
        return <How nextStep={this.handleNext} />
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div>
        <div className="stepper-container">
          <Stepper activeStep={stepIndex} className="stepper">
            <Step className="step">
              <StepLabel>Where?</StepLabel>
            </Step>
            <Step className="step">
              <StepLabel>What?</StepLabel>
            </Step>
            <Step className="step">
              <StepLabel>Which?</StepLabel>
            </Step>
            <Step className="step">
              <StepLabel>How?</StepLabel>
            </Step>
            <Step className="step">
              <StepLabel>Price!</StepLabel>
            </Step>
          </Stepper>
        </div>
        <div style={contentStyle}>
           {this.getStepContent(this.state.stepIndex)}
        </div>
      </div>
    );
  }
}
          // {finished ? (
          //   <p>
          //     <a
          //       href="#"
          //       onClick={(event) => {
          //         event.preventDefault();
          //         this.setState({stepIndex: 0, finished: false});
          //       }}
          //     >
          //       Click here
          //     </a> to reset the example.
          //   </p>
          // ) : (
          //   <div>
          //     <p>{this.getStepContent(stepIndex)}</p>
          //     <div style={{marginTop: 12}}>
          //       <FlatButton
          //         label="Back"
          //         disabled={stepIndex === 0}
          //         onTouchTap={this.handlePrev}
          //         style={{marginRight: 12}}
          //       />
          //       <RaisedButton
          //         label={stepIndex === 2 ? 'Finish' : 'Next'}
          //         primary={true}
          //         onTouchTap={this.handleNext}
          //       />
          //     </div>
          //   </div>
          // )}

export default HorizontalLinearStepper;
