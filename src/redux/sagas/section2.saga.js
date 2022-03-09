import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* fetchImpactSectors() {
    console.log('made it to fetchImpactSectors');

    // get data from the API
    const response = yield axios.get('/api/sectionTwo/impactSectors');

    yield put({
        type: 'SET_IMPACT_SECTORS',
        payload: response.data
    });
    
}

function* sectionTwoSaga() {
    // handle all incoming 'FETCH_IMPACT_SECTORS' requests
    yield takeEvery('FETCH_IMPACT_SECTORS', fetchImpactSectors);
}
export default sectionTwoSaga