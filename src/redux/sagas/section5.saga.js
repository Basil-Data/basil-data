import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getSectionFive() {
    try {
        const res = yield axios.get('/api/section5')
        yield put({
            type: 'SET_SECTION_FIVE',
            payload: res.data
        })
    }
    catch (err) {
        console.error('GET section5 saga failed', err);
    }
}

function* getSectionFiveEnterprise() {
    try {
        const response = yield axios.get('/api/section5/:id');
        console.log(response.data);
        yield put({
            type: 'SET_SECTION5_RESPONSES',
            payload: response.data
        })
    }
    catch (err) {
        console.error('get section5 :id failed', err);
    }
}

function* postSectionFive (action) {
    try {
        
        const res = yield axios.post(`/api/section5`, action.payload);
        yield put ({ type: 'SET_SECTION_5', payload: res.data})
    }
    catch(err) {
        console.error('POST section5 saga failed', err);
    }
}

function* updateSectionFive (action) {
    try {
        yield axios.put(`/api/section5/`, action.payload.data)
    }
    catch {
        console.error('Section 5 PUT saga failed');
    }
}

function* section5Saga() {
    yield takeLatest('FETCH_SECTION_FIVE', getSectionFive);
    yield takeLatest('POST_SECTION_FIVE', postSectionFive);
    yield takeLatest('UPDATE_SECTION_FIVE', updateSectionFive);
    yield takeLatest('FETCH_ENTERPRISE_SECTION_FIVE', getSectionFiveEnterprise)

}

export default section5Saga;