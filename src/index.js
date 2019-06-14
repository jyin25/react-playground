import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import HellowWorld from './state-drills/HelloWorld'
import TheDate from './state/TheDate'
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun'

ReactDOM.render(<RouletteGun bulletInChamber = '8' />, document.getElementById('root'));