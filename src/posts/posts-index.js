import React from 'react';
import { Link } from 'react-router';
import { PostsList } from './posts-list';
import SearchInput from '../shared/search-input';
import axios from 'axios';
import querystring from 'querystring';

export default class PostsIndex extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts(params = {}) {
    axios.get(`http://localhost:8081/posts?${querystring.stringify(params)}`)
      .then(res => this.setState({posts: res.data}));
  }

  handleDelete(postId) {
    axios.delete(`http://localhost:8081/posts/${postId}`)
      .then(res => this.getPosts());
  }

  handleSearch(field, value) {
    this.getPosts({q: value})
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <SearchInput onSearch={this.handleSearch.bind(this, 'title_like')} placeholder="Title search ..." />
          </div>
          <div className="col-md-6 text-right">
            <Link to="/posts/new" className="btn btn-primary">New Post</Link>
          </div>
        </div>
        <PostsList posts={this.state.posts} onDelete={this.handleDelete.bind(this)}/>
      </div>
    );
  }
}
