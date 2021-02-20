import { CREATE_MESSAGE, GET_ERRORS } from './types'

// Create Message
export const createMessage = (msg, status) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status }
    }
}