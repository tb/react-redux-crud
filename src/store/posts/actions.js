import { keyBy } from 'lodash';
import * as actionTypes from './actionTypes';

export function getPost(id) {
  return {type: actionTypes.POSTS_FETCH_ONE, payload: id};
}

export function getPosts(params) {
  return {type: actionTypes.POSTS_FETCH, payload: {params}};
}

export function getPostsSuccess(posts, params) {
  const byId = keyBy(posts, (post) => post.id);
  return {type: actionTypes.POSTS_FETCH_SUCCESS, payload: {byId, params}};
}

export function createPost(post) {
  return {type: actionTypes.POSTS_CREATE, payload: post};
}

export function createPostSuccess(post) {
  return {type: actionTypes.POSTS_CREATE_SUCCESS, payload: post};
}

export function updatePost(post) {
  return {type: actionTypes.POSTS_UPDATE, payload: post};
}

export function updatePostSuccess(post) {
  return {type: actionTypes.POSTS_UPDATE_SUCCESS, payload: post};
}

export function deletePost(post) {
  return {type: actionTypes.POSTS_DELETE, payload: post};
}

export function deletePostSuccess(post) {
  return {type: actionTypes.POSTS_DELETE_SUCCESS, payload: post};
}
