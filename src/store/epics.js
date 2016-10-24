import { combineEpics } from 'redux-observable';
import * as postsEpics from './posts/epics';
import { values } from 'lodash';

export default combineEpics(
  postsEpics.createPost,
  postsEpics.deletePost,
  postsEpics.getPost,
  postsEpics.getPosts,
  postsEpics.updatePost,
);
