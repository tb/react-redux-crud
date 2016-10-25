import { keyBy } from 'lodash';
import * as actionTypes from './actionTypes';

export function fetchPost(payload) {
  return {type: actionTypes.FETCH_ONE, payload};
}

export function fetchPostSuccess(payload) {
  const byId = {[payload.id]: payload};
  return {type: actionTypes.FETCH_ONE_SUCCESS, payload: {byId}};
}

export function fetchPosts(payload) {
  return {type: actionTypes.FETCH_COLLECTION, payload};
}

export function fetchPostsSuccess(posts, params) {
  const byId = keyBy(posts, (post) => post.id);
  return {type: actionTypes.FETCH_COLLECTION_SUCCESS, payload: {byId, params}};
}

export function createPost(payload) {
  return {type: actionTypes.CREATE, payload};
}

export function createPostSuccess(payload) {
  return {type: actionTypes.CREATE_SUCCESS, payload};
}

export function updatePost(payload) {
  return {type: actionTypes.UPDATE, payload};
}

export function updatePostSuccess(payload) {
  return {type: actionTypes.UPDATE_SUCCESS, payload};
}

export function deletePost(payload) {
  return {type: actionTypes.DELETE, payload};
}

export function deletePostSuccess(payload) {
  return {type: actionTypes.DELETE_SUCCESS, payload};
}
