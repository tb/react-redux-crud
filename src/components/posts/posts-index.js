import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { PostsList } from './posts-list';
import SearchInput from '../shared/search-input';
import store from '../../store';
import * as postsActions from '../../store/actions/posts-actions';

@connect((state) => {
  return {
    params: state.postsState.params,
    posts: state.postsState.posts
  };
})
export default class PostsIndex extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    if (!this.props.posts.length) {
      this.getPosts();
    }
  }

  getPosts(params = {}) {
    store.dispatch(postsActions.getPosts(params));
  }

  handleDelete(postId) {
    store.dispatch(postsActions.deletePost(postId));
  }

  handleSearch(field, value) {
    this.getPosts({q: value})
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <SearchInput value={this.props.params.q} onSearch={this.handleSearch.bind(this, 'title_like')} placeholder="Title search ..." />
          </div>
          <div className="col-md-6 text-right">
            <Link to="/posts/new" className="btn btn-primary">New Post</Link>
          </div>
        </div>
        {this.props.posts.length > 0 && <PostsList posts={this.props.posts} onDelete={this.handleDelete.bind(this)}/>}
      </div>
    );
  }
}
