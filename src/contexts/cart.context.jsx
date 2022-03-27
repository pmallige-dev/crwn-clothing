import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems contains products to add

    //if found increment quantity

    //return new array with modified cart items/ new cart items
    
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const value = { isCartOpen, setIsCartOpen };

    const cartOnClickHandler = () => {
        setIsCartOpen(true)
    }

    return (<CartContext.Provider value={value}>{ children }</CartContext.Provider>)
}