import { GET_ERRORS } from './types'

// Create Message
export const createMessage = (msg, status) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status }
    }
}

export const returnErrors = (msg, status) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status },
    };
};