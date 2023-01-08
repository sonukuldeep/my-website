import React, { createContext } from "react";

export interface childrenType {
  children: React.ReactNode
}

const DataContext = createContext<string | undefined>(undefined);

const DataState = ({ children }: childrenType) => {

  const greeting = 'hello world'

  return (
    <DataContext.Provider value={greeting}>
      {children}
    </DataContext.Provider>
  );
};

export default DataState;