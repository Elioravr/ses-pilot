import React, { Component } from 'react';
import Stepper from './Stepper';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="background"></div>
        <div className="App">
          <div className="content-container">
            <Stepper />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
