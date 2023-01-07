import React, { useRef } from "react";
import DataContext from "./DataContext";

const DataState = (props) => {
    const goTo = useRef(null)

  return (
    <DataContext.Provider value={{ goTo }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;