import React,{ Component } from 'react';

const FIRST_LINE = ['a','z','e','r','t','y','u','i','o','p'];
const SECOND_LINE = ['q','s','d','f','g','h','j','k','l','m'];
const THIRD_LINE = ['w','x','c','v','b','n'];

class Keyboard extends Component {
  render() {
    console.log(FIRST_LINE);
    console.log(SECOND_LINE);
    console.log(THIRD_LINE);
    return (
      <p>foo</p>
    )
  }
}

export default Keyboard;
