import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import { authReducer, userReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer  } from './reducers/userReducers';
import { experiencesReducer, newExperienceReducer, experienceReducer, experienceDetailsReducer, newReviewReducer, experienceReviewsReducer, reviewReducer, myExperiencesReducer  } from './reducers/experienceReducers'
import { lodgingsReducer, newLodgingReducer, lodgingReducer, lodgingDetailsReducer, newReview1Reducer, lodgingReviewsReducer, myLodgingsReducer } from './reducers/lodgingReducers';
import { restaurantsReducer, newRestaurantReducer, restaurantReducer, restaurantDetailsReducer, newReview2Reducer, restaurantReviewsReducer, myRestaurantsReducer   } from './reducers/restaurantReducers';
import { transportsReducer, newTransportReducer, transportReducer, transportDetailsReducer, newReview3Reducer, transportReviewsReducer, myTransportsReducer   } from './reducers/transportReducers';
import { cartReducer, cartLodgingReducer, cartTransportReducer, cartRestaurantReducer } from './reducers/favouriteReducers'
import reservationConfirmedLodgingReducer from "./reducers/reservationConfirmedLodgingReducer";
import reservationConfirmedRestaurantReducer from "./reducers/reservationConfirmedRestaurantReducer";
import reservationConfirmedTransportReducer from "./reducers/reservationConfirmedTransportReducer";
import reservationTotalReducer from "./reducers/reservationTotalReducer";


const reducer = combineReducers({

     auth: authReducer,
     user: userReducer,
     allUsers: allUsersReducer,
     userDetails: userDetailsReducer,
     forgotPassword: forgotPasswordReducer,

     experiences: experiencesReducer,
     experienceDetails: experienceDetailsReducer,
     newExperience: newExperienceReducer,
     experience: experienceReducer,
     experienceReviews: experienceReviewsReducer,
     review: reviewReducer,
     newReview: newReviewReducer,
     listExperience: myExperiencesReducer,


     lodgings : lodgingsReducer,
     lodgingDetails: lodgingDetailsReducer,
     newLodging: newLodgingReducer,
     lodging: lodgingReducer,
     review1: newReview1Reducer,
     lodgingReviews: lodgingReviewsReducer,
     listLodging: myLodgingsReducer,


     restaurants : restaurantsReducer,
     restaurantDetails: restaurantDetailsReducer,
     newRestaurant: newRestaurantReducer,
     restaurant: restaurantReducer,
     review2: newReview2Reducer,
     restaurantReviews: restaurantReviewsReducer,
     listRestaurant: myRestaurantsReducer,


     transports : transportsReducer,
     transportDetails: transportDetailsReducer,
     newTransport: newTransportReducer,
     transport: transportReducer,
     review3: newReview3Reducer,
     transportReviews: transportReviewsReducer,
     listTransport: myTransportsReducer,

     cart: cartReducer,
     cartLodging: cartLodgingReducer,
     cartTransport: cartTransportReducer,
     cartRestaurant: cartRestaurantReducer,




     reservationConfirmedLodging: reservationConfirmedLodgingReducer,
     reservationConfirmedRestaurant: reservationConfirmedRestaurantReducer,
     reservationConfirmedTransport:reservationConfirmedTransportReducer,
     reservationTotal: reservationTotalReducer,
     
    
 })


 let initialState = {
    cart: {
       cartItems: localStorage.getItem('cartItems')
           ? JSON.parse(localStorage.getItem('cartItems'))
           : [],   
       shippingInfo: localStorage.getItem('shippingInfo')
           ? JSON.parse(localStorage.getItem('shippingInfo'))
           : {}
   },
   cartLodging: {
    cartLodging: localStorage.getItem('cartLodging')
        ? JSON.parse(localStorage.getItem('cartLodging'))
        : []    
    },
    cartTransport: {
        cartTransport: localStorage.getItem('cartTransport')
            ? JSON.parse(localStorage.getItem('cartTransport'))
            : []    
    },
    cartRestaurant: {
        cartRestaurant: localStorage.getItem('cartRestaurant')
            ? JSON.parse(localStorage.getItem('cartRestaurant'))
            : []    
    },
    
 }

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store;