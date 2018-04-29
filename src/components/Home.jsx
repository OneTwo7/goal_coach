import React from 'react';
import firebaseApp from '../firebase';

const signOut = () => {
  firebaseApp.auth().signOut();
};

const Home = () => (
  <div>
    <h1>App</h1>
    <button className="btn btn-danger" onClick={signOut}>Sign Out</button>
  </div>
);

export default Home;
