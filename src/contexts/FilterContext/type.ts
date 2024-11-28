import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface FilterContextProps {
  showFilterPanel: boolean;
  setShowFilterPanel: Dispatch<SetStateAction<boolean>>;
}

export interface FilterProviderProps {
  children: ReactNode;
}
