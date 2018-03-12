import React, { Component } from 'react';

import { Data } from './Data';
import Keyboard from './components/Keyboard';

import './App.css';

class App extends Component {
  render() {
    console.log(Data);
    return (
      <div className="">
        <Keyboard />
      </div>
    );
  }
}

export default App;
