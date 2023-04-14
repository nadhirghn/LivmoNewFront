import axios from 'axios'
import { ADD_TO_FAVOURITE, REMOVE_ITEM_FAVOURITE, SAVE_SHIPPING_INFO,
    ADD_LODGING_TO_FAVOURITE, REMOVE_LODGING_FAVOURITE,
    ADD_TRANSPORT_TO_FAVOURITE, REMOVE_TRANSPORT_FAVOURITE,
    ADD_RESTAURANT_TO_FAVOURITE, REMOVE_RESTAURANT_FAVOURITE

    } from '../constants/favouriteConstants'



//Experience
export const addItemToCart = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/experience/${id}`)

    dispatch({
        type: ADD_TO_FAVOURITE,
        payload: {
            experience: data.experience._id,
            name: data.experience.exptitle,
            theme: data.experience.theme,
            price: data.experience.price,
            place: data.experience.location,
            image: data.experience.YourIdeaImage[0].url,   
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeItemFromCart = (id) => async (dispatch, getState) => {

    dispatch({
        type: REMOVE_ITEM_FAVOURITE,
        payload: id
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

}


//Lodging
export const addLodgingToCart = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/lodging/${id}`)

    dispatch({
        type: ADD_LODGING_TO_FAVOURITE,
        payload: {
            lodging: data.lodging._id,
            title: data.lodging.title,
            lodgingType: data.lodging.lodgingType,
            pricepernight: data.lodging.pricepernight,
            address: data.lodging.address,
            image: data.lodging.images[0].url,   
        }
    })

    localStorage.setItem('cartLodging', JSON.stringify(getState().cartLodging.cartLodging))
}

export const removeLodgingFromCart = (id) => async (dispatch, getState) => {

    dispatch({
        type: REMOVE_LODGING_FAVOURITE,
        payload: id
    })

    localStorage.setItem('cartLodging', JSON.stringify(getState().cartLodging.cartLodging))

}


//Transport
export const addTransportToCart = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/transport/${id}`)

    dispatch({
        type: ADD_TRANSPORT_TO_FAVOURITE,
        payload: {
            transport: data.transport._id,
            name: data.transport.name,
            activity: data.transport.activity,
            pricepernight: data.transport.pricepernight,
            governorate: data.transport.governorate,
            image: data.transport.images[0].url,   
        }
    })

    localStorage.setItem('cartTransport', JSON.stringify(getState().cartTransport.cartTransport))
}

export const removeTransportFromCart = (id) => async (dispatch, getState) => {

    dispatch({
        type: REMOVE_TRANSPORT_FAVOURITE,
        payload: id
    })

    localStorage.setItem('cartTransport', JSON.stringify(getState().cartTransport.cartTransport))

}


//Restaurant
export const addRestaurantToCart = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/restaurant/${id}`)

    dispatch({
        type: ADD_RESTAURANT_TO_FAVOURITE,
        payload: {
            restaurant: data.restaurant._id,
            name: data.restaurant.restaurantName,
            activity: data.restaurant.restaurantType,
            pricepernight: data.restaurant.price,
            governorate: data.restaurant.address,
            image: data.restaurant.imagesPlat[0].url,   
        }
    })

    localStorage.setItem('cartRestaurant', JSON.stringify(getState().cartRestaurant.cartRestaurant))
}

export const removeRestaurantFromCart = (id) => async (dispatch, getState) => {

    dispatch({
        type: REMOVE_RESTAURANT_FAVOURITE,
        payload: id
    })

    localStorage.setItem('cartRestaurant', JSON.stringify(getState().cartRestaurant.cartRestaurant))

}
//

export const saveShippingInfo = (data) => async (dispatch) => {

    dispatch({
        type: SAVE_SHIPPING_INFO,
        payload: data
    })

    localStorage.setItem('shippingInfo', JSON.stringify(data))

}