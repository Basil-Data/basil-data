import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getSectionThree () {

    try {
        console.log('in get section three saga');
        const response = yield axios.get(`/api/section3`);
        yield put({
            type: 'SET_SECTION_THREE',
            payload: response.data
        })
    }
    catch {
        console.log('get section three saga error');
    }
};

function* postSectionThree (action) {

    try {
        yield axios.post(`/api/section3`, action.payload)
    }
    catch {
        console.log('failed to post section three');
    }
}

function* section3Saga() {
    yield takeLatest('FETCH_SECTION_THREE', getSectionThree);
    yield takeLatest('POST_SECTION_THREE', postSectionThree);
}

export default section3Saga;