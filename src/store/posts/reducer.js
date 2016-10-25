import Immutable from 'seamless-immutable';
import * as actionTypes from './actionTypes';

const initialState = Immutable({
  byId: {},
  params: {}
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POSTS_FETCH_SUCCESS:
      return state.merge({
        params: action.payload.params || {},
        byId: action.payload.byId || {}
      });
    case actionTypes.POSTS_CREATE_SUCCESS:
    case actionTypes.POSTS_UPDATE_SUCCESS:
      return state.setIn(['byId', action.payload.id], action.payload);
    case actionTypes.POSTS_DELETE_SUCCESS:
      return state.set('byId', state.byId.without(action.payload.id));
    default:
      return state;
  }
};
