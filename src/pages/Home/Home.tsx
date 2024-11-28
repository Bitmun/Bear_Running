import React, { useEffect, useState } from 'react';

import addJogIcon from '@assets/images/add-jog-icon.svg';
import sadFaceIcon from '@assets/images/sad-face-icon.svg';
import { FilterPanel } from '@components/FilterPanel/FilterPanel';
import { filterJogsByDate } from '@utils/filters/jogsFilter';

import styles from './Home.module.scss';
import { DateRange } from './type';

import { JogsList } from 'components';
import { useFilterPanel } from 'contexts/FilterContext';
import { useNavigate } from 'react-router-dom';
import { getJogs } from 'services/jogsService';
import { Jog } from 'services/type';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [defaultJogList, setDefaultJogList] = useState<Jog[]>([]);
  const [jogsListToDisplay, setJogsListToDisplay] = useState<Jog[]>([]);
  const { showFilterPanel } = useFilterPanel();
  const [dateRange, setDateRange] = useState<DateRange>({ from: '', to: '' });

  const navigate = useNavigate();

  useEffect(() => {
    getJogs()
      .then((jogs) => {
        setDefaultJogList(jogs);
        const filteredJogs = filterJogsByDate(jogs, dateRange);
        setJogsListToDisplay(filteredJogs);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        alert('Some jogs loading error. Try later...');
      });
  }, []);

  useEffect(() => {
    const filteredJogs = filterJogsByDate(defaultJogList, dateRange);
    setJogsListToDisplay(filteredJogs);
  }, [dateRange]);

  if (isLoading) {
    return <h1 className={styles.loadingWrapper}>Loading your jogs...</h1>;
  }

  const isFilterApplied = dateRange.from || dateRange.to;

  if (jogsListToDisplay.length === 0) {
    return (
      <main className={styles.mainWrapper}>
        {showFilterPanel && <FilterPanel setDateRange={setDateRange} />}
        <div className={styles.sadFaceWrapper}>
          <img src={sadFaceIcon} alt="sad-face-logo" />
          <h1>{isFilterApplied ? 'No jogs satisfy the filter' : 'No jogs available'}</h1>
        </div>
        {!isFilterApplied && (
          <button
            className={styles.createJogButton}
            onClick={() => {
              navigate('/jogs/create');
            }}
          >
            Create your first jog
          </button>
        )}
      </main>
    );
  }

  return (
    <main className={styles.mainWrapper}>
      {showFilterPanel && <FilterPanel setDateRange={setDateRange} />}
      <JogsList jogs={jogsListToDisplay} setJogs={setJogsListToDisplay} />
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
