import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

//import SHOP_DATA from '../shopdata.js';

//As the actual value you want to access
export const CategoriesContext = createContext({
    categoriesMap: {},

});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    //This useEffect has to be called only once sinec this will add all the data into the DB.
    //We are calling this here in frontend since we dont have a backend
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, [])

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();   
    }, [])
    const value = { categoriesMap };

    return (<CategoriesContext.Provider value={value}>{ children }</CategoriesContext.Provider>)
}