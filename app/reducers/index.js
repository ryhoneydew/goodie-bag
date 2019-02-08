import { combineReducers } from 'redux';
import candyReducer from './candyReducer';

const rootReducer = combineReducers({
  candies: candyReducer
});

export default rootReducer;
