import React from 'react';

import jogIcon from '@assets/images/jog-icon.svg';

import styles from './JogTile.module.scss';
import { JogTileProps } from './type';

import { formatDate } from 'utils';

export const JogTile = ({ jog }: JogTileProps) => {
  const { distance, time, date, speed } = jog;

  const formattedDate = formatDate(date);

  return (
    <div className={styles.tileWrapper}>
      <img src={jogIcon} alt="jog-logo" />
      <div className={styles.statsWrapper}>
        <div>{formattedDate}</div>
        <div>Speed: {speed}</div>
        <div>Distance: {distance}</div>
        <div>Time: {time}</div>
      </div>
    </div>
  );
};
