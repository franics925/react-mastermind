import React from 'react';
import styles from './GuessPeg.module.css';

const GuessPeg = (props) => (
  <div
    className={styles.peg}
    style={{
      backgroundColor: props.color,
    }}
  >
  </div>
);

export default GuessPeg;
