import * as _ from 'lodash';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  posts: [],
  postsById: {},
  params: {
    q: ''
  }
});

export default (state = initialState, action) => {
  let index;

  switch (action.type) {
    case 'POSTS_FETCH_SUCCESS':
      return state.merge({
        params: action.params,
        posts: action.posts
      });
    case 'POSTS_CREATE_SUCCESS':
      return state.merge({
        posts: [
          ...state.posts,
          action.post
        ]
      });
    case 'POSTS_UPDATE_SUCCESS':
      index = _.findIndex(state.posts, {id: action.post.id});

      return state.merge({
        posts: [
          ...state.posts.slice(0, index),
          action.post,
          ...state.posts.slice(index + 1)
        ]
      });
    case 'POSTS_DELETE_SUCCESS':
      index = _.findIndex(state.posts, {id: action.postId});

      return state.merge({
        posts: [
          ...state.posts.slice(0, index),
          ...state.posts.slice(index + 1)
        ]
      });
  }

  return state;
};
