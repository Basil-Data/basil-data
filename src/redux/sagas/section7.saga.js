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

function* section7Saga() {
    yield takeLatest('FETCH_NEXT_STEPS', fetchNextSteps);
}

export default section7Saga;