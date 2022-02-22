import React, { createContext, useContext, useState } from 'react';

import jsonParser from '@/util/jsonParser';

type LoadedJSONContextType = {
  loadedJSON: JSONObject | null;
  setLoadedJSON: (data: JSONObject | null) => void;
} | null;

const LoadedJSONContext = createContext<LoadedJSONContextType>(null);

interface LoadedJSONProviderProp {
  children: React.ReactNode;
}

export function LoadedJSONProvider({ children }: LoadedJSONProviderProp) {
  const [loadedJSON, setLoadedJSON] = useState<JSONObject | null>(null);

  return (
    <LoadedJSONContext.Provider
      value={{
        loadedJSON,
        setLoadedJSON: (data) => {
          setLoadedJSON(jsonParser(data) as JSONObject);
        },
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
