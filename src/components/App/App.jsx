import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

// import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import AdminPage from '../AdminPage/AdminPage';

// Sections for forms
import SectionOneStory from '../Questionnaire/SectionOneStory/SectionOneStory';
import SectionTwoImpact from '../Questionnaire/SectionTwoImpact/SectionTwoImpact';
import SectionThreeSolution from '../Questionnaire/SectionThreeSolution/SectionThreeSolution';
import SectionFourTraction from '../Questionnaire/SectionFourTraction/SectionFourTraction';
import SectionFiveMarket from '../Questionnaire/SectionFiveMarket/SectionFiveMarket';
import SectionSixRisksAndHurdles from '../Questionnaire/SectionSixRisksAndHurdles/SectionSixRisksAndHurdles';
import SectionSevenNextSteps from '../Questionnaire/SectionSevenNextSteps/SectionSevenNextSteps';
import Report from '../Report/Report';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          {/* <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route> */}

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            {user.authLevel === 'guest' ?
            <UserPage />
            :
            <AdminPage />
            }
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <ProtectedRoute
            exact
            path="/story"
          >
            <SectionOneStory/>
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/traction">
              <SectionFourTraction />
          </ProtectedRoute>

          <ProtectedRoute
              exact
              path="/impact"
          >
              <SectionTwoImpact/>
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/solution"
          >
            <SectionThreeSolution/>
          </ProtectedRoute>

          <ProtectedRoute
            exact    
            path="/traction">
              <SectionFourTraction/>
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/market">
              <SectionFiveMarket />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/risks-and-hurdles"
          >
            <SectionSixRisksAndHurdles/>
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/next-steps"
          >
            <SectionSevenNextSteps/>
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/report"
          >
            <Report />
          </ProtectedRoute>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
