import * as _ from 'lodash';

// const initialState = {
//   posts: []
// }

export default (state = {}, action) => {
  let index;
  state.posts = state.posts || [];
  state.params = state.params || {q: ''};

  switch (action.type) {
    case 'POSTS_FETCH_SUCCESS':
      return {
        ...state,
        params: action.params,
        posts: action.posts
      };
    case 'POSTS_CREATE_SUCCESS':
      return {
        ...state,
        posts: state.posts.push(action.post)
      };
    case 'POSTS_UPDATE_SUCCESS':
      index = _.findIndex(state.posts, {id: action.post.id});

      return {
        ...state,
        posts: [
          ...state.posts.slice(0, index),
          action.post,
          ...state.posts.slice(index + 1)
        ]
      };
    case 'POSTS_DELETE_SUCCESS':
      index = _.findIndex(state.posts, {id: action.postId});

      return {
        ...state,
        posts: [
          ...state.posts.slice(0, index),
          ...state.posts.slice(index + 1)
        ]
      };
  }

  return state;
};
