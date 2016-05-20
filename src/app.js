import React from 'react';
import { Route, IndexRoute, Router, hashHistory } from 'react-router';
import Login from './auth/login';
import Dashboard from './dashboard/dashboard';
import PostsIndex from './posts/posts-index';
import PostsEdit from './posts/posts-edit';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import {Auth} from './auth/auth';

require('./app.scss');

let App = ({children}) => {
  return (
    <div>
      <Navbar>
        <Nav>
          <IndexLinkContainer to="/">
            <NavItem>Dashboard</NavItem>
          </IndexLinkContainer>
          <LinkContainer to="/posts">
            <NavItem>Posts</NavItem>
          </LinkContainer>
        </Nav>
        {Auth.authenticated() && <Nav className="pull-right">
          <NavItem onClick={Auth.logout.bind(this)}>Logout</NavItem>
        </Nav>}
        {!Auth.authenticated() && <Nav className="pull-right">
          <LinkContainer to="/login">
            <NavItem>Login</NavItem>
          </LinkContainer>
        </Nav>}
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
      <Route path="/login" component={Login} />
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="/posts" component={PostsIndex} />
        <Route path="/posts/new" component={PostsEdit} />
        <Route path="/posts/:postId" component={PostsEdit} />
      </Route>
    </Router>
  )
}
