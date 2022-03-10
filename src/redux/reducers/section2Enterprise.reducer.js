const section2Enterprise = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SECTION_TWO_ENTERPRISE':
            return {...state, ...action.payload};
    }
    return state;
};

export default section2Enterprise;