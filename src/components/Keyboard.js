import React from 'react';

const letters = [
  'a', 'z', 'e', 'r', 't',
  'y', 'u', 'i', 'o', 'p',
  'q', 's', 'd', 'f', 'g',
  'h', 'j', 'k', 'l', 'm',
  'w', 'x', 'c', 'v', 'b',
  'n',
];

const Keyboard = ({ usedLetters, handleClick }) => {

  const key = letters.map(letter => (
    <button
      key={letter}
      disabled={usedLetters.includes(letter)}
      onClick={() => handleClick(letter)}
      className='touch'>
      { letter }
    </button>
  ));
  return (
    <div className='keyboard'>
      {key}
    </div>
  )
};

export default Keyboard;
