import React, { useState } from 'react';

import filter from '@assets/images/filter-active.svg';
import { Burger } from '@components/Burger/Burger';

import styles from './Header.module.scss';

import logo from 'assets/images/logo-icon.svg';
import { useFilterPanel } from 'contexts/FilterContext';
import { NavLink, useNavigate } from 'react-router-dom';

export const Header = () => {
  const token = localStorage.getItem('accessToken');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setShowFilterPanel } = useFilterPanel();

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
        <div className={styles.navWrapper}>
          <nav className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
            <NavLink
              onClick={toggleMenu}
              to="/"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              JOGS
            </NavLink>
            <NavLink
              onClick={toggleMenu}
              to="/info"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              INFO
            </NavLink>
            <NavLink
              onClick={toggleMenu}
              to="/contact"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              CONTACT US
            </NavLink>
          </nav>
          <div className={styles.iconsWrapper}>
            <button
              className={styles.iconButton}
              onClick={() => setShowFilterPanel((prev) => !prev)}
            >
              <img src={filter} alt="Filter" />
            </button>
            <button className={styles.burgerButton} onClick={toggleMenu}>
              ☰
            </button>
          </div>
          <Burger isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        </div>
      )}
    </header>
  );
};
