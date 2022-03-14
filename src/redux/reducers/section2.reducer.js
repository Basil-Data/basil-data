const section2 = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SECTION_TWO':
            return action.payload;
    }
    return state;
}

export default section2;