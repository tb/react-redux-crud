import { keyBy } from 'lodash';
import axios from 'axios';
import querystring from 'querystring';
import { Observable } from 'rxjs/Observable';
import { push } from 'react-router-redux';

import * as actionTypes from './actionTypes';
import * as postsActions from './actionCreators';

export function fetchPost(action$) {
  return action$.ofType(actionTypes.FETCH_ONE)
    .map(action => action.payload)
    .switchMap(id => {
      return Observable.fromPromise(
        axios.get(`http://localhost:8081/posts/${id}`)
      ).map(res => postsActions.fetchPostSuccess(res.data));
    });
}

export function fetchPosts(action$) {
  return action$.ofType(actionTypes.FETCH_COLLECTION)
    .map(action => action.payload)
    .switchMap(params => {
      return Observable.fromPromise(
        axios.get(`http://localhost:8081/posts?${querystring.stringify(params)}`)
      ).map(res => postsActions.fetchPostsSuccess(res.data, params));
    });
}

export function updatePost(action$) {
  return action$.ofType(actionTypes.UPDATE)
    .map(action => action.payload)
    .switchMap(post => {
      return Observable.merge(
        Observable.fromPromise(
          axios.put(`http://localhost:8081/posts/${post.id}`, post)
        ).map(res => postsActions.updatePostSuccess(res.data)),
        Observable.of(push('/posts'))
      );
    });
}

export function createPost(action$) {
  return action$.ofType(actionTypes.CREATE)
    .map(action => action.payload)
    .switchMap(post => {
      return Observable.merge(
        Observable.fromPromise(
          axios.post(`http://localhost:8081/posts`, post)
        ).map(res => postsActions.createPostSuccess(res.data)),
        Observable.of(push('/posts'))
      );
    });
}

export function deletePost(action$) {
  return action$.ofType(actionTypes.DELETE)
    .map(action => action.payload)
    .switchMap(post => {
      return Observable.fromPromise(
        axios.delete(`http://localhost:8081/posts/${post.id}`)
      ).map(res => postsActions.deletePostSuccess(post));
    });
}
