import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

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

function* postSectionOne (action) {

    try {
        // axios put request which includes all the data needing to be updated
        yield axios.put(`/api/section1/${action.payload.id}`, action.payload.data)
    }
    catch {
        console.log('failed to put section one');
    }
};

function* section1Saga() {
    yield takeLatest('FETCH_SECTION_ONE', getSectionOne);
    yield takeLatest('POST_SECTION_ONE', postSectionOne);
}

export default section1Saga;