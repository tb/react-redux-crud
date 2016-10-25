import Immutable from 'seamless-immutable';
import * as actionTypes from './actionTypes';

const initialState = Immutable({
  byId: {}
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CATEGORIES_FETCH_SUCCESS:
      return state.merge({byId: action.payload.byId});
    case actionTypes.CATEGORIES_CREATE_SUCCESS:
    case actionTypes.CATEGORIES_UPDATE_SUCCESS:
      return state.setIn(['byId', action.payload.id], action.payload);
    case actionTypes.CATEGORIES_DELETE_SUCCESS:
      return state.set('byId', state.byId.without(action.payload));
    default:
      return state;
  }
};
