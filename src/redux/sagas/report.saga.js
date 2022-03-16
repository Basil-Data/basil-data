import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchReportDetails() {
    try{
        const response = yield axios.get('/api/report');
        yield put ({
            type: 'SET_REPORT_DETAILS',
            payload: response.data
        })
    }
    catch (error) {
        console.log('error fetching report details', error);
    }
}

function* reportSaga() {
    yield takeLatest('GET_REPORT_DETAILS', fetchReportDetails);
};

export default reportSaga;