import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import section1 from './section1.reducer';
import section1Enterprise from './section1Enterprise.reducer';
import section2Enterprise from './section2Enterprise.reducer';
import section2 from './section2.reducer';
import section3 from './section3.reducer';
import section3Enterprise from './section3Enterprise.reducer';
import section4 from './section4.reducer';
import section5EnterpriseReducer from './section5Enterprise.reducer';
import section6 from './section6.reducer';
import section7 from './section7.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  section1, // All the data needed for section one of the form
  section1Enterprise, // All the customer's data from section one
  section2Enterprise, // All the customer's data from section two
  section2, // All the data needed for section two of the form
  section3, // All the data needed for section three of the form
  section3Enterprise, // All the customer's data from section one
  section4,
  section5EnterpriseReducer,
  section6,
  section7,
});

export default rootReducer;