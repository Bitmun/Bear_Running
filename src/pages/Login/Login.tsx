import React, { useState } from 'react';

import { login } from 'services/authService';

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await login('alex', 'qwerty');
      window.location.href = '/';
    } catch (error) {
      alert('Ошибка авторизации');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <button onClick={handleClick} disabled={isLoading}>
        Let me in
      </button>
    </div>
  );
};
