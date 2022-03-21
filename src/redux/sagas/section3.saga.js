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

function* getSectionThreeEnterprise (action) {
    try {
        const response = yield axios.get(`/api/section3/${action.payload}`);
        console.log(response.data);
        yield put({
            type: 'SET_SECTION_THREE_ENTERPRISE',
            payload: response.data
        })
    }
    catch (error) {
        console.log('failed to get section three enterprise responses', error);

    }
}

function* postSectionThree (action) {

    try {
        // axios put request which includes all the data needing to be updated
        yield axios.put(`/api/section3`, action.payload);
        yield axios.post(`/api/section3`, action.payload);
    }
    catch {
        console.log('failed to put section three');
    }
};


function* section3Saga() {
    yield takeLatest('FETCH_SECTION_THREE', getSectionThree);
    yield takeLatest('POST_SECTION_THREE', postSectionThree);
    yield takeLatest('FETCH_ENTERPRISE_SECTION_THREE', getSectionThreeEnterprise);
}

export default section3Saga;