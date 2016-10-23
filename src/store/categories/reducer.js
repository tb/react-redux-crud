import Immutable from 'seamless-immutable';
import * as actionTypes from './actionTypes';

const initialState = Immutable({
  categoriesById: {}
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CATEGORIES_FETCH_SUCCESS:
      return state.merge({categoriesById: action.payload.categoriesById});
    case actionTypes.CATEGORIES_CREATE_SUCCESS:
    case actionTypes.CATEGORIES_UPDATE_SUCCESS:
      return state.setIn(['categoriesById', action.payload.id], action.payload);
    case actionTypes.CATEGORIES_DELETE_SUCCESS:
      return state.set('categoriesById', state.categoriesById.without(action.payload));
    default:
      return state;
  }
};
