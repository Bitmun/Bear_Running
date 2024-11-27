import React, { useEffect, useState } from 'react';

import closeIcon from '@assets/images/close-icon.svg';

import styles from './JogForm.module.scss';

import { useNavigate, useParams } from 'react-router-dom';
import { createJog, getJog, updateJog } from 'services/jogsService';
import { Jog } from 'services/type';

export const JogForm = () => {
  const { id } = useParams<{ id: string }>();
  const [distance, setDistance] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [isLoading, setIsLoading] = useState<boolean>(!!id);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getJog(id)
        .then((jog: Jog) => {
          const { distance, time, date } = jog;
          setDistance(distance);
          setTime(time);
          setDate(date.split('T')[0]);
        })
        .catch(() => {
          navigate('/not-found');
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [id]);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      if (distance <= 0 || time <= 0 || !date) {
        alert('All values must be, and be > 0');
        return;
      }

      const formattedDate = new Date(date).toISOString();

      if (id) {
        await updateJog(id, { distance, time, date: formattedDate });
      } else {
        await createJog({ distance, time, date: formattedDate });
      }

      navigate('/');
    } catch (e) {
      console.log(e);
      alert('Error while processing form');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <main className={`${styles.pageWrapper} ${isLoading ? styles.loadingForm : ''}`}>
      <form className={styles.formWrapper}>
        <button className={styles.cancelButton} type="button" onClick={handleCancel}>
          <img src={closeIcon} alt="cancel" />
        </button>
        <div className={styles.fieldWrapper}>
          <label htmlFor="distance"> Distance</label>
          <input
            type="number"
            id="distance"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
            min="0"
            required
          />
        </div>
        <div className={styles.fieldWrapper}>
          <label htmlFor="time">Time</label>
          <input
            type="number"
            id="time"
            value={time}
            onChange={(e) => setTime(Number(e.target.value))}
            min="0"
            required
          />
        </div>
        <div className={styles.fieldWrapper}>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button
          className={styles.saveButton}
          type="submit"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          Save
        </button>
      </form>
    </main>
  );
};
