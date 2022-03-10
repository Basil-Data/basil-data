const section4Enterprise = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SECTION4_RESPONSES':
            return {...state, ...action.payload };
        default:
            return state;
    }
}

export default section4Enterprise;