import React from 'react';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

const signOut = () => {
  firebaseApp.auth().signOut();
};

const Home = () => (
  <div>
    <h1>Goal Coach</h1>
    <AddGoal />
    <hr />
    <h2>Goals</h2>
    <GoalList />
    <hr />
    <h2>Complete Goals</h2>
    <CompleteGoalList />
    <hr />
    <button className="btn btn-danger" onClick={signOut}>Sign Out</button>
  </div>
);

export default Home;
