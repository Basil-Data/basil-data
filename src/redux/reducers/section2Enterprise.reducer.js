const section2Enterprise = (state = {
    impactSectorId: [],
    characteristicId: [],
    segmentId: [],
    sdgId: 0,
    indicatorId: [],
    admin2: 'Basil Data Input'
}, action) => {
    switch (action.type) {
        case 'SET_SECTION_TWO_ENTERPRISE':
            return {...state, ...action.payload};
    }
    return state;
};

export default section2Enterprise;