export function getParams(state) {
  return state.posts.params;
}

export function getPost(state, id) {
  return state.posts.postsById[id];
}

export function getPosts(state) {
  return Object.values(state.posts.postsById);
}
