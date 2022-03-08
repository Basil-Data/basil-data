import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome</h2> 
      <div className="introDiv">
        <img src={user.logoUrl} height={100}/>
        <h3>{user.enterpriseName}!</h3>
      </div>
      <p>To get started, click below!</p>
      <Link to='/story'><button className="btn">Questionnaire</button></Link>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
