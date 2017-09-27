import { combineReducers } from 'redux'

function orderType(state = '', action) {
    switch(action.type) {
        case 'SET_ORDER_TYPE':
            return action.orderType
        default:
            return state
    }
}

function legs(state = [], action) {
    switch(action.type) {
        case 'ADD_LEG':
            return [...state, action.leg]
        default:
            return state
    }
}

const app = combineReducers({
    orderType,
    legs
})

export default app