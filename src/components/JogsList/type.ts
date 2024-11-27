import { Dispatch, SetStateAction } from 'react';

import { Jog } from 'services/type';

export interface JogsListProps {
  jogs: Jog[];
  setJogs: Dispatch<SetStateAction<Jog[]>>;
}
