import { combineReducers } from 'redux';

const section2main = (state = {}, action) => {
    switch (action.type) {
        case 'SET_IMPACT_SECTORS':
            return action.payload;
    }
    return state;
}

const section2SdgIndicators = (state = [], action) => {
    switch (action.type) {
        case 'SET_SDG_INDICATORS':
            return action.payload;
    }
    return state;
};

const section2 = combineReducers({
    section2main,
    section2SdgIndicators
});

export default section2;