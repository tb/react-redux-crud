import React from 'react';
import Textarea from 'react-textarea-autosize';
import axios from 'axios';

export default class PostsEdit extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      postId: this.props.params.postId,
      post: {title: '', body: ''}
    };
  }

  componentDidMount() {
    if (this.state.postId) {
      axios.get(`http://localhost:8081/posts/${this.state.postId}`)
        .then(res => this.setState({post: res.data}));
    }
  }

  handleChange(field, e) {
    let post = Object.assign({}, this.state.post, {[field]: e.target.value});
    this.setState(Object.assign({}, this.state, {post}))
  }

  handleSubmit() {
    if (this.state.postId) {
      axios.put(`http://localhost:8081/posts/${this.state.postId}`, this.state.post)
        .then(() => this.goToIndex());
    } else {
      axios.post(`http://localhost:8081/posts`, this.state.post)
        .then(() => this.goToIndex());
    }
  }

  goToIndex() {
    this.context.router.push('/posts');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} novalidate>
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

        <button type="submit" className="btn btn-default">{this.state.postId ? 'Update' : 'Create' } Post</button>
      </form>
    );
  }
}

PostsEdit.contextTypes = {
  router: React.PropTypes.object
};


PostsEdit.propsTypes = {
  params: React.PropTypes.object
};
