const section4Reducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SECTION_FOUR':
            return action.payload;
        default:
            return state;
        }
    
}


export default section4Reducer;
