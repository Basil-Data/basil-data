import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* fetchImpactSectors() {
    console.log('made it to fetchImpactSectors');

    // get data from the API
    const response = yield axios.get('/api/section2');

    yield put({
        type: 'SET_IMPACT_SECTORS',
        payload: response.data
    });
    console.log('response is:', response.data);
    
    
}

function* fetchSectionTwo() {
    
    try {
        console.log('made it to fetchSectionTwo');
        const response = yield axios.get('/api/section2');
        yield put({
            type: 'SET_SECTION_TWO',
            payload: response.data
        })  
    }
    catch {
        console.log('GET section2 error');
        
    }
}


function* postSectionTwo (action) {
    console.log('action.payload', action.payload);
    
    try{
        yield axios.put(`/api/section2`, action.payload.data);
        yield axios.post(`/api/section2`, action.payload.data);
    }
    catch {
        console.log('POST section2 error');
        
    }
}

function* getIndicators (action) {
    try {
        const response = yield axios.get(`api/section2/sdg/${action.payload}`);
        yield put({
            type: 'SET_SDG_INDICATORS',
            payload: response.data
        })
    }
    catch (error) {
        console.log('error fetching indicators')
    }
}

function* section2Saga() {
    // handle all incoming 'FETCH_IMPACT_SECTORS' requests
    yield takeEvery('FETCH_IMPACT_SECTORS', fetchImpactSectors);
    yield takeEvery('FETCH_SECTION_TWO', fetchSectionTwo);
    yield takeEvery('UPDATE_SECTION_TWO', postSectionTwo);
    yield takeEvery('GET_SDG_INDICATORS', getIndicators);
}
export default section2Saga