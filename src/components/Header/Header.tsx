import React, { useState } from 'react';

import filter from '@assets/images/filter-active.svg';

import styles from './Header.module.scss';

import logo from 'assets/images/logo-icon.svg';
import { NavLink, useNavigate } from 'react-router-dom';

export const Header = () => {
  const token = localStorage.getItem('accessToken');
  const [showFilter, setShowFilter] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <button
        className={styles.logoWrapper}
        onClick={() => {
          navigate('/');
        }}
      >
        <img src={logo} alt="logo" />
        <div>LOGOBEAR</div>
      </button>
      {token && (
        <>
          <nav className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
            <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>
              JOGS
            </NavLink>
            <NavLink
              to="/info"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              INFO
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              CONTACT US
            </NavLink>
            <button
              className={styles.iconButton}
              onClick={() => setShowFilter(!showFilter)}
            >
              <img src={filter} alt="Filter" />
            </button>
          </nav>
          <button className={styles.burgerMenu} onClick={toggleMenu}>
            ☰
          </button>
        </>
      )}
    </header>
  );
};
