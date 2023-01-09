import { useState, createContext } from "react";

interface IChildrenType {
    children: React.ReactNode
}

interface ICartContextType {
    cartStatus: boolean
    setCartStatus: React.Dispatch<React.SetStateAction<boolean>>
}

const CartContext = createContext({} as ICartContextType)

export const CartContextProvider = ({ children }: IChildrenType) => {

    const [cartStatus, setCartStatus] = useState(false)

    return (
        <CartContext.Provider value={{ cartStatus, setCartStatus }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
