import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Function will be called upon admin page load
function* fetchEnterpriseData() {
    try {

        const response = yield axios.get('/api/admin');
        console.log(response.data);

        yield put({ type: 'SET_ADMIN_TABLE', payload: response.data });
    } catch (error) {
        console.log('admin get request failed', error);
    }
}

function* adminSaga() {
    yield takeLatest('GET_ADMIN_TABLE', fetchEnterpriseData);
}

export default adminSaga;
