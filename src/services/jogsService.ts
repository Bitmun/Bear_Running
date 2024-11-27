import { api } from './api';
import { Jog } from './type';

export const getJogs = async (): Promise<Jog[]> => {
  const response = await api.get('/jogs');
  const { jogs } = response.data;
  return jogs;
};

export const getJog = async (id: string): Promise<Jog> => {
  const response = await api.get<{ jogs: Jog[] }>(`/jogs/${id}`);
  const { jogs } = response.data;
  return jogs[0];
};

export const createJog = async (
  jog: Pick<Jog, 'time' | 'distance' | 'date'>,
): Promise<void> => {
  await api.post('/jogs', jog);
};

export const updateJog = async (
  id: string,
  jog: Pick<Jog, 'time' | 'distance' | 'date'>,
): Promise<void> => {
  await api.patch(`/jogs/${id}`, jog);
};

export const deleteJog = async (id: string): Promise<void> => {
  await api.delete(`/jogs/${id}`);
};
