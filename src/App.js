import React, { Component } from 'react';
import './App.css';
import Messages from './Messages';
import TheDate from './state/TheDate'
import Counter from './counter/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>YOUR APPLICATION NAME!</h1>
        <TheDate className='dog'/>
        <Counter count={123}>'sdfsdf'</Counter>
      </div>
    );
  }
}

export default App;