const section3Enterprise = (state = {
    operatingSectorId: [],
    painPointsId: [],
    technologiesId: [],
    admin3: 'Basil Data Input'
}, action) => {
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