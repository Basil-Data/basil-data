const section6Enterprise = (state = {
    riskId: [],
    barrierId: [],
    factorId: [],
    riskPrep6: '',
    barrierPlan6: '',
    externalGrowth6: ''
}, action) => {
switch (action.type) {
    case 'SET_SECTION6_ENTERPRISE':
        return {...state, ...action.payload};
    default:
        return state;
}
};

export default section6Enterprise;