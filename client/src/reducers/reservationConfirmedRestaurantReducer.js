import {add} from "date-fns";

const initialState= {
    restaurant: {},
    arrivalDate: add(new Date(), {days:1}), // Tommorow
    departureDate: add(new Date(), {days:2}),
    clientsCount: '',
    comment: '',
}

const reservationConfirmedRestaurantReducer  =(state= initialState, action)=>{
    switch (action.type){
        case 'SET_RESERVATION_CHOSEN_RESTAURANT':{
            return {...state,
                restaurant: action.chosenRestaurant
            }
        }
        case 'SET_RESERVATION_ARRIVAL_DATE_RESTAURANT':{
            return {...state,
                arrivalDate: action.arrivalDate
            }
        }
        case 'SET_RESERVATION_DEPARTURE_DATE_RESTAURANT':{
            return {...state,
                departureDate: action.departureDate
            }
        }
        case 'SET_RESERVATION_CLIENTS_COUNT_RESTAURANT':{
            return {...state,
                clientsCount: action.clientsCount
            }
        }case 'SET_RESERVATION_COMMENT_RESTAURANT':{
            return {...state,
                comment: action.comment
            }
        }
        case 'RESET_RESERVATION_CONFIRMED_RESTAURANT':{
            return initialState;
        }
        default:
            return state;
    }
}

export default reservationConfirmedRestaurantReducer