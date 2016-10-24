import { keyBy } from 'lodash';
import axios from 'axios';
import querystring from 'querystring';
import * as Rx from 'rxjs';
import * as actionTypes from './actionTypes';
import * as postsActions from './actions';
import { push } from 'react-router-redux';

export function getPost(action$) {
  return action$.ofType(actionTypes.POSTS_FETCH_ONE)
    .map(action => action.payload)
    .switchMap(id => {
      return Rx.Observable.fromPromise(
        axios.get(`http://localhost:8081/posts/${id}`)
      ).map(res => postsActions.getPostsSuccess([res.data], {}))
    });
}

export function getPosts(action$) {
  return action$.ofType(actionTypes.POSTS_FETCH)
    .map(action => action.payload.params)
    .switchMap(params => {
      return Rx.Observable.fromPromise(
        axios.get(`http://localhost:8081/posts?${querystring.stringify(params)}`)
      ).map(res => postsActions.getPostsSuccess(res.data, params))
    });
}

export function updatePost(action$) {
  return action$.ofType(actionTypes.POSTS_UPDATE)
    .map(action => action.payload)
    .switchMap(post => {
      return Rx.Observable.merge(
        Rx.Observable.fromPromise(
          axios.put(`http://localhost:8081/posts/${post.id}`, post)
        ).map(res => postsActions.updatePostSuccess(res.data)),
        Observable.of(push('/posts'))
      );
    });
}

export function createPost(action$) {
  return action$.ofType(actionTypes.POSTS_CREATE)
    .map(action => action.payload)
    .switchMap(post => {
      return Rx.Observable.merge(
        Rx.Observable.fromPromise(
          axios.post(`http://localhost:8081/posts`, post)
        ).map(res => postsActions.createPostSuccess(res.data)),
        Observable.of(push('/posts'))
      );
    });
}

export function deletePost(action$) {
  return action$.ofType(actionTypes.POSTS_DELETE)
    .map(action => action.payload)
    .switchMap(post => {
      return Rx.Observable.fromPromise(
        axios.delete(`http://localhost:8081/posts/${post.id}`)
      ).map(res => postsActions.deletePostSuccess(post));
    });
}
