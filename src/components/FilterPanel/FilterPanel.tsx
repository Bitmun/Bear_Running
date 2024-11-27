import React, { useEffect, useState } from 'react';

import styles from './FilterPanel.module.scss';
import { FilterPanelProps } from './type';

export const FilterPanel = ({ setDateRange }: FilterPanelProps) => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const applyFilter = () => {
    setDateRange({ from: fromDate, to: toDate });
  };

  useEffect(() => {
    return () => {
      setDateRange({ from: '', to: '' });
    };
  }, []);

  return (
    <div className={styles.filterPanelWrapper}>
      <div className={styles.filterPanel}>
        <div className={styles.inputsWrapper}>
          <div className={styles.inputWrapper}>
            <label htmlFor="fromDate">Date from</label>
            <input
              id="fromDate"
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="toDate">Date to</label>
            <input
              id="toDate"
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
        </div>
        <button onClick={applyFilter}>Apply</button>
      </div>
    </div>
  );
};
