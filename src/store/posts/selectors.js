import * as _ from 'lodash';

export function getParams(state) {
  return state.postsState.params;
}

export function getPosts(state) {
  return state.postsState.posts;
}
