import React, { useState, createContext, useContext } from "react";

interface IChildrenType {
    children: React.ReactNode
}

interface DataContextType {
    greeting: string | null;
    data: string | null;
    setData: React.Dispatch<React.SetStateAction<string | null>>;
}

const DataContext = createContext({} as DataContextType);

export const DataContextProvider = ({ children }: IChildrenType) => {
    const greeting = "Hello world"
    const [data, setData] = useState<string | null>(null)

    return (
        <DataContext.Provider value={{ greeting, data, setData }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext