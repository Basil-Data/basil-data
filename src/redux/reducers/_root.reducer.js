import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import section1 from './section1.reducer';
import section3 from './section3.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  section1, // All the data needed for section one of the form
  section3, // All the data needed for section three of the form
});

export default rootReducer;
