import { combineReducers } from 'redux';

// Reducers
import authReducer from './auth-reducer';
import postsReducer from './posts-reducer';

// Combine Reducers
export default combineReducers({
  authState: authReducer,
  postsState: postsReducer
});