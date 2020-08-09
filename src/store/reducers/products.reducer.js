import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utilities';

const initialState = {
    list: [],
    search: null
}

const productsLoadSuccess = (state, action) => {
    return updateObject(state, action);
}
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.PRODUCTS_LOAD_SUCCESS:
            return productsLoadSuccess(state, action);
        default: return state;
    }
};

export default reducer;
