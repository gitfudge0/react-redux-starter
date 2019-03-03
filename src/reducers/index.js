import { combineReducers } from 'redux';
import testReducer from './testReducer';

const rootReducer = (state, action) => combineReducers({
  test: testReducer,
})(state, action);

export default rootReducer;
