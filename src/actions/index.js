import { SIGNED_IN, SET_GOALS } from '../constants';

export const logUser = (email) => ({
  type: SIGNED_IN,
  email
});

export const setGoals = (goals) => ({
  type: SET_GOALS,
  goals
});
