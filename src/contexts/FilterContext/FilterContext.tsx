import React, { createContext, useState } from 'react';

import { FilterContextProps, FilterProviderProps } from './type';

export const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [showFilterPanel, setShowFilterPanel] = useState(false);

  return (
    <FilterContext.Provider value={{ showFilterPanel, setShowFilterPanel }}>
      {children}
    </FilterContext.Provider>
  );
};
