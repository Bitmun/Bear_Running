import { api } from './api';

export const login = async (username: string, password: string): Promise<void> => {
  const response = await api.post('/auth/signin', { username, password });
  console.log(response);
  const { accessToken } = response.data;
  localStorage.setItem('accessToken', accessToken);
};
