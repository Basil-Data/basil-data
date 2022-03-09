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

function* section1Saga() {
    yield takeLatest('FETCH_SECTION_ONE', getSectionOne);
}

export default section1Saga;