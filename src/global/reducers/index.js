import { combineReducers } from 'redux';
import globalReducer from './global';
import tasksReducer from '../../containers/organisms/Tasks/Tasks.reducers';

export default combineReducers({
  global: globalReducer,
  tasks: tasksReducer
});
