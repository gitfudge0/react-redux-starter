import {
  ACTION_TEST,
} from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ACTION_TEST:
      return { ...state, hello: 'world' };
    default:
      return state;
  }
};
