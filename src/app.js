import React from 'react';
import { Route, IndexRoute, Router, hashHistory } from 'react-router';
import Dashboard from './dashboard/dashboard';
import PostsIndex from './posts/posts-index';
import PostsEdit from './posts/posts-edit';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

require('./app.scss');

let App = ({children}) => {
  return (
    <div>
      <Navbar>
        <Nav>
          <IndexLinkContainer to="/">
            <NavItem eventKey={1}>Dashboard</NavItem>
          </IndexLinkContainer>
          <LinkContainer to="/posts">
            <NavItem eventKey={2}>Posts</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
      <div className="container">
        {children}
      </div>
    </div>
  );
}

export default () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="/posts" component={PostsIndex} />
        <Route path="/posts/:postId" component={PostsEdit} />
      </Route>
    </Router>
  )
}
