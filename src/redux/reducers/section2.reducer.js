const section2 = (state = {}, action) => {
    switch (action.type) {
        case 'SET_IMPACT_SECTORS':
            return action.payload;
    }
    return state;
}

export default section2;