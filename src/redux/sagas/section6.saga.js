import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// gets all questionnaire selections for form
function* fetchRisksAndHurdles() {

    try {
        let results = yield axios.get('/api/section6');
        yield put({
            type: 'SET_RISKS_AND_HURDLES',
            payload: results.data
        })
    } catch (error) {
        console.log('Error in section 6 get saga:', error);
    }
}

// This section gets the client's previous answers
function* getSectionSixEnterprise () {
    try {
        const response = yield axios.get(`/api/section6/:id`);
        yield put({
            type: 'SET_SECTION6_ENTERPRISE',
            payload: response.data
        })
    }
    catch (error) {
        console.log('failed to get section 6 enterprise responses', error);

    }
}

function* putSectionSix (action) {

    try {
        // axios put request which includes all the data needing to be updated
        yield axios.put('api/section6', action.payload);
    }
    catch {
        console.log('failed to put section 6');
    }
};

function* section6Saga() {
    yield takeLatest('FETCH_RISKS_AND_HURDLES', fetchRisksAndHurdles);
    yield takeLatest('PUT_SECTION_SIX', putSectionSix);
    yield takeLatest('FETCH_ENTERPRISE_SECTION_SIX', getSectionSixEnterprise)
}

export default section6Saga;