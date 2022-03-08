const section1 = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SECTION_ONE':
            return action.payload;
        default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default section1;
  