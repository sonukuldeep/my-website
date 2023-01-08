import React,{ createContext } from "react";

const DataContext = createContext<string|undefined>(undefined);

export default DataContext;