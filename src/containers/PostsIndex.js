import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { PostsList } from '../components/posts/PostsList';
import { SearchInput } from '../components/shared/SearchInput';
import store from '../store';
import { postsActions, postsSelectors } from '../store/posts/index';

@connect(
  (state) => {
    return {
      params: postsSelectors.getParams(state),
      posts: postsSelectors.getPosts(state),
    };
  }
)
export class PostsIndex extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts(params = {}) {
    store.dispatch(postsActions.getPosts(params));
  }

  handleDelete(post) {
    store.dispatch(postsActions.deletePost(post));
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
