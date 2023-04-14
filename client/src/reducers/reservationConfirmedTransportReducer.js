import {add} from "date-fns";

const initialState= {
    transport: {},
    arrivalDate: add(new Date(), {days:1}), // Tommorow
    departureDate: add(new Date(), {days:2}),
    clientsCount: '',
    comment: '',
}

const reservationConfirmedTransportReducer  =(state= initialState, action)=>{
    switch (action.type){
        case 'SET_RESERVATION_CHOSEN_TRANSPORT':{
            return {...state,
                transport: action.transport
            }
        }
        case 'SET_RESERVATION_ARRIVAL_DATE_TRANSPORT':{
            return {...state,
                arrivalDate: action.arrivalDate
            }
        }
        case 'SET_RESERVATION_DEPARTURE_DATE_TRANSPORT':{
            return {...state,
                departureDate: action.departureDate
            }
        }
        case 'SET_RESERVATION_CLIENTS_COUNT_TRANSPORT':{
            return {...state,
                clientsCount: action.clientsCount
            }
        }case 'SET_RESERVATION_COMMENT_TRANSPORT':{
            return {...state,
                comment: action.comment
            }
        }
        case 'SET_RESERVATION_CONFIRMED_TRANSPORT':{
            return action.data;
        }
        case 'RESET_RESERVATION_CONFIRMED_TRANSPORT':{
            return initialState;
        }
        default:
            return state;
    }
}

export default reservationConfirmedTransportReducer