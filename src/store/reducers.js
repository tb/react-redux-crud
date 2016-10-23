import { combineReducers } from 'redux';

// Reducers
import { authReducer } from './auth/index';
import { postsReducer } from './posts/index';

// Combine Reducers
export default combineReducers({
  authState: authReducer,
  postsState: postsReducer
});
