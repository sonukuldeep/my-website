import React, { useRef,createContext } from "react";
import DataContext from "./DataContext";

const DataState = ({children}) => {
  
    const goTo = useRef(null)

  return (
    <DataContext.Provider value={ goTo }>
      {children}
    </DataContext.Provider>
  );
};

export default DataState;