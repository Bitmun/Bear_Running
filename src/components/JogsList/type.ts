import { Jog } from 'services/type';

export interface JogsListProps {
  jogs: Jog[];
  onDeleteJog: (id: string) => void;
}
