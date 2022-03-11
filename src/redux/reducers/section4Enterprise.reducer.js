const section4Enterprise = (state = {
    progressIndicatorId: [],
    customerGrowth4: '',
}, action) => {
    switch (action.type) {
        case 'SET_SECTION4_ENTERPRISE':
            return {...state, ...action.payload };
        default:
            return state;
    }
}

export default section4Enterprise;