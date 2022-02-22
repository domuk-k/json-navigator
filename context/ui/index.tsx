import React, { createContext, useContext, useReducer } from 'react';

type UIContextType = {
  navigatingMode: 'horizontal' | 'vertical';
  toggleNavigatingMode: () => void;
} | null;

const UIContext = createContext<UIContextType>(null);

interface UIContextProviderProp {
  children: React.ReactNode;
}

export function UIContextProvider({ children }: UIContextProviderProp) {
  const [mode, toggleNavigatingMode] = useReducer((x) => !x, false);

  return (
    <UIContext.Provider
      value={{
        navigatingMode: mode ? 'horizontal' : 'vertical',
        toggleNavigatingMode,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUIContext() {
  const context = useContext(UIContext);

  if (!context)
    throw new Error('useUIContext must be used inside a `UIContextProvider`');

  return context;
}
