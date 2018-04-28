import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>App</h1>
        <NavLink to="/signin">Sign In</NavLink>
        {" | "}
        <NavLink to="/signup">Sign Up</NavLink>


        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </div>
    );
  }
}

export default App;
