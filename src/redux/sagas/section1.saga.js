import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// This function gets all the pertinent lists
// from any of the tables
function* getSectionOne () {

    try {
        console.log('in get section one saga');
        const response = yield axios.get(`/api/section1`);
        yield put({
            type: 'SET_SECTION_ONE',
            payload: response.data
        })
    }
    catch {
        console.log('get section one saga error');
    }
};

// This section gets the client's previous answers
function* getSectionOneEnterprise (action) {
    try {
        const response = yield axios.get(`/api/section1/${action.payload}`);
        console.log(response.data);
        yield put({
            type: 'SET_SECTION_ONE_ENTERPRISE',
            payload: response.data
        })
    }
    catch (error) {
        console.log('failed to get section one enterprise responses', error);
    }
}

// This section posts/updates the enterprise inputs into the table
function* postSectionOne (action) {

    try {
        // axios put request which includes all the data needing to be updated
        yield axios.put(`/api/section1`, action.payload.data);
        yield axios.post(`api/section1`, action.payload.data);
    }
    catch {
        console.log('failed to put section one');
    }
};

function* section1Saga() {
    yield takeLatest('FETCH_SECTION_ONE', getSectionOne);
    yield takeLatest('UPDATE_SECTION_ONE', postSectionOne);
    yield takeLatest('FETCH_ENTERPRISE_SECTION_ONE', getSectionOneEnterprise)
}

export default section1Saga;