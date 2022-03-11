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
    catch {
        console.error('GET section5 saga failed', err);
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
        yield axios.put(`/api/section5/:id`, action.payload.data)
    }
    catch {
        console.error('Section 5 PUT saga failed');
    }
}

function* section5Saga() {
    yield takeLatest('FETCH_SECTION_FIVE', getSectionFive);
    yield takeLatest('POST_SECTION_FIVE', postSectionFive);
    yield takeLatest('UPDATE_SECTION_FIVE', updateSectionFive);
}

export default section5Saga;