import axios from 'axios';

import {
    ALL_LODGINGS_REQUEST,
    ALL_LODGINGS_SUCCESS,
    ALL_LODGINGS_FAIL,
    ADMIN_LODGINGS_REQUEST,
    ADMIN_LODGINGS_SUCCESS,
    ADMIN_LODGINGS_FAIL,
    NEW_LODGING_REQUEST,
    NEW_LODGING_SUCCESS,
    NEW_LODGING_FAIL,
    DELETE_LODGING_REQUEST,
    DELETE_LODGING_SUCCESS,
    DELETE_LODGING_FAIL,
    UPDATE_LODGING_REQUEST,
    UPDATE_LODGING_SUCCESS,
    UPDATE_LODGING_FAIL,
    LODGING_DETAILS_REQUEST,
    LODGING_DETAILS_SUCCESS,
    LODGING_DETAILS_FAIL,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_FAIL,
    GET_REVIEWS_REQUEST,
    GET_REVIEWS_SUCCESS,
    GET_REVIEWS_FAIL,
    MY_LODGINGS_REQUEST,
    MY_LODGINGS_SUCCESS,
    MY_LODGINGS_FAIL,
    CLEAR_ERRORS


} from '../constants/lodgingConstants'

export const getLodgings = (keyword = '', currentPage = 1, price, category, rating = 0) => async (dispatch) => {
    try {

        dispatch({ type: ALL_LODGINGS_REQUEST })

        let link = `/api/v1/lodgings?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&ratings[gte]=${rating}`

        if (category) {
            link = `/api/v1/lodgings?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&category=${category}&ratings[gte]=${rating}`
        }

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_LODGINGS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_LODGINGS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const newLodging = (logdingData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_LODGING_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/v1/trader/lodging/new`, logdingData, config)

        dispatch({
            type: NEW_LODGING_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_LODGING_FAIL,
            payload: error.response.data.message
        })
    }
}


export const deleteLodging = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_LODGING_REQUEST })

        const { data } = await axios.delete(`/api/v1/merchant/lodging/${id}`)

        dispatch({
            type: DELETE_LODGING_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_LODGING_FAIL,
            payload: error.response.data.message
        })
    }
}


export const updateLodging = (id, lodgingData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_LODGING_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/trader/lodging/${id}`, lodgingData, config)

        dispatch({
            type: UPDATE_LODGING_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_LODGING_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getSingleLodging = (id) => async (dispatch) => {
    try {

        dispatch({ type: LODGING_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/v1/lodging/${id}`)

        dispatch({
            type: LODGING_DETAILS_SUCCESS,
            payload: data.lodging
        })

    } catch (error) {
        dispatch({
            type: LODGING_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}




export const getTraderLodgings = () => async (dispatch) => {
    try {

        dispatch({ type: ADMIN_LODGINGS_REQUEST })

        const { data } = await axios.get(`/api/v1/trader/lodgings`)

        dispatch({
            type: ADMIN_LODGINGS_SUCCESS,
            payload: data.lodgings
        })

    } catch (error) {

        dispatch({
            type: ADMIN_LODGINGS_FAIL,
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

        const { data } = await axios.put(`/api/v1/lodging/review`, reviewData, config)

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

// Get lodging reviews
export const getLodgingReviews = (id) => async (dispatch) => {
    try {

        dispatch({ type: GET_REVIEWS_REQUEST })

        const { data } = await axios.get(`/api/v1/lodging/reviews?id=${id}`)

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

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}


// Get curretly logged in trader lodgings
export const myLodgings = () => async (dispatch) => {
    try {

        dispatch({ type: MY_LODGINGS_REQUEST });

        const { data } = await axios.get('/api/v1/lodgings/me')

        dispatch({
            type: MY_LODGINGS_SUCCESS,
            payload: data.lodgings
        })

    } catch (error) {
        dispatch({
            type: MY_LODGINGS_FAIL,
            payload: error.response.data.message
        })
    }
}