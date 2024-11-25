import { api } from './api';
import { Jog } from './type';

export const getJogs = async (): Promise<Jog[]> => {
  const response = await api.get('/jogs');
  const { jogs } = response.data;
  return jogs;
};

export const getJog = async (id: string): Promise<Jog> => {
  const response = await api.get(`/jogs/${id}`);
  const jog = response.data;
  return jog;
};
