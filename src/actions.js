export const setOrderType = orderType => {
    return {
        type: 'SET_ORDER_TYPE',
        orderType
    }
}

export const addLeg = leg => {
    return {
        type: 'ADD_LEG',
        leg
    }
}