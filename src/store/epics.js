import { combineEpics } from 'redux-observable';
import { values } from 'lodash';

import * as postsEpics from './posts/epics';

export default combineEpics(
  ...values(postsEpics)
);
