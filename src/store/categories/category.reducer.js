import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const CATEGORIES_ITITIAL_STATE = {
    categoriesMap: {}
}

export const categoriesReducer = (state = CATEGORIES_ITITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch(type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
            return {
                ...state,
                categoriesMap :payload
            };
        default:
            return state;
    }
}