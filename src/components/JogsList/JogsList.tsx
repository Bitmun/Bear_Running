import React from 'react';

import styles from './JogsList.module.scss';
import { JogsListProps } from './type';

import { JogTile } from 'components/JogTile/JogTile';

export const JogsList = ({ jogs }: JogsListProps) => {
  return (
    <div className={styles.listWrapper}>
      {jogs.map((jog) => (
        <JogTile key={jog.id} jog={jog} />
      ))}
    </div>
  );
};
