import React from 'react';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';

const signOut = () => {
  firebaseApp.auth().signOut();
};

const Home = () => (
  <div>
    <h1>Goals</h1>
    <AddGoal />
    <GoalList />
    <button className="btn btn-danger" onClick={signOut}>Sign Out</button>
  </div>
);

export default Home;
