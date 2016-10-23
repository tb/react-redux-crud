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
        dispatch({type: 'POSTS_FETCH_SUCCESS', posts: res.data, params});
      })
  };
}

export function createPost(post) {
  return function (dispatch) {
    return axios.post(`http://localhost:8081/posts`, post)
      .then((res) => {
        dispatch({type: 'POSTS_CREATE_SUCCESS', post});
      })
  };
}

export function updatePost(post) {
  return function (dispatch) {
    return axios.put(`http://localhost:8081/posts/${post.id}`, post)
      .then((res) => {
        dispatch({type: 'POSTS_UPDATE_SUCCESS', post});
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
