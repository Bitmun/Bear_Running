import React, { useEffect, useState } from 'react';

import addJogIcon from '@assets/images/add-jog-icon.svg';
import sadFaceIcon from '@assets/images/sad-face-icon.svg';

import styles from './Home.module.scss';

import { JogsList } from 'components';
import { useNavigate } from 'react-router-dom';
import { getJogs } from 'services/jogsService';
import { Jog } from 'services/type';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jogsList, setJogsList] = useState<Jog[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getJogs()
      .then((jogs) => {
        setJogsList(jogs);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        alert('Some jogs loading error. Try later...');
      });
  }, []);

  if (isLoading) {
    return <h1 className={styles.loadingWrapper}>Loading your jogs...</h1>;
  }

  if (jogsList.length === 0) {
    return (
      <main className={styles.noJogsWrapper}>
        <div className={styles.sadFaceWrapper}>
          <img src={sadFaceIcon} alt="sad-face-logo" />
          <h1>Nothing is here</h1>
        </div>
        <button
          onClick={() => {
            navigate('/jogs/create');
          }}
        >
          Create your first jog
        </button>
      </main>
    );
  }

  return (
    <main className={styles.mainWrapper}>
      <JogsList jogs={jogsList} setJogs={setJogsList} />
      <div className={styles.addJogButtonWrapper}>
        <button
          className={styles.addJogButton}
          onClick={() => {
            navigate('/jogs/create');
          }}
        >
          <img src={addJogIcon} alt="add-jog-icon" />
        </button>
      </div>
    </main>
  );
};
