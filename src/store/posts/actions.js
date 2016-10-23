import { keyBy } from 'lodash';
import axios from 'axios';
import querystring from 'querystring';
import * as actionTypes from './actionTypes';

export function getPost(postId) {
  return function (dispatch) {
    return axios.get(`http://localhost:8081/posts/${postId}`)
      .then((res) => {
        dispatch({type: actionTypes.POSTS_FETCH_ONE_SUCCESS, payload: res.data});
      })
  };
}

export function getPosts(params) {
  return function (dispatch) {
    return axios.get(`http://localhost:8081/posts?${querystring.stringify(params)}`)
      .then((res) => {
        const postsById = keyBy(res.data, (post) => post.id);
        dispatch({type: actionTypes.POSTS_FETCH_SUCCESS, payload: {postsById, params}});
      })
  };
}

export function createPost(post) {
  return function (dispatch) {
    return axios.post(`http://localhost:8081/posts`, post)
      .then((res) => {
        dispatch({type: actionTypes.POSTS_CREATE_SUCCESS, payload: res.data});
      })
  };
}

export function updatePost(post) {
  return function (dispatch) {
    return axios.put(`http://localhost:8081/posts/${post.id}`, post)
      .then((res) => {
        dispatch({type: actionTypes.POSTS_UPDATE_SUCCESS, payload: res.data});
      })
  };
}

export function deletePost(postId) {
  return function (dispatch) {
    return axios.delete(`http://localhost:8081/posts/${postId}`)
      .then((res) => {
        dispatch({type: actionTypes.POSTS_DELETE_SUCCESS, payload: postId});
      })
  };
}
