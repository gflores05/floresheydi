import * as actionTypes from './actionTypes';

export const sendContact = (contact) => {
    return {
        type: actionTypes.CONTACT_SEND,
        contact
    }
};

export const sendContactSuccess = () => {
    return {
        type: actionTypes.CONTACT_SEND_SUCCESS,
        result: {
            success: true,
            message: 'Tu mensaje ha sido enviado. Nos contactaremos contigo lo mas pronto posible'
        }
    }
};

export const sendContactFail = () => {
    return {
        type: actionTypes.CONTACT_SEND_FAIL,
        result: {
            success: false,
            message: 'Lo sentimos, ha habido un error al enviar tu mensaje'
        }
    }
};
