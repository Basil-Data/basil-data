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

function* fetchEnterpriseDetails (action) {
    try {

        const response = yield axios.get(`/api/admin/${action.payload}`);
        console.log(response.data);

        yield put({ type: 'SET_ENTERPRISE_DETAILS', payload: response.data });
    } catch (error) {
        console.log('admin get enterprise details request failed', error);
    }
}

function* adminSaga() {
    yield takeLatest('GET_ADMIN_TABLE', fetchEnterpriseData);
    yield takeLatest('GET_ENTERPRISE_DETAILS', fetchEnterpriseDetails);
}

export default adminSaga;
