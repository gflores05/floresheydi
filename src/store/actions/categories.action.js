import * as actionTypes from './actionTypes';

export const loadCategories = () => {
    return {
        type: actionTypes.CATEGORIES_LOAD
    }
};

export const setCategories = (list) => {
    return {
        type: actionTypes.CATEGORIES_LOADED,
        list
    }
};