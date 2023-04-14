

// --- Reservation actions ---

// *** Chosen Lodging ***
export const setReservationChosenLodging = (chosenLodging)=>{
    return{
        type: 'SET_RESERVATION_CHOSEN_LODGING',
        chosenLodging: chosenLodging
    }
}
export const setReservationArrivalDateLodging= (arrivalDate)=>{
    return{
        type: 'SET_RESERVATION_ARRIVAL_DATE_LODGING',
        arrivalDate: arrivalDate
    }
}
export const setReservationDepartureDateLodging= (departureDate)=>{
    return{
        type: 'SET_RESERVATION_DEPARTURE_DATE_LODGING',
        departureDate: departureDate
    }
}
export const setReservationClientsCountLodging= (clientsCount)=>{
    return{
        type: 'SET_RESERVATION_CLIENTS_COUNT_LODGING',
        clientsCount: clientsCount
    }
}
export const setReservationCommentLodging= (comment)=>{
    return{
        type: 'SET_RESERVATION_COMMENT_LODGING',
        comment: comment
    }
}
export const resetReservationConfirmedLodging= ()=>{
    return{
        type: 'RESET_RESERVATION_CONFIRMED_LODGING',
    }
}

// *** Chosen Restaurant ***
export const setReservationChosenRestaurant = (chosenRestaurant)=>{
    return{
        type: 'SET_RESERVATION_CHOSEN_RESTAURANT',
        chosenRestaurant: chosenRestaurant
    }
}
export const setReservationArrivalDateRestaurant= (arrivalDate)=>{
    return{
        type: 'SET_RESERVATION_ARRIVAL_DATE_RESTAURANT',
        arrivalDate: arrivalDate
    }
}
export const setReservationDepartureDateRestaurant= (departureDate)=>{
    return{
        type: 'SET_RESERVATION_DEPARTURE_DATE_RESTAURANT',
        departureDate: departureDate
    }
}
export const setReservationClientsCountRestaurant= (clientsCount)=>{
    return{
        type: 'SET_RESERVATION_CLIENTS_COUNT_RESTAURANT',
        clientsCount: clientsCount
    }
}
export const setReservationCommentRestaurant= (comment)=>{
    return{
        type: 'SET_RESERVATION_COMMENT_RESTAURANT',
        comment: comment
    }
}
export const resetReservationConfirmedRestaurant= ()=>{
    return{
        type: 'RESET_RESERVATION_CONFIRMED_RESTAURANT',
    }
}

// *** Chosen Transport ***
export const setReservationChosenTransport = (chosenTransport)=>{
    return{
        type: 'SET_RESERVATION_CHOSEN_TRANSPORT',
        transport: chosenTransport
    }
}
export const setReservationArrivalDateTransport= (arrivalDate)=>{
    return{
        type: 'SET_RESERVATION_ARRIVAL_DATE_TRANSPORT',
        arrivalDate: arrivalDate
    }
}
export const setReservationDepartureDateTransport= (departureDate)=>{
    return{
        type: 'SET_RESERVATION_DEPARTURE_DATE_TRANSPORT',
        departureDate: departureDate
    }
}
export const setReservationClientsCountTransport= (clientsCount)=>{
    return{
        type: 'SET_RESERVATION_CLIENTS_COUNT_TRANSPORT',
        clientsCount: clientsCount
    }
}
export const setReservationCommentTransport= (comment)=>{
    return{
        type: 'SET_RESERVATION_COMMENT_TRANSPORT',
        comment: comment
    }
}
export const resetReservationConfirmedTransport= ()=>{
    return{
        type: 'RESET_RESERVATION_CONFIRMED_TRANSPORT',
    }
}

// *** Total ***
export const setReservationTotalMoney= (newTotal)=>{
    return{
        type: 'SET_RESERVATION_TOTAL_MONEY',
        total: newTotal
    }
}

export const setReservationTotalCurrency= (currency)=>{
    return{
        type: 'SET_RESERVATION_TOTAL_CURRENCY',
        currency: currency
    }
}

export const addReservationTotalMoney= (value)=>{
    return{
        type: 'ADD_RESERVATION_TOTAL_MONEY',
        value: value
    }
}
export const subtractReservationTotalMoney= (value)=>{
    return{
        type: 'SUBTRACT_RESERVATION_TOTAL_MONEY',
        value: value
    }
}