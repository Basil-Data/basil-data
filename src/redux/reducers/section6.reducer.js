const section6 = (state = [], action) => {
    switch (action.type) {
        case 'SET_RISKS_AND_HURDLES':
            return action.payload;
        default:
            return state;
    }
};

export default section6;