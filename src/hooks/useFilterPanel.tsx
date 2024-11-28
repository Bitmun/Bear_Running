import { useContext } from 'react';

import { FilterContext } from 'contexts';

export const useFilterPanel = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilterPanel must be used within a FilterPanelProvider');
  }
  return context;
};
