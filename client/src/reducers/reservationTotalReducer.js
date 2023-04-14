const currencies= [
    ['$', 0.33],
    ['€', 0.32],
    ['DT', 1]
]


const initialState={
    total: 240, //0, the total should start at 0, and when the experience is chosen, it's price adds up to the total
    currency: currencies[2]
}

const reservationTotalReducer= (state = initialState, action)=>{
    switch (action.type){
        case 'ADD_RESERVATION_TOTAL_MONEY':{
            return {...state,
                total: state.total+action.value
            }
        }
        case 'SUBTRACT_RESERVATION_TOTAL_MONEY':{
            return {...state,
                total: state.total-action.value
            }
        }
        case 'SET_RESERVATION_TOTAL_MONEY':{
            return {...state,
                total: action.total
            }
        }
        case 'SET_RESERVATION_TOTAL_CURRENCY':{
            return {...state,
                currency: currencies[action.currency]
            }
        }
        default:
            return state;
    }
}

export default reservationTotalReducer;