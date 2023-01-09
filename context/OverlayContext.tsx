import { useState, createContext } from "react";

interface IChildrenType {
    children: React.ReactNode
}

interface IOverlayContextType {
    overlayStatus: boolean
    setOverlayStatus: React.Dispatch<React.SetStateAction<boolean>>
}

const OverlayContext = createContext({} as IOverlayContextType)

export const OverlayContextProvider = ({ children }: IChildrenType) => {

    const [overlayStatus, setOverlayStatus] = useState(false)

    return (
        <OverlayContext.Provider value={{ overlayStatus, setOverlayStatus }}>
            {children}
        </OverlayContext.Provider>
    )
}

export default OverlayContext;