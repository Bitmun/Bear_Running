import { api } from './api';
import { Jog } from './type';

export const getJogs = async (): Promise<void> => {
  const response = await api.get('/jogs');
  const { token } = response.data;
  localStorage.setItem('token', token);
};

export const getJog = async (id: string): Promise<Jog> => {
  const response = await api.get<Jog>(`/jogs/${id}`);
  const jog = response.data;
  return jog;
};
