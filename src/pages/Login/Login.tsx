import React, { useState } from 'react';

import bearFace from '@assets/images/bear-face.svg';

import styles from './Login.module.scss';

import { useNavigate } from 'react-router-dom';
import { login } from 'services/authService';

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await login('alex', 'qwerty');
      navigate('/');
    } catch (error) {
      alert('Ошибка авторизации');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className={styles.pageWrapper}>
      <div className={styles.boxWrapper}>
        <img src={bearFace} alt="login-logo" />
        <button onClick={handleClick} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Let me in'}
        </button>
      </div>
    </main>
  );
};
