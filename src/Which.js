import React, { Component } from 'react';

export default class Which extends Component {
  state = {
    loaded: false
  }

  componentDidMount() {
    this.setState({loaded: true})
  }

  render() {
    return (
      <div className="which-container">
        <div className="title main-title">Roof</div>
        <div className={`border-bottom ${this.state.loaded ? 'visible' : ''}`}></div>
        <div className="title sub-title">Which kind of roof would you like to renovate in your house?</div>
        <div className={`buttons-container ${this.state.loaded ? 'visible' : ''}`}>
          <div className="button tile-roof" onClick={this.props.nextStep}>Tile</div>
          <div className="button composite-shingles-roof" onClick={this.props.nextStep}>Composite Shingles</div>
          <div className="button flat-roof" onClick={this.props.nextStep}>Flat</div>
          <div className="button spanish-tile-roof" onClick={this.props.nextStep}>Spanish Tile</div>
        </div>
      </div>
    )
  }
}
