import React from 'react';

import cloceIcon from '@assets/images/close-icon.svg';
import logo from '@assets/images/logo-icon.svg';

import styles from './Burger.module.scss';
import { BurgerProps } from './type';

import { NavLink, useNavigate } from 'react-router-dom';

export const Burger = ({ isOpen, setIsOpen }: BurgerProps) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${styles.burgerMenu} ${isOpen ? styles.openMenu : styles.closeMenu}`}
    >
      <div className={styles.burgerIcons}>
        <button
          className={styles.logoWrapper}
          onClick={() => {
            navigate('/');
            setIsOpen((prev) => !prev);
          }}
        >
          <img src={logo} alt="close-icon" />
          <div>LOGOBEAR</div>
        </button>
        <button
          className={styles.logoWrapper}
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <img src={cloceIcon} alt="logo" />
        </button>
      </div>
      <div className={styles.burgerNavWrapper}>
        <NavLink
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
          to="/"
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          JOGS
        </NavLink>
        <NavLink
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
          to="/info"
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          INFO
        </NavLink>
        <NavLink
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
          to="/contact"
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          CONTACT US
        </NavLink>
      </div>
    </div>
  );
};
