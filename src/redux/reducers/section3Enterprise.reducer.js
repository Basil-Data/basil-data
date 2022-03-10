const section3Enterprise = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SECTION_THREE_ENTERPRISE':
            return {...state, ...action.payload};
        default:
        return state;
    }
};

  // user will be on the redux state at:
  // state.user
export default section3Enterprise;