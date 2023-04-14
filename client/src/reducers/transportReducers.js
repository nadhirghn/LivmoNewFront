import {
    ALL_TRANSPORTS_REQUEST,
    ALL_TRANSPORTS_SUCCESS,
    ALL_TRANSPORTS_FAIL,
    ADMIN_TRANSPORTS_REQUEST,
    ADMIN_TRANSPORTS_SUCCESS,
    ADMIN_TRANSPORTS_FAIL,
    NEW_TRANSPORT_REQUEST,
    NEW_TRANSPORT_SUCCESS,
    NEW_TRANSPORT_RESET,
    NEW_TRANSPORT_FAIL,
    DELETE_TRANSPORT_REQUEST,
    DELETE_TRANSPORT_SUCCESS,
    DELETE_TRANSPORT_RESET,
    DELETE_TRANSPORT_FAIL,
    UPDATE_TRANSPORT_REQUEST,
    UPDATE_TRANSPORT_SUCCESS,
    UPDATE_TRANSPORT_RESET,
    UPDATE_TRANSPORT_FAIL,
    TRANSPORT_DETAILS_REQUEST,
    TRANSPORT_DETAILS_SUCCESS,
    TRANSPORT_DETAILS_FAIL,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_RESET,
    NEW_REVIEW_FAIL,
    GET_REVIEWS_REQUEST,
    GET_REVIEWS_SUCCESS,
    GET_REVIEWS_FAIL,
    MY_TRANSPORTS_REQUEST,
    MY_TRANSPORTS_SUCCESS,
    MY_TRANSPORTS_FAIL,
    CLEAR_ERRORS

} from '../constants/transportConstants'

export const transportsReducer = (state = { transports: [] }, action) => {
    switch (action.type) {
        case ALL_TRANSPORTS_REQUEST:
        case ADMIN_TRANSPORTS_REQUEST:
            return {
                loading: true,
                transports: []
            }

        case ALL_TRANSPORTS_SUCCESS:
            return {
                loading: false,
                transports: action.payload.transports,
                transportsCount: action.payload.transportsCount,
                resPerPage: action.payload.resPerPage,
                filteredTransportCount: action.payload.filteredTransportCount
            }

        case ADMIN_TRANSPORTS_SUCCESS:
            return {
                loading: false,
                transports: action.payload
            }

        case ALL_TRANSPORTS_FAIL:
        case ADMIN_TRANSPORTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

export const newTransportReducer = (state = { transport: {} }, action) => {
    switch (action.type) {

        case NEW_TRANSPORT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_TRANSPORT_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                transport: action.payload.transport
            }

        case NEW_TRANSPORT_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_TRANSPORT_RESET:
            return {
                ...state,
                success: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const transportReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_TRANSPORT_REQUEST:
        case UPDATE_TRANSPORT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_TRANSPORT_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_TRANSPORT_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_TRANSPORT_FAIL:
        case UPDATE_TRANSPORT_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_TRANSPORT_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_TRANSPORT_RESET:
            return {
                ...state,
                isUpdated: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const transportDetailsReducer = (state = { transport: {} }, action) => {
    switch (action.type) {

        case TRANSPORT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case TRANSPORT_DETAILS_SUCCESS:
            return {
                loading: false,
                transport: action.payload
            }

        case TRANSPORT_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const newReview3Reducer = (state = {}, action) => {
    switch (action.type) {

        case NEW_REVIEW_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_REVIEW_SUCCESS:
            return {
                loading: false,
                success: action.payload
            }

        case NEW_REVIEW_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_REVIEW_RESET:
            return {
                ...state,
                success: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const transportReviewsReducer = (state = { review: [] }, action) => {
    switch (action.type) {

        case GET_REVIEWS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_REVIEWS_SUCCESS:
            return {
                loading: false,
                reviews: action.payload
            }

        case GET_REVIEWS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}


//

export const myTransportsReducer = (state = { transports: [] }, action) => {
    switch (action.type) {

        case MY_TRANSPORTS_REQUEST:
            return {
                loading: true
            }

        case MY_TRANSPORTS_SUCCESS:
            return {
                loading: false,
                transports: action.payload
            }

        case MY_TRANSPORTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}