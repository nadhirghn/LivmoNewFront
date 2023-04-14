import {
    ALL_RESTAURANTS_REQUEST,
    ALL_RESTAURANTS_SUCCESS,
    ALL_RESTAURANTS_FAIL,
    ADMIN_RESTAURANTS_REQUEST,
    ADMIN_RESTAURANTS_SUCCESS,
    ADMIN_RESTAURANTS_FAIL,
    NEW_RESTAURANT_REQUEST,
    NEW_RESTAURANT_SUCCESS,
    NEW_RESTAURANT_RESET,
    NEW_RESTAURANT_FAIL,
    DELETE_RESTAURANT_REQUEST,
    DELETE_RESTAURANT_SUCCESS,
    DELETE_RESTAURANT_RESET,
    DELETE_RESTAURANT_FAIL,
    UPDATE_RESTAURANT_REQUEST,
    UPDATE_RESTAURANT_SUCCESS,
    UPDATE_RESTAURANT_RESET,
    UPDATE_RESTAURANT_FAIL,
    RESTAURANT_DETAILS_REQUEST,
    RESTAURANT_DETAILS_SUCCESS,
    RESTAURANT_DETAILS_FAIL,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_RESET,
    NEW_REVIEW_FAIL,
    GET_REVIEWS_REQUEST,
    GET_REVIEWS_SUCCESS,
    GET_REVIEWS_FAIL,
    MY_RESTAURANTS_REQUEST,
    MY_RESTAURANTS_SUCCESS,
    MY_RESTAURANTS_FAIL,
    CLEAR_ERRORS

} from '../constants/restaurantConstants'

export const restaurantsReducer = (state = { restaurants: [] }, action) => {
    switch (action.type) {
        case ALL_RESTAURANTS_REQUEST:
        case ADMIN_RESTAURANTS_REQUEST:
            return {
                loading: true,
                restaurants: []
            }

        case ALL_RESTAURANTS_SUCCESS:
            return {
                loading: false,
                restaurants: action.payload.restaurants,
                restaurantsCount: action.payload.restaurantsCount,
                resPerPage: action.payload.resPerPage,
                filteredRestaurantCount: action.payload.filteredRestaurantCount
            }

        case ADMIN_RESTAURANTS_SUCCESS:
            return {
                loading: false,
                restaurants: action.payload
            }

        case ALL_RESTAURANTS_FAIL:
        case ADMIN_RESTAURANTS_FAIL:
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

export const newRestaurantReducer = (state = { restaurant: {} }, action) => {
    switch (action.type) {

        case NEW_RESTAURANT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_RESTAURANT_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                restaurant: action.payload.restaurant
            }

        case NEW_RESTAURANT_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_RESTAURANT_RESET:
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

export const restaurantReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_RESTAURANT_REQUEST:
        case UPDATE_RESTAURANT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_RESTAURANT_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_RESTAURANT_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_RESTAURANT_FAIL:
        case UPDATE_RESTAURANT_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_RESTAURANT_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_RESTAURANT_RESET:
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

export const restaurantDetailsReducer = (state = { restaurant: {} }, action) => {
    switch (action.type) {

        case RESTAURANT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case RESTAURANT_DETAILS_SUCCESS:
            return {
                loading: false,
                restaurant: action.payload
            }

        case RESTAURANT_DETAILS_FAIL:
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


export const newReview2Reducer = (state = {}, action) => {
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

export const restaurantReviewsReducer = (state = { review: [] }, action) => {
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

export const myRestaurantsReducer = (state = { restaurants: [] }, action) => {
    switch (action.type) {

        case MY_RESTAURANTS_REQUEST:
            return {
                loading: true
            }

        case MY_RESTAURANTS_SUCCESS:
            return {
                loading: false,
                restaurants: action.payload
            }

        case MY_RESTAURANTS_FAIL:
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