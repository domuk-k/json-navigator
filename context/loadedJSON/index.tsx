import React, { createContext, useContext, useState } from 'react';

type LoadedJSONType = object | null;

type LoadedJSONContextType = {
  loadedJSON: LoadedJSONType;
  setLoadedJSON: (data: LoadedJSONType) => void;
} | null;

const LoadedJSONContext = createContext<LoadedJSONContextType>(null);

interface LoadedJSONProviderProp {
  children: React.ReactNode;
}

export function LoadedJSONProvider({ children }: LoadedJSONProviderProp) {
  const [loadedJSON, setLoadedJSON] = useState<object | null>(null);

  return (
    <LoadedJSONContext.Provider
      value={{
        loadedJSON,
        setLoadedJSON,
      }}
    >
      {children}
    </LoadedJSONContext.Provider>
  );
}

export function useLoadedJSON() {
  const context = useContext(LoadedJSONContext);

  if (!context)
    throw new Error('useLoadedJSON must be used inside a `LoadedJSONProvider`');

  return context;
}
