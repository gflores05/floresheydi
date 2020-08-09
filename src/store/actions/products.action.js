import * as actionTypes from './actionTypes';

export const loadProducts = (search) => {
    return {
        type: actionTypes.PRODUCTS_LOAD,
        search
    }
};

export const loadProductsSuccess = (list) => {
    return {
        type: actionTypes.PRODUCTS_LOAD_SUCCESS,
        list
    }
};
