import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

// function* fetchImpactSectors() {
//     console.log('made it to fetchImpactSectors');

//     // get data from the API
//     const response = yield axios.get('/api/section2');

//     yield put({
//         type: 'SET_IMPACT_SECTORS',
//         payload: response.data
//     });
    
    
// }

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


function* fetchSectionTwoEnterprise(action) {

    try {
        const response = yield axios.get(`/api/section2/${action.payload}`);
        yield put({
            type: 'SET_SECTION_TWO_ENTERPRISE',
            payload: response.data
        }) 
    }
    catch (error) {
        console.log('section2 Enterprise GET failed', error); 
    }
}


function* postSectionTwo (action) {
    
    try{
        yield axios.put(`/api/section2`, action.payload);
        yield axios.post(`/api/section2`, action.payload);
    }
    catch {
        console.log('POST section2 error');
        
    }
}

function* section2Saga() {
    // handle all incoming 'FETCH_IMPACT_SECTORS' requests
    yield takeEvery('FETCH_SECTION_TWO', fetchSectionTwo);
    yield takeEvery('UPDATE_SECTION_TWO', postSectionTwo);
    yield takeEvery('FETCH_SECTION_TWO_ENTERPRISE', fetchSectionTwoEnterprise)
}
export default section2Saga