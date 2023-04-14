import axios from 'axios';

import {
    ALL_RESTAURANTS_REQUEST,
    ALL_RESTAURANTS_SUCCESS,
    ALL_RESTAURANTS_FAIL,
    ADMIN_RESTAURANTS_REQUEST,
    ADMIN_RESTAURANTS_SUCCESS,
    ADMIN_RESTAURANTS_FAIL,
    NEW_RESTAURANT_REQUEST,
    NEW_RESTAURANT_SUCCESS,
    NEW_RESTAURANT_FAIL,
    DELETE_RESTAURANT_REQUEST,
    DELETE_RESTAURANT_SUCCESS,
    DELETE_RESTAURANT_FAIL,
    UPDATE_RESTAURANT_REQUEST,
    UPDATE_RESTAURANT_SUCCESS,
    UPDATE_RESTAURANT_FAIL,
    RESTAURANT_DETAILS_REQUEST,
    RESTAURANT_DETAILS_SUCCESS,
    RESTAURANT_DETAILS_FAIL,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_FAIL,
    GET_REVIEWS_REQUEST,
    GET_REVIEWS_SUCCESS,
    GET_REVIEWS_FAIL,
    MY_RESTAURANTS_REQUEST,
    MY_RESTAURANTS_SUCCESS,
    MY_RESTAURANTS_FAIL,
    CLEAR_ERRORS


} from '../constants/restaurantConstants'

export const getRestaurants = (keyword = '', currentPage = 1, price, category, rating = 0) => async (dispatch) => {
    try {

        dispatch({ type: ALL_RESTAURANTS_REQUEST })

        let link = `/api/v1/restaurants?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&ratings[gte]=${rating}`

        if (category) {
            link = `/api/v1/restaurants?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&category=${category}&ratings[gte]=${rating}`
        }

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_RESTAURANTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_RESTAURANTS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const newRestaurant = (restaurantData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_RESTAURANT_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/v1/trader/restaurant/new`, restaurantData, config)

        dispatch({
            type: NEW_RESTAURANT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_RESTAURANT_FAIL,
            payload: error.response.data.message
        })
    }
}


export const deleteRestaurant = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_RESTAURANT_REQUEST })

        const { data } = await axios.delete(`/api/v1/merchant/restaurant/${id}`)

        dispatch({
            type: DELETE_RESTAURANT_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_RESTAURANT_FAIL,
            payload: error.response.data.message
        })
    }
}


export const updateRestaurant = (id, restaurantData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_RESTAURANT_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/trader/restaurant/${id}`, restaurantData, config)

        dispatch({
            type: UPDATE_RESTAURANT_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_RESTAURANT_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getSingleRestaurant = (id) => async (dispatch) => {
    try {

        dispatch({ type: RESTAURANT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/v1/restaurant/${id}`)

        dispatch({
            type: RESTAURANT_DETAILS_SUCCESS,
            payload: data.restaurant
        })

    } catch (error) {
        dispatch({
            type: RESTAURANT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}




export const getTraderRestaurants = () => async (dispatch) => {
    try {

        dispatch({ type: ADMIN_RESTAURANTS_REQUEST })

        const { data } = await axios.get(`/api/v1/trader/restaurants`)

        dispatch({
            type: ADMIN_RESTAURANTS_SUCCESS,
            payload: data.restaurants
        })

    } catch (error) {

        dispatch({
            type: ADMIN_RESTAURANTS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const newReview = (reviewData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_REVIEW_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/restaurant/review`, reviewData, config)

        dispatch({
            type: NEW_REVIEW_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: NEW_REVIEW_FAIL,
            payload: error.response.data.message
        })
    }
}

// Get restaurant reviews
export const getRestaurantReviews = (id) => async (dispatch) => {
    try {

        dispatch({ type: GET_REVIEWS_REQUEST })

        const { data } = await axios.get(`/api/v1/restaurant/reviews?id=${id}`)

        dispatch({
            type: GET_REVIEWS_SUCCESS,
            payload: data.reviews
        })

    } catch (error) {

        dispatch({
            type: GET_REVIEWS_FAIL,
            payload: error.response.data.message
        })
    }
}


// Get curretly logged in trader food
export const myRestaurants = () => async (dispatch) => {
    try {

        dispatch({ type: MY_RESTAURANTS_REQUEST });

        const { data } = await axios.get('/api/v1/restaurants/me')

        dispatch({
            type: MY_RESTAURANTS_SUCCESS,
            payload: data.restaurants
        })

    } catch (error) {
        dispatch({
            type: MY_RESTAURANTS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}

