import Immutable from 'seamless-immutable';
import * as actionTypes from './actionTypes';

const initialState = Immutable({
  postsById: {},
  params: {}
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POSTS_FETCH_SUCCESS:
      return state.merge({
        params: action.payload.params || {},
        postsById: action.payload.postsById || {}
      });
    case actionTypes.POSTS_CREATE_SUCCESS:
    case actionTypes.POSTS_UPDATE_SUCCESS:
      return state.setIn(['postsById', action.payload.id], action.payload);
    case actionTypes.POSTS_DELETE_SUCCESS:
      return state.set('postsById', state.postsById.without(action.payload));
    default:
      return state;
  }
};
