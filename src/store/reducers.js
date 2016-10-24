import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth/reducer';
import categories from './categories/reducer';
import posts from './posts/reducer';

export default combineReducers({
  auth,
  categories,
  posts,
  routing: routerReducer,
});
