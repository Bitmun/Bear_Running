import { Jog } from 'services/type';

export interface JogTileProps {
  jog: Jog;
  handleChange: (id: string) => void;
  handleDelete: (id: string) => void;
}
