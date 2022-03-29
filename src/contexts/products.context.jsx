import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

//import SHOP_DATA from '../shopdata.js';

//As the actual value you want to access
export const ProductsContext = createContext({
    products: [],

});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    //This useEffect has to be called only once sinec this will add all the data into the DB.
    //We are calling this here in frontend since we dont have a backend
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, [])
    const value = { products };

    return (<ProductsContext.Provider value={value}>{ children }</ProductsContext.Provider>)
}