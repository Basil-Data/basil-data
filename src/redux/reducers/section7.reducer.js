const section7 = (state = [], action) => {
    switch (action.type) {
        case 'SET_NEXT_STEPS':
            return action.payload;
        default:
            return state;
    }
};

export default section7;