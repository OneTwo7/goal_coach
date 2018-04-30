import { SIGNED_IN, SET_GOALS, SET_COMPLETE_GOALS } from '../constants';
import { combineReducers } from 'redux';

let user = {
  email: null
};

const auth = (state = user, action) => {
  if (action.type === SIGNED_IN) {
    const { email } = action;
    user = { email };
    return user;
  }
  return state;
};

const goals = (state = [], action) => {
  if (action.type === SET_GOALS) {
    const { goals } = action;
    return goals;
  }
  return state;
};

const completeGoals = (state = [], action) => {
  if (action.type === SET_COMPLETE_GOALS) {
    const { goals } = action;
    return goals;
  }
  return state;
};

export default combineReducers({
  auth,
  goals,
  completeGoals
});
