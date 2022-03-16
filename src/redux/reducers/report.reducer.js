const reportReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_REPORT_DETAILS':
            return action.payload;
        default:
        return state;
    }
};

  // user will be on the redux state at:
  // state.user
export default reportReducer;
