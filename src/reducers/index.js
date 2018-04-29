import { SIGNED_IN, SET_GOALS } from '../constants';
import { combineReducers } from 'redux';

let user = {
  email: null
};

const auth = (state = user, action) => {
  switch (action.type) {
    case SIGNED_IN:
      const { email } = action;
      user = {
        email
      };
      return user;
    default:
      return state;
  }
};

const goals = (state = [], action) => {
  switch (action.type) {
    case SET_GOALS:
      const { goals } = action;
      return goals;
    default:
      return state;
  }
};

export default combineReducers({
  auth,
  goals
});
