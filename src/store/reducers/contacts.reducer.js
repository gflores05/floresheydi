import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utilities';

const initialState = {
    success: false,
    message: null
}

const contactSendResponse = (state, action) => {
    return updateObject(state, action.result);
}
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.CONTACT_SEND_SUCCESS:
            return contactSendResponse(state, action);
        case actionTypes.CONTACT_SEND_FAIL:
            return contactSendResponse(state, action);
        default: return state;
    }
};

export default reducer;