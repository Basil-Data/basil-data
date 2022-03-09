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
        console.log('Error in fetchAnticipatedRisks saga:', error);
    }
}

function* section6Saga() {
    yield takeLatest('FETCH_RISKS_AND_HURDLES', fetchRisksAndHurdles);
}

export default section6Saga;