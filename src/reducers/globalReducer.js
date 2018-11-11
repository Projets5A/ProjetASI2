import selectedReducer from '../reducers/selectReducer';
import updateModelReducer from '../reducers/updateModelReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  selectedReducer,
  updateModelReducer
})