import {
    ALL_EXPERIENCES_REQUEST,
    ALL_EXPERIENCES_SUCCESS,
    ALL_EXPERIENCES_FAIL,
    ADMIN_EXPERIENCES_REQUEST,
    ADMIN_EXPERIENCES_SUCCESS,
    ADMIN_EXPERIENCES_FAIL,
    NEW_EXPERIENCE_REQUEST,
    NEW_EXPERIENCE_SUCCESS,
    NEW_EXPERIENCE_RESET,
    NEW_EXPERIENCE_FAIL,
    DELETE_EXPERIENCE_REQUEST,
    DELETE_EXPERIENCE_SUCCESS,
    DELETE_EXPERIENCE_RESET,
    DELETE_EXPERIENCE_FAIL,
    UPDATE_EXPERIENCE_REQUEST,
    UPDATE_EXPERIENCE_SUCCESS,
    UPDATE_EXPERIENCE_RESET,
    UPDATE_EXPERIENCE_FAIL,
    EXPERIENCE_DETAILS_REQUEST,
    EXPERIENCE_DETAILS_SUCCESS,
    EXPERIENCE_DETAILS_FAIL,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_RESET,
    NEW_REVIEW_FAIL,
    GET_REVIEWS_REQUEST,
    GET_REVIEWS_SUCCESS,
    GET_REVIEWS_FAIL,
    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_RESET,
    DELETE_REVIEW_FAIL,
    MY_EXPERIENCES_REQUEST,
    MY_EXPERIENCES_SUCCESS,
    MY_EXPERIENCES_FAIL,
    CLEAR_ERRORS

} from '../constants/experienceConstants'

export const experiencesReducer = (state = { experiences: [] }, action) => {
    switch (action.type) {
        case ALL_EXPERIENCES_REQUEST:
        case ADMIN_EXPERIENCES_REQUEST:
            return {
                loading: true,
                experiences: []
            }

        case ALL_EXPERIENCES_SUCCESS:
            return {
                loading: false,
                experiences: action.payload.experiences,
                experiencesCount: action.payload.experiencesCount,
                resPerPage: action.payload.resPerPage,
                filteredExperienceCount: action.payload.filteredExperienceCount
            }

        case ADMIN_EXPERIENCES_SUCCESS:
            return {
                loading: false,
                experiences: action.payload
            }

        case ALL_EXPERIENCES_FAIL:
        case ADMIN_EXPERIENCES_FAIL:
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

export const newExperienceReducer = (state = { experience: {} }, action) => {
    switch (action.type) {

        case NEW_EXPERIENCE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_EXPERIENCE_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                experience: action.payload.experience
            }

        case NEW_EXPERIENCE_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_EXPERIENCE_RESET:
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

export const experienceReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_EXPERIENCE_REQUEST:
        case UPDATE_EXPERIENCE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_EXPERIENCE_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_EXPERIENCE_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_EXPERIENCE_FAIL:
        case UPDATE_EXPERIENCE_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_EXPERIENCE_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_EXPERIENCE_RESET:
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

export const experienceDetailsReducer = (state = { experience: {} }, action) => {
    switch (action.type) {

        case EXPERIENCE_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case EXPERIENCE_DETAILS_SUCCESS:
            return {
                loading: false,
                experience: action.payload
            }

        case EXPERIENCE_DETAILS_FAIL:
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

export const newReviewReducer = (state = {}, action) => {
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

export const experienceReviewsReducer = (state = { review: [] }, action) => {
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

export const reviewReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_REVIEW_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_REVIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case DELETE_REVIEW_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_REVIEW_RESET:
            return {
                ...state,
                isDeleted: false
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

export const myExperiencesReducer = (state = { experiences: [] }, action) => {
    switch (action.type) {

        case MY_EXPERIENCES_REQUEST:
            return {
                loading: true
            }

        case MY_EXPERIENCES_SUCCESS:
            return {
                loading: false,
                experiences: action.payload
            }

        case MY_EXPERIENCES_FAIL:
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