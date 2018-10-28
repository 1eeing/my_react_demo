import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const { value, increament, decreament } = this.props;
    console.log(value);
    return (
      <div>
        <span>{value}</span>
        <button onClick={increament}>+</button>
        <button onClick={decreament}>-</button>
      </div>
    );
  }
}

export default App;
