import React from 'react';
import GuessPegs from '../GuessPegs/GuessPegs';
import GuessScore from '../GuessScore/GuessScore';
import ScoreButton from '../ScoreButton/ScoreButton';
import './GuessRow.module.css';

const GuessRow = (props) => (
  <div className='flex-h'>
    <div className='GuessRowNum' style={{
      color: props.currentGuess ? 'black' : 'grey'
      }}>
      {props.rowIdx + 1}
    </div>
    <div className="GuessPegs">
      <GuessPegs
        colors={props.colors}
        code={props.guess.code}
      />
      {
        props.currentGuess ?
          <ScoreButton /> :
          <GuessScore score={props.guess.score} />
      }
    </div>
  </div>
);

export default GuessRow;
