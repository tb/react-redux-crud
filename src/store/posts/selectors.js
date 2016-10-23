export function getParams(state) {
  return state.postsState.params;
}

export function getPosts(state) {
  return Object.values(state.postsState.postsById);
}
