const section4Enterprise = (state = {
    progressIndicatorId: [],
    investmentStageId: [],
    customerGrowth4: '',
    fundingReceived4: '',
    generatingRevenue4: '',
    developmentStageId: 0,
    makingProfit4: '',
    admin4: 'Basil Data Input'
}, action) => {
    switch (action.type) {
        case 'SET_SECTION4_ENTERPRISE':
            return {...state, ...action.payload };
        default:
            return state;
    }
}

export default section4Enterprise;