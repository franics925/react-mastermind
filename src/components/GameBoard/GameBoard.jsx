import React from 'react';
import GuessRow from '../GuessRow/GuessRow';
import style from './GameBoard.module.css';

const GameBoard = (props) => (
  <div className={style.GameBoard}>
    {props.guesses.map((guess, idx) =>
      <GuessRow
        guess={guess}
        colors={props.colors}
        rowIdx={idx}
        currentGuess={idx === (props.guesses.length - 1)}
        key={idx}
      />
    )}
  </div>
);

export default GameBoard;
