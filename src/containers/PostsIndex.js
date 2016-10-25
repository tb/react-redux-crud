import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { PostsList } from '../components/posts/PostsList';
import { SearchInput } from '../components/shared/SearchInput';
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
  static contextTypes = {
    router: React.PropTypes.object,
    store: React.PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);

    this.deletePost = this.deletePost.bind(this);
    this.handleSearch = this.handleSearch.bind(this, 'title_like');
  }

  componentDidMount() {
    this.fetchPosts({});
  }

  fetchPosts(params) {
    this.context.store.dispatch(postsActions.fetchPosts(params));
  }

  deletePost(post) {
    this.context.store.dispatch(postsActions.deletePost(post));
  }

  handleSearch(field, value) {
    this.fetchPosts({q: value})
  }

  render() {
    const {
      params,
      posts,
    } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <SearchInput
              value={params.q}
              onSearch={this.handleSearch}
              placeholder="Title search ..."
            />
          </div>
          <div className="col-md-6 text-right">
            <Link to="/posts/new" className="btn btn-primary">New Post</Link>
          </div>
        </div>
        {posts.length > 0 &&
        <PostsList posts={posts} onDelete={this.deletePost}/>}
      </div>
    );
  }
}
