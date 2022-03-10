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

function* updateSectionFive(action) {
    try {
        yield axios.put('/api/section4/:id', action.payload.data)
    }
    catch(err) {
        console.error('Section 5 PUT saga failed');
    }
}

function* section4Saga(){
    yield takeEvery('FETCH_SECTION_FOUR', getSectionFour);
}

export default section4Saga;