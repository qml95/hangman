import React, { Component } from 'react';

import Data from './components/Data';
import Keyboard from './components/Keyboard';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomWord: Data[Math.floor(Math.random() * Data.length)].split(''),
      letters: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  renderWordGame(randomWord) {
    return randomWord.map((letter, index) =>
      <p key={index} value={letter} className='letter'>{letter}</p>
    );
  }

  handleClick(letter) {
    this.setState({ letters: this.state.letters.concat(letter) });
  }

  render() {
    const newWord = [];
    this.state.randomWord.forEach((elt) => {
      if (this.state.letters.includes(elt)) {
        newWord.push(elt);
      } else {
        newWord.push('_');
      }
    });

    // newWord.push(this.state.letters.includes(elt) ? elt : '_')

    // const newWord = this.state.randomWord.map(elt => this.state.letters.includes(elt) ? elt : '_')

    return (
      <div className=''>
        <div className='word'>
          {
            this.renderWordGame(newWord)
          }
        </div>
        <Keyboard
          usedLetters={this.state.letters}
          handleClick={this.handleClick}
        />

      </div>
    );
  }
}

export default App;
