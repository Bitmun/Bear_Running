import React, { useEffect, useState } from 'react';

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
    getJogs().then((jogs) => {
      setJogsList(jogs);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Is loading...</div>;
  }

  if (jogsList.length === 0) {
    return <div>No jogs</div>;
  }

  return (
    <main className={styles.mainWrapper}>
      <JogsList jogs={jogsList} />
      <button
        onClick={() => {
          navigate('/jogs/create');
        }}
      >
        +
      </button>
    </main>
  );
};
