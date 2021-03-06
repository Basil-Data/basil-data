import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import section1Saga from './section1.saga';
import section2Saga from './section2.saga';
import section3Saga from './section3.saga';
import section4Saga from './section4.saga';
import section5Saga from './section5.saga';
import section6Saga from './section6.saga';
import section7Saga from './section7.saga';
import reportSaga from './report.saga';
import adminSaga from './admin.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    section1Saga(), // Section one's sagas for going to the router
    section2Saga(), // Section two's sagas for going to the router
    section3Saga(), // Section three's sagas for going to the router
    section4Saga(),
    section5Saga(),
    section6Saga(),
    section7Saga(),
    reportSaga(), // Getting all the enterprise details for the report
    adminSaga(), // Getting all the enterprise details for the admin
  ]);
}
