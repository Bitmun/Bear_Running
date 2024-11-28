import React, { useEffect, useState } from 'react';

import styles from './FilterPanel.module.scss';
import { FilterPanelProps } from './type';

export const FilterPanel = ({ setDateRange }: FilterPanelProps) => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const applyFilter = () => {
    setDateRange({ from: fromDate, to: toDate });
  };

  const cancelFilter = () => {
    setFromDate('');
    setToDate('');
    setDateRange({ from: '', to: '' });
  };

  useEffect(() => {
    return () => {
      setDateRange({ from: '', to: '' });
    };
  }, []);

  const handleFromDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setFromDate(selectedDate);
    if (toDate && selectedDate > toDate) {
      setToDate('');
    }
  };

  const handleToDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setToDate(selectedDate);
    if (fromDate && selectedDate < fromDate) {
      setFromDate('');
    }
  };

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
              onChange={handleFromDateChange}
              max={toDate || undefined}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="toDate">Date to</label>
            <input
              id="toDate"
              type="date"
              value={toDate}
              onChange={handleToDateChange}
              min={fromDate || undefined}
            />
          </div>
        </div>
        <div className={styles.filterButtonsWrapper}>
          <button onClick={cancelFilter} className={styles.filterButton}>
            Clear filter
          </button>
          <button onClick={applyFilter} className={styles.filterButton}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
