const section6Enterprise = (state = {
    risks: [],
    barrierId: [],
    factorId: [],
    barrierPlan: [],
    factorReasons: []
}, action) => {
switch (action.type) {
    case 'SET_SECTION6_ENTERPRISE':
        return {...state, ...action.payload};
    default:
        return state;
}
};

export default section6Enterprise;