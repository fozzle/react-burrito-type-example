import React, { Component } from 'react';
import BurritoType from 'react-burrito-type';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      verticalAmp: 1,
      verticalFreq: 1/8,
      rotationAmp: 2,
      rotationFreq: 1/8,
      horizontalAmp: 1,
      horizontalFreq: 1/4,
      text: '',
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(e) {
    // Set state by field name
    const updateObj = {};
    updateObj[e.target.name] = e.target.value;
    this.setState(updateObj);
  }
  render() {
    return (
      <div className="App">
        <h1>React Burrito Type - Demo</h1>
        <p>
          Demo of <a href="https://www.npmjs.com/package/react-burrito-type">react-burrito-type</a>. Type in the box below.
        </p>
        <div>
          <input placeholder="Type something..." name="text" type="text" onChange={this.handleFieldChange} />
          <h3>Parameters</h3>
          <div>
            <label>
              Vertical Amplitude
              <input name="verticalAmp" type="range" min="0" max="100" value={this.state.verticalAmp} onChange={this.handleFieldChange} />
            </label>
          </div>
          <div>
            <label>
              Vertical Frequency
              <input step="any" name="verticalFreq" type="range" min="0" max="1" value={this.state.verticalFreq} onChange={this.handleFieldChange} />
            </label>
          </div>
          <div>
            <label>
              Horizontal Amplitude
              <input name="horizontalAmp" type="range" min="0" max="100" value={this.state.horizontalAmp} onChange={this.handleFieldChange} />
            </label>
          </div>
          <div>
            <label>
              Horizontal Frequency
              <input step="any" name="horizontalFreq" type="range" min="0" max="1" value={this.state.horizontalFreq} onChange={this.handleFieldChange} />
            </label>
          </div>
          <div>
            <label>
              Rotational Amplitude
              <input name="rotationAmp" type="range" min="0" max="360" value={this.state.rotationAmp} onChange={this.handleFieldChange} />
            </label>
          </div>
          <div>
            <label>
              Rotational Frequency
              <input name="rotationFreq" type="range" min="0" max="100" value={this.state.rotationFreq} onChange={this.handleFieldChange} />
            </label>
          </div>
        </div>
        <div>
          <h3>Output</h3>
          <BurritoType {...this.state} style={{ padding: '24px 0', fontSize: '48px' }} />
        </div>
      </div>
    );
  }
}

export default App;
