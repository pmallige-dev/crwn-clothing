import { createContext, useState, useEffect } from "react";
import SHOP_DATA from '../shopdata.js';

//As the actual value you want to access
export const ProductsContext = createContext({
    products: [],

});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const value = { products };

    return (<ProductsContext.Provider value={value}>{ children }</ProductsContext.Provider>)
}