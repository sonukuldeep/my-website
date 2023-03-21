import { useState, createContext } from "react";

interface IChildrenType {
    children: React.ReactNode
}

interface ICartContextType {
    cartStatus: boolean;
    setCartStatus: React.Dispatch<React.SetStateAction<boolean>>;
    cartItems: ICartItemsType[];
    setCartItems: React.Dispatch<React.SetStateAction<ICartItemsType[]>>;
}

const CartContext = createContext({} as ICartContextType)

export const CartContextProvider = ({ children }: IChildrenType) => {

    const [cartStatus, setCartStatus] = useState(false)
    const [cartItems, setCartItems] = useState<ICartItemsType[]>([])

    return (
        <CartContext.Provider value={{ cartStatus, setCartStatus, cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
