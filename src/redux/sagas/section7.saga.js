import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// gets all questionnaire selections for form
function* fetchNextSteps() {

    try {
        let results = yield axios.get('/api/section7');
        yield put({
            type: 'SET_NEXT_STEPS',
            payload: results.data
        })
    } catch (error) {
        console.log('Error in fetchNextSteps/section7 saga:', error);
    }
}

// This section gets the client's previous answers
function* getSectionSevenEnterprise () {
    try {
        const response = yield axios.get(`/api/section7/:id`);
        yield put({
            type: 'SET_NEXT_STEPS_ENTERPRISE',
            payload: response.data
        })
    }
    catch (error) {
        console.log('failed to get section seven enterprise responses', error);

    }
}

function* putSectionSeven (action) {

    try {
        // axios put request which includes all the data needing to be updated
        yield axios.put('/api/section7', action.payload.data);
        yield axios.post('api/section7', action.payload.data);
    }
    catch {
        console.log('failed to put section 7');
    }
};

function* section7Saga() {
    yield takeLatest('FETCH_NEXT_STEPS', fetchNextSteps);
    yield takeLatest('PUT_SECTION_SEVEN', putSectionSeven);
    yield takeLatest('FETCH_ENTERPRISE_SECTION_SEVEN', getSectionSevenEnterprise)
}

export default section7Saga;