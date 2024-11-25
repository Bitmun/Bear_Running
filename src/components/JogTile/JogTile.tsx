import React from 'react';

import styles from './JogTile.module.scss';
import { JogTileProps } from './type';

export const JogTile = ({ jog }: JogTileProps) => {
  const { distance, time, date, speed } = jog;
  return (
    <div className={styles.tileWrapper}>
      <div>img placeholder</div>
      <div className={styles.statsWrapper}>
        <div>{date}</div>
        <div>Speed: {speed}</div>
        <div>Distance: {distance}</div>
        <div>Time: {time}</div>
      </div>
    </div>
  );
};
