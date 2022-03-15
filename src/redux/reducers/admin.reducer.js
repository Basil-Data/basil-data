import { combineReducers } from 'redux';

const adminTable = (state = [], action) => {
    switch (action.type) {
        case 'SET_ADMIN_TABLE':
            return action.payload;
        default:
            return state;
    }
};

const selectedEnterprise = (state = 0, action) => {
    switch (action.type) {
        case 'SET_SELECTED_ENTERPRISE':
            return action.payload;
        default:
            return state;
    }
};

const adminReducer = combineReducers({
    adminTable,
    selectedEnterprise
});

export default adminReducer;
