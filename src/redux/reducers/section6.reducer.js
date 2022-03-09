const section6Recducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ANTICIPATED_RISKS':
            return action.payload;
        default:
            return state;
    }
};

export default section6Recducer;