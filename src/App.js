import React, { Component } from 'react';
import './App.css';
import Messages from './Messages';
import TheDate from './state/TheDate'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>YOUR APPLICATION NAME!</h1>
        <TheDate />
      </div>
    );
  }
}

export default App;