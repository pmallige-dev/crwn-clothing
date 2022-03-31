import { createContext, useState, useEffect, useReducer } from "react";

const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems contains products to add
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    //if found increment quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    //return new array with modified cart items/ new cart items
    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    //find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    //check if quantity is equal to 1, if so then remove the item from cart
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    //return back cart items with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    )
}

const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0,
    cartTotal: 0,
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
});

export const CART_ACTION_TYPES = {
    SET_CART_IS_OPEN: 'SET_CART_IS_OPEN',
    SET_CART_IS_NOT_OPEN: 'SET_CART_IS_NOT_OPEN',
    ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
    REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART',
    CLEAR_ITEM_FROM_CART: 'CLEAR_ITEM_FROM_CART',
    SET_CART_COUNT: 'SET_CART_COUNT',
    SET_CART_TOTAL: 'SET_CART_TOTAL',
}

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_IS_OPEN:
            return {
                ...state,
                isCartOpen: true,
            }
        case CART_ACTION_TYPES.SET_CART_IS_NOT_OPEN:
            return {
                ...state,
                isCartOpen: false,
            }
        case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: payload,
            }
        case CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: payload,
            }
        case CART_ACTION_TYPES.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: payload,
            }
        case CART_ACTION_TYPES.SET_CART_COUNT:
            return {
                ...state,
                cartItems: payload,
            }
        case CART_ACTION_TYPES.SET_CART_TOTAL:
            return {
                ...state,
                cartItems: payload,
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }

}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
}

export const CartProvider = ({ children }) => {
    const [{ isCartOpen, cartItems }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const setIsCartOpen = (isCartOpen) => {
        if (isCartOpen)
            dispatch({
                type: CART_ACTION_TYPES.SET_CART_IS_OPEN
            })
        else
            dispatch({
                type: CART_ACTION_TYPES.SET_CART_IS_NOT_OPEN
            })
    }

    const addItemToCart = (productToAdd) => {
        dispatch({
            type: CART_ACTION_TYPES.ADD_ITEM_TO_CART,
            payload: addCartItem(cartItems, productToAdd),
        })
    }

    const removeItemFromCart = (cartItemToRemove) => {
        dispatch({
            type: CART_ACTION_TYPES.CLEAR_ITEM_FROM_CART,
            payload: removeCartItem(cartItems, cartItemToRemove),
        })
    }

    const clearItemFromCart = (cartItemToClear) => {
        dispatch({
            type: CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART,
            payload: clearCartItem(cartItems, cartItemToClear),
        })
    }

    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
            setCartTotal(newCartTotal);
    }, [cartItems]);

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        cartCount,
        cartTotal,
        removeItemFromCart,
        clearItemFromCart
    };

    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}