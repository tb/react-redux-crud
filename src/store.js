import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './store/reducers';

const logger = createLogger({collapsed: true});

export default createStore(
  reducers,
  compose(
    applyMiddleware(logger, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
