import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import section1Saga from './section1.saga';
import sectionTwoSaga from './section2.saga';
<<<<<<< HEAD
import section4Saga from './section4.saga';
=======
import section3Saga from './section3.saga';
import section6Saga from './section6.saga';
import section7Saga from './section7.saga';
>>>>>>> f9fc79227c420c2594c1e5090452684afa490765

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
<<<<<<< HEAD
    sectionTwoSaga(),
    section4Saga(),
=======
    sectionTwoSaga(), // Section two's sagas for going to the router
    section3Saga(), // Section three's sagas for going to the router
    section6Saga(),
    section7Saga(),
>>>>>>> f9fc79227c420c2594c1e5090452684afa490765
  ]);
}
