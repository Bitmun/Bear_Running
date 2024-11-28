import React, { useState } from 'react';

import deleteIcon from '@assets/images/delete-icon.svg';
import editIcon from '@assets/images/edit-icon.svg';
import jogIcon from '@assets/images/jog-icon.svg';
import { formatDate } from '@utils/index';

import styles from './JogTile.module.scss';
import { JogTileProps } from './type';

export const JogTile = ({ jog, handleChange, handleDelete }: JogTileProps) => {
  const { distance, time, date, speed, id } = jog;
  const [isDisabled, setIsDisabled] = useState(false);

  const formattedDate = formatDate(date);

  const handleEditClick = () => {
    handleChange(id);
  };

  const handleDeleteClick = async () => {
    setIsDisabled(true);
    await handleDelete(id);
    setIsDisabled(false);
  };

  return (
    <div className={`${styles.tileWrapper} ${isDisabled ? styles.disabledTile : ''}`}>
      <img src={jogIcon} alt="jog-logo" />
      <div className={styles.statsWrapper}>
        <div>
          <span className={styles.lightText}>{formattedDate}</span>
        </div>
        <div>
          <strong>Speed:</strong> <span className={styles.lightText}>{speed}</span>
        </div>
        <div>
          <strong>Distance:</strong>
          <span className={styles.lightText}> {distance} km</span>
        </div>
        <div>
          <strong>Time:</strong> <span className={styles.lightText}> {time} h</span>
        </div>
      </div>
      <div className={styles.buttonsWrapper}>
        <button onClick={handleEditClick} disabled={isDisabled}>
          <img src={editIcon} alt="edit-icon" />
        </button>
        <button onClick={handleDeleteClick} disabled={isDisabled}>
          <img src={deleteIcon} alt="delete-icon" />
        </button>
      </div>
    </div>
  );
};
