import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects';

function* getSectionFour () {
   
    try {
        console.log('in section four saga');
        const response = yield axios.get(`/api/section4`);
        yield put({
            type: 'SET_SECTION_FOUR',
            payload: response.data
        })
    }
    catch {
        console.error('GET failed in section 4 saga');
    }
};

function* getSectionFourEnterprise () {
    try {
        const response = yield axios.get('/api/section4/:id');
        console.log(response.data);
        yield put({
            type: 'SET_SECTION4_ENTERPRISE',
            payload: response.data
        })
    }
    catch (err) {
        console.error('failed to get sec 4 responses', err);
    }
}

function* updateSectionFive(action) {
    try {
        yield axios.put('/api/section4/', action.payload.data)
        yield axios.post('/api/section4/', action.payload.data)
    }
    catch(err) {
        console.error('Section 4 PUT saga failed');
    }
}

function* section4Saga(){
    yield takeEvery('FETCH_SECTION_FOUR', getSectionFour);
    yield takeEvery('UPDATE_SECTION4_ENTERPRISE', updateSectionFive);
    yield takeEvery('FETCH_ENTERPRISE_SECTION_FOUR', getSectionFourEnterprise)
}

export default section4Saga;