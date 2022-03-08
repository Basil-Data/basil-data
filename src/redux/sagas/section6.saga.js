import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// gets all questionnaire selections for form
function* fetchAnticipatedRisks() {

    try {
        let risks = yield axios.get('/api/risksAndHurdles');
        yield put({
            type: 'SET_ANTICIPATED_RISKS',
            payload: risks.data
        })
    } catch (error) {
        console.log('Error in fetchAnticipatedRisks saga:', error);
    }
}

function* section6Saga() {
    yield takeLatest('FETCH_ANTICIPATED_RISKS', fetchAnticipatedRisks);
}

export default section6Saga;