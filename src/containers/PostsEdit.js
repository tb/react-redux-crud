import React from 'react';
import Textarea from 'react-textarea-autosize';
import { postsActions, postsSelectors } from '../store/posts/index';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';

@connect(
  (state, props) => {
    return {
      post: postsSelectors.getPost(state, props.params.postId),
    };
  }
)
export class PostsEdit extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object,
    store: React.PropTypes.object
  };

  static propTypes = {
    params: React.PropTypes.object,
    post: React.PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      ...this.state,
      postId: this.props.params.postId,
      post: {title: '', body: ''}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.post, this.state.post)) {
      this.setState({...this.state, post: nextProps.post});
    }
  }

  componentDidMount() {
    if (this.state.postId) {
      this.context.store.dispatch(postsActions.fetchPost(this.props.params.postId));
    }
  }

  handleChange(field, e) {
    const post = Object.assign({}, this.state.post, {[field]: e.target.value});
    this.setState(Object.assign({}, this.state, {post}));
  }

  handleSubmit() {
    if (this.state.postId) {
      this.context.store.dispatch(postsActions.updatePost(this.state.post));
    } else {
      this.context.store.dispatch(postsActions.createPost(this.state.post));
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} noValidate>
        <div className="form-group">
          <label className="label-control">Title</label>
          <input
            type="text"
            className="form-control"
            value={this.state.post.title}
            onChange={this.handleChange.bind(this, 'title')} />
        </div>

        <div className="form-group">
          <label className="label-control">Body</label>
          <Textarea
            className="form-control"
            value={this.state.post.body}
            onChange={this.handleChange.bind(this, 'body')} />
        </div>

        <button type="submit" className="btn btn-default">
          {this.state.postId ? 'Update' : 'Create' } Post
        </button>
      </form>
    );
  }
}
