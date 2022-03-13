const section5EnterpriseReducer = (state = {
    addressableMarket5: '',
    serviceableMarket5: '',
    obtainableMarket5: '',
    whyRealistic5: ''
}, action) => {
    switch (action.type) {
        case 'SET_SECTION5_RESPONSES':
            return {...state, ...action.payload };
        default:
            return state;
    }
}

export default section5EnterpriseReducer;