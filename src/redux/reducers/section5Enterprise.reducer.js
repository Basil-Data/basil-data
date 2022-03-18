const section5EnterpriseReducer = (state = {
    whyRealistic5: '',
    admin5: 'Basil Data Input'
}, action) => {
    switch (action.type) {
        case 'SET_SECTION5_RESPONSES':
            return {...state, ...action.payload };
        default:
            return state;
    }
}

export default section5EnterpriseReducer;