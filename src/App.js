import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="background"></div>
        <div className="App">
          <div className="content-container">
            <div className="title main-title">Welcome</div>
            <div className="title sub-title">What would you like to renovate in your house?</div>
            <div className="buttons-container">
              <div className="button exterior">Exterior</div>
              <div className="button interior">Interior</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
