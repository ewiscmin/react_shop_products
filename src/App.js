import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h4>OtherChild</h4>
        Value in OtherChild Props: {this.props.passedVal}
      </div>
    )
  }
}

export default App;
