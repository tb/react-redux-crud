import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { authReducer } from './auth/index';
import { categoriesReducer } from './categories/index';
import { postsReducer } from './posts/index';

export default combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  posts: postsReducer,
  routing: routerReducer,
});
