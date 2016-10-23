import Immutable from 'seamless-immutable';

const initialState = Immutable({
  postsById: {},
  params: {}
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'POSTS_FETCH_SUCCESS':
      return state.merge({
        params: action.params || {},
        postsById: action.postsById || {q: ''}
      });
    case 'POSTS_CREATE_SUCCESS':
    case 'POSTS_UPDATE_SUCCESS':
      return state.setIn(['postsById', action.post.id], action.post);
    case 'POSTS_DELETE_SUCCESS':
      return state.set('postsById', state.postsById.without(action.postId));
    default:
      return state;
  }
};
