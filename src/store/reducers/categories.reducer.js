import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utilities';

const initialState = {
    categories: []
}

const setCategoriesLoaded = (state, action) => {
    return updateObject(state, action);
}
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.CATEGORIES_LOADED:
            return setCategoriesLoaded(state, action);
        default: return state;
    }
};

export default reducer;