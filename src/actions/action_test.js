import {
  ACTION_TEST,
} from './actionTypes';

export const getWelcomeMessage = () => (dispatch) => {
  dispatch({
    type: ACTION_TEST,
    payload: 'Hello',
  });
};

export const setWelcomeMessage = () => (dispatch) => {
  dispatch({
    type: ACTION_TEST,
    payload: 'Hello',
  });
};
