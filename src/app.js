import React from 'react';
import { Route, IndexRoute, Router, Link, browserHistory } from 'react-router';
import Dashboard from './dashboard/dashboard';
import Posts from './posts/posts';

require('./app.scss');

let App = ({children}) => {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container">
          <ul className="nav navbar-nav">
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/posts">Posts</Link></li>
          </ul>
        </div>
      </nav>
      <div className="container">
        {children}
      </div>
    </div>
  );
}

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="/posts" component={Posts} />
      </Route>
    </Router>
  )
}
