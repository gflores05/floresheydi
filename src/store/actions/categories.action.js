import * as actionTypes from './actionTypes';

export const loadCategories = () => {
    return {
        type: actionTypes.CATEGORIES_LOAD
    }
};

export const setCategories = (categories) => {
    return {
        type: actionTypes.CATEGORIES_LOADED,
        categories: categories
    }
};