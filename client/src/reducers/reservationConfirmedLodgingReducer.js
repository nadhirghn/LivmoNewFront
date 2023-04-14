import {add} from "date-fns";

const initialState= {
    lodging: {},
    arrivalDate: add(new Date(), {days:1}), // Tommorow
    departureDate: add(new Date(), {days:2}),
    clientsCount: '',
    comment: '',
}

const reservationConfirmedLodgingReducer  =(state= initialState, action)=>{
    switch (action.type){
        case 'SET_RESERVATION_CHOSEN_LODGING':{
            return {...state,
                lodging: action.chosenLodging
            }
        }
        case 'SET_RESERVATION_ARRIVAL_DATE_LODGING':{
            return {...state,
                arrivalDate: action.arrivalDate
            }
        }
        case 'SET_RESERVATION_DEPARTURE_DATE_LODGING':{
            return {...state,
                departureDate: action.departureDate
            }
        }
        case 'SET_RESERVATION_CLIENTS_COUNT_LODGING':{
            return {...state,
                clientsCount: action.clientsCount
            }
        }case 'SET_RESERVATION_COMMENT_LODGING':{
            return {...state,
                comment: action.comment
            }
        }
        case 'SET_RESERVATION_CONFIRMED_LODGING':{
            return action.data;
        }
        case 'RESET_RESERVATION_CONFIRMED_LODGING':{
            return initialState;
        }
        default:
            return state;
    }
}

export default reservationConfirmedLodgingReducer