import {
    ALL_LODGINGS_REQUEST,
    ALL_LODGINGS_SUCCESS,
    ALL_LODGINGS_FAIL,
    ADMIN_LODGINGS_REQUEST,
    ADMIN_LODGINGS_SUCCESS,
    ADMIN_LODGINGS_FAIL,
    NEW_LODGING_REQUEST,
    NEW_LODGING_SUCCESS,
    NEW_LODGING_RESET,
    NEW_LODGING_FAIL,
    DELETE_LODGING_REQUEST,
    DELETE_LODGING_SUCCESS,
    DELETE_LODGING_RESET,
    DELETE_LODGING_FAIL,
    UPDATE_LODGING_REQUEST,
    UPDATE_LODGING_SUCCESS,
    UPDATE_LODGING_RESET,
    UPDATE_LODGING_FAIL,
    LODGING_DETAILS_REQUEST,
    LODGING_DETAILS_SUCCESS,
    LODGING_DETAILS_FAIL,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_RESET,
    NEW_REVIEW_FAIL,
    GET_REVIEWS_REQUEST,
    GET_REVIEWS_SUCCESS,
    GET_REVIEWS_FAIL,
    MY_LODGINGS_REQUEST,
    MY_LODGINGS_SUCCESS,
    MY_LODGINGS_FAIL,
    CLEAR_ERRORS

} from '../constants/lodgingConstants'

export const lodgingsReducer = (state = { lodgings: [] }, action) => {
    switch (action.type) {
        case ALL_LODGINGS_REQUEST:
        case ADMIN_LODGINGS_REQUEST:
            return {
                loading: true,
                lodgings: []
            }

        case ALL_LODGINGS_SUCCESS:
            return {
                loading: false,
                lodgings: action.payload.lodgings,
                lodgingsCount: action.payload.lodgingsCount,
                resPerPage: action.payload.resPerPage,
                filteredLodgingCount: action.payload.filteredlodgingCount
            }

        case ADMIN_LODGINGS_SUCCESS:
            return {
                loading: false,
                lodgings: action.payload
            }

        case ALL_LODGINGS_FAIL:
        case ADMIN_LODGINGS_FAIL:
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

export const newLodgingReducer = (state = { lodging: {} }, action) => {
    switch (action.type) {

        case NEW_LODGING_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_LODGING_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                lodging: action.payload.lodging
            }

        case NEW_LODGING_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_LODGING_RESET:
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

export const lodgingReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_LODGING_REQUEST:
        case UPDATE_LODGING_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_LODGING_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_LODGING_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_LODGING_FAIL:
        case UPDATE_LODGING_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_LODGING_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_LODGING_RESET:
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

export const lodgingDetailsReducer = (state = { lodging: {} }, action) => {
    switch (action.type) {

        case LODGING_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case LODGING_DETAILS_SUCCESS:
            return {
                loading: false,
                lodging: action.payload
            }

        case LODGING_DETAILS_FAIL:
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

export const newReview1Reducer = (state = {}, action) => {
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

export const lodgingReviewsReducer = (state = { review: [] }, action) => {
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



export const myLodgingsReducer = (state = { lodgings: [] }, action) => {
    switch (action.type) {

        case MY_LODGINGS_REQUEST:
            return {
                loading: true
            }

        case MY_LODGINGS_SUCCESS:
            return {
                loading: false,
                lodgings: action.payload
            }

        case MY_LODGINGS_FAIL:
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