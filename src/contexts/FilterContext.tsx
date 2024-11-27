import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface FilterPanelContextProps {
  showFilterPanel: boolean;
  setShowFilterPanel: Dispatch<SetStateAction<boolean>>;
}

interface FilterPanelProviderProps {
  children: ReactNode;
}

const FilterPanelContext = createContext<FilterPanelContextProps | undefined>(undefined);

export const FilterPanelProvider = ({ children }: FilterPanelProviderProps) => {
  const [showFilterPanel, setShowFilterPanel] = useState(false);

  return (
    <FilterPanelContext.Provider value={{ showFilterPanel, setShowFilterPanel }}>
      {children}
    </FilterPanelContext.Provider>
  );
};

export const useFilterPanel = () => {
  const context = useContext(FilterPanelContext);
  if (!context) {
    throw new Error('useFilterPanel must be used within a FilterPanelProvider');
  }
  return context;
};
