import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';
import { logUser } from '../actions';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';

class App extends React.Component {
  componentDidMount () {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('User signed in or up', user);
        const { email } = user;
        this.props.logUser(email);
        this.props.history.push('/');
      } else {
        console.log('User signed out or still needs to sign in');
        this.props.history.push('/signin');
      }
    });
  }

  render () {
    return (
      <div>
        <NavLink exact to="/">Home</NavLink>
        {" | "}
        <NavLink to="/signin">Sign In</NavLink>
        {" | "}
        <NavLink to="/signup">Sign Up</NavLink>

        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    user: state
  };
}

export default withRouter(connect(mapStateToProps, { logUser })(App));
