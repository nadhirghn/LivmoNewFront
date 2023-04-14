import { ADD_TO_FAVOURITE, REMOVE_ITEM_FAVOURITE, SAVE_SHIPPING_INFO,
    ADD_LODGING_TO_FAVOURITE, REMOVE_LODGING_FAVOURITE,
    ADD_TRANSPORT_TO_FAVOURITE, REMOVE_TRANSPORT_FAVOURITE,
    ADD_RESTAURANT_TO_FAVOURITE, REMOVE_RESTAURANT_FAVOURITE} from '../constants/favouriteConstants'


//Experience
export const cartReducer = (state = { cartItems: [], shippingInfo: {} }, action) => {
    switch (action.type) {

        case ADD_TO_FAVOURITE:
            const item = action.payload;

            const isItemExist = state.cartItems.find(i => i.experience === item.experience)

            if (isItemExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(i => i.experience === isItemExist.experience ? item : i)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case REMOVE_ITEM_FAVOURITE:
            return {
                ...state,
                cartItems: state.cartItems.filter(i => i.experience !== action.payload)
            }


        case SAVE_SHIPPING_INFO:
            return {
                ...state,
                shippingInfo: action.payload
            }


        default:
            return state
    }
}

//Lodging
export const cartLodgingReducer = (state = { cartLodging: [], shippingInfo: {} }, action) => {
    switch (action.type) {

        case ADD_LODGING_TO_FAVOURITE:
            const item = action.payload;

            const isItemExist = state.cartLodging.find(i => i.lodging === item.lodging)

            if (isItemExist) {
                return {
                    ...state,
                    cartLodging: state.cartLodging.map(i => i.lodging === isItemExist.lodging ? item : i)
                }
            } else {
                return {
                    ...state,
                    cartLodging: [...state.cartLodging, item]
                }
            }

        case REMOVE_LODGING_FAVOURITE:
            return {
                ...state,
                cartLodging: state.cartLodging.filter(i => i.lodging !== action.payload)
            }


        case SAVE_SHIPPING_INFO:
            return {
                ...state,
                shippingInfo: action.payload
            }


        default:
            return state
    }
}


//Transport
export const cartTransportReducer = (state = { cartTransport: [], shippingInfo: {} }, action) => {
    switch (action.type) {

        case ADD_TRANSPORT_TO_FAVOURITE:
            const item = action.payload;

            const isItemExist = state.cartTransport.find(i => i.transport === item.transport)

            if (isItemExist) {
                return {
                    ...state,
                    cartTransport: state.cartTransport.map(i => i.transport === isItemExist.transport ? item : i)
                }
            } else {
                return {
                    ...state,
                    cartTransport: [...state.cartTransport, item]
                }
            }

        case REMOVE_RESTAURANT_FAVOURITE:
            return {
                ...state,
                cartTransport: state.cartTransport.filter(i => i.transport !== action.payload)
            }


        case SAVE_SHIPPING_INFO:
            return {
                ...state,
                shippingInfo: action.payload
            }


        default:
            return state
    }
}

//Restaurant
export const cartRestaurantReducer = (state = { cartRestaurant: [], shippingInfo: {} }, action) => {
    switch (action.type) {

        case ADD_RESTAURANT_TO_FAVOURITE:
            const item = action.payload;

            const isItemExist = state.cartRestaurant.find(i => i.restaurant === item.restaurant)

            if (isItemExist) {
                return {
                    ...state,
                    cartRestaurant: state.cartRestaurant.map(i => i.restaurant === isItemExist.restaurant ? item : i)
                }
            } else {
                return {
                    ...state,
                    cartRestaurant: [...state.cartRestaurant, item]
                }
            }

        case REMOVE_RESTAURANT_FAVOURITE:
            return {
                ...state,
                cartRestaurant: state.cartRestaurant.filter(i => i.restaurant !== action.payload)
            }


        case SAVE_SHIPPING_INFO:
            return {
                ...state,
                shippingInfo: action.payload
            }


        default:
            return state
    }
}