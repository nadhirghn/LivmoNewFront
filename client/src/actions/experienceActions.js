import axios from 'axios';

import {
    ALL_EXPERIENCES_REQUEST,
    ALL_EXPERIENCES_SUCCESS,
    ALL_EXPERIENCES_FAIL,
    ADMIN_EXPERIENCES_REQUEST,
    ADMIN_EXPERIENCES_SUCCESS,
    ADMIN_EXPERIENCES_FAIL,
    NEW_EXPERIENCE_REQUEST,
    NEW_EXPERIENCE_SUCCESS,
    NEW_EXPERIENCE_FAIL,
    DELETE_EXPERIENCE_REQUEST,
    DELETE_EXPERIENCE_SUCCESS,
    DELETE_EXPERIENCE_FAIL,
    UPDATE_EXPERIENCE_REQUEST,
    UPDATE_EXPERIENCE_SUCCESS,
    UPDATE_EXPERIENCE_FAIL,
    EXPERIENCE_DETAILS_REQUEST,
    EXPERIENCE_DETAILS_SUCCESS,
    EXPERIENCE_DETAILS_FAIL,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
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

export const getExperiences = (keyword = '', currentPage = 1, price, category, rating = 0) => async (dispatch) => {
    try {

        dispatch({ type: ALL_EXPERIENCES_REQUEST })

        let link = `/api/v1/experiences?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&ratings[gte]=${rating}`

        if (category) {
            link = `/api/v1/experience?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&category=${category}&ratings[gte]=${rating}`
        }

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_EXPERIENCES_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_EXPERIENCES_FAIL,
            payload: error.response.data.message
        })
    }
}

export const newExperience = (experienceData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_EXPERIENCE_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/v1/host/experience/new`, experienceData, config)

        dispatch({
            type: NEW_EXPERIENCE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_EXPERIENCE_FAIL,
            payload: error.response.data.message
        })
    }
}

// Delete experience (Host)
export const deleteExperience = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_EXPERIENCE_REQUEST })

        const { data } = await axios.delete(`/api/v1/host/experience/${id}`)

        dispatch({
            type: DELETE_EXPERIENCE_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_EXPERIENCE_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update Experience (host)
export const updateExperience = (id, experienceData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_EXPERIENCE_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/host/experience/${id}`, experienceData, config)

        dispatch({
            type: UPDATE_EXPERIENCE_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_EXPERIENCE_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getSingleExperience = (id) => async (dispatch) => {
    try {

        dispatch({ type: EXPERIENCE_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/v1/experience/${id}`)

        dispatch({
            type: EXPERIENCE_DETAILS_SUCCESS,
            payload: data.experience
        })

    } catch (error) {
        dispatch({
            type: EXPERIENCE_DETAILS_FAIL,
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

        const { data } = await axios.put(`/api/v1/review`, reviewData, config)

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


export const getHostExperiences = () => async (dispatch) => {
    try {

        dispatch({ type: ADMIN_EXPERIENCES_REQUEST })

        const { data } = await axios.get(`/api/v1/host/experiences`)

        dispatch({
            type: ADMIN_EXPERIENCES_SUCCESS,
            payload: data.experiences
        })

    } catch (error) {

        dispatch({
            type: ADMIN_EXPERIENCES_FAIL,
            payload: error.response.data.message
        })
    }
}

// Get experience reviews
export const getExperienceReviews = (id) => async (dispatch) => {
    try {

        dispatch({ type: GET_REVIEWS_REQUEST })

        const { data } = await axios.get(`/api/v1/reviews?id=${id}`)

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

// Delete experience review
export const deleteReview = (id, experienceId) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_REVIEW_REQUEST })

        const { data } = await axios.delete(`/api/v1/reviews?id=${id}&experienceId=${experienceId}`)

        dispatch({
            type: DELETE_REVIEW_SUCCESS,
            payload: data.success
        })

    } catch (error) {

        console.log(error.response);

        dispatch({
            type: DELETE_REVIEW_FAIL,
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

// Get curretly logged in host experiences
export const myExperiences = () => async (dispatch) => {
    try {

        dispatch({ type: MY_EXPERIENCES_REQUEST });

        const { data } = await axios.get('/api/v1/experiences/me')

        dispatch({
            type: MY_EXPERIENCES_SUCCESS,
            payload: data.experiences
        })

    } catch (error) {
        dispatch({
            type: MY_EXPERIENCES_FAIL,
            payload: error.response.data.message
        })
    }
}