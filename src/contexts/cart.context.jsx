import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = { isCartOpen, setIsCartOpen };

    const cartOnClickHandler = () => {
        setIsCartOpen(true)
    }

    return (<CartContext.Provider value={value}>{ children }</CartContext.Provider>)
}