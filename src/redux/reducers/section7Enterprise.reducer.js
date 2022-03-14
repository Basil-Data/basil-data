const section7Enterprise = (state = {
        raisingFunds7: null,
        targetAmount7: '',
        investmentVehicleId: [],
        fundingUseId: [],
        nextSteps7: '',
        assistanceId: [],
        societalImpactId: '',
        environmentalImpactId: '',
        economicImpactId: '',
        understandProblem7: ''
    }, action) => {
    switch (action.type) {
        case 'SET_NEXT_STEPS_ENTERPRISE':
            return {...state, ...action.payload};
        default:
            return state;
    }
};

export default section7Enterprise;