import { keyBy } from 'lodash';
import axios from 'axios';
import querystring from 'querystring';

export function getPost(postId) {
  return function (dispatch) {
    return axios.get(`http://localhost:8081/posts/${postId}`)
      .then((res) => {
        dispatch({type: 'POSTS_FETCH_ONE_SUCCESS', post: res.data});
      })
  };
}

export function getPosts(params) {
  return function (dispatch) {
    return axios.get(`http://localhost:8081/posts?${querystring.stringify(params)}`)
      .then((res) => {
        const postsById = keyBy(res.data, (post) => post.id);
        dispatch({type: 'POSTS_FETCH_SUCCESS', postsById, params});
      })
  };
}

export function createPost(post) {
  return function (dispatch) {
    return axios.post(`http://localhost:8081/posts`, post)
      .then((res) => {
        dispatch({type: 'POSTS_CREATE_SUCCESS', post: res.data});
      })
  };
}

export function updatePost(post) {
  return function (dispatch) {
    return axios.put(`http://localhost:8081/posts/${post.id}`, post)
      .then((res) => {
        dispatch({type: 'POSTS_UPDATE_SUCCESS', post: res.data});
      })
  };
}

export function deletePost(postId) {
  return function (dispatch) {
    return axios.delete(`http://localhost:8081/posts/${postId}`)
      .then((res) => {
        dispatch({type: 'POSTS_DELETE_SUCCESS', postId});
      })
  };
}
