import axios from 'axios';

import {
    ALL_TRANSPORTS_REQUEST,
    ALL_TRANSPORTS_SUCCESS,
    ALL_TRANSPORTS_FAIL,
    ADMIN_TRANSPORTS_REQUEST,
    ADMIN_TRANSPORTS_SUCCESS,
    ADMIN_TRANSPORTS_FAIL,
    NEW_TRANSPORT_REQUEST,
    NEW_TRANSPORT_SUCCESS,
    NEW_TRANSPORT_FAIL,
    DELETE_TRANSPORT_REQUEST,
    DELETE_TRANSPORT_SUCCESS,
    DELETE_TRANSPORT_FAIL,
    UPDATE_TRANSPORT_REQUEST,
    UPDATE_TRANSPORT_SUCCESS,
    UPDATE_TRANSPORT_FAIL,
    TRANSPORT_DETAILS_REQUEST,
    TRANSPORT_DETAILS_SUCCESS,
    TRANSPORT_DETAILS_FAIL,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_FAIL,
    GET_REVIEWS_REQUEST,
    GET_REVIEWS_SUCCESS,
    GET_REVIEWS_FAIL,
    MY_TRANSPORTS_REQUEST,
    MY_TRANSPORTS_SUCCESS,
    MY_TRANSPORTS_FAIL,
    CLEAR_ERRORS


} from '../constants/transportConstants'

export const getTransports = (keyword = '', currentPage = 1, price, category, rating = 0) => async (dispatch) => {
    try {

        dispatch({ type: ALL_TRANSPORTS_REQUEST })

        let link = `/api/v1/transport?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&ratings[gte]=${rating}`

        if (category) {
            link = `/api/v1/transport?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&category=${category}&ratings[gte]=${rating}`
        }

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_TRANSPORTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_TRANSPORTS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const newTransport = (transportData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_TRANSPORT_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/v1/trader/transport/new`, transportData, config)

        dispatch({
            type: NEW_TRANSPORT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_TRANSPORT_FAIL,
            payload: error.response.data.message
        })
    }
}


export const deleteTransport = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_TRANSPORT_REQUEST })

        const { data } = await axios.delete(`/api/v1/merchant/transport/${id}`)

        dispatch({
            type: DELETE_TRANSPORT_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_TRANSPORT_FAIL,
            payload: error.response.data.message
        })
    }
}


export const updateTransport = (id, transportData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_TRANSPORT_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/trader/transport/${id}`, transportData, config)

        dispatch({
            type: UPDATE_TRANSPORT_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_TRANSPORT_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getSingleTransport = (id) => async (dispatch) => {
    try {

        dispatch({ type: TRANSPORT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/v1/transport/${id}`)

        dispatch({
            type: TRANSPORT_DETAILS_SUCCESS,
            payload: data.transport
        })

    } catch (error) {
        dispatch({
            type: TRANSPORT_DETAILS_FAIL,
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

        const { data } = await axios.put(`/api/v1/transport/review`, reviewData, config)

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

        const { data } = await axios.get(`/api/v1/transport/reviews?id=${id}`)

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



// Get curretly logged in trader transports
export const myTransports = () => async (dispatch) => {
    try {

        dispatch({ type: MY_TRANSPORTS_REQUEST });

        const { data } = await axios.get('/api/v1/transports/me')

        dispatch({
            type: MY_TRANSPORTS_SUCCESS,
            payload: data.transports
        })

    } catch (error) {
        dispatch({
            type: MY_TRANSPORTS_FAIL,
            payload: error.response.data.message
        })
    }
}


export const getTraderTransports = () => async (dispatch) => {
    try {

        dispatch({ type: ADMIN_TRANSPORTS_REQUEST })

        const { data } = await axios.get(`/api/v1/trader/transports`)

        dispatch({
            type: ADMIN_TRANSPORTS_SUCCESS,
            payload: data.transports
        })

    } catch (error) {

        dispatch({
            type: ADMIN_TRANSPORTS_FAIL,
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

