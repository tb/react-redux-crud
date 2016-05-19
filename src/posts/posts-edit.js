import React from 'react';
import axios from 'axios';

export default class PostsEdit extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      postId: this.props.params.postId,
      post: {}
    };
  }

  componentDidMount() {
    if (this.state.postId) {
      axios.get(`http://localhost:8081/posts/${this.state.postId}`)
        .then(res => this.setState({post: res.data}));
    }
  }

  render() {
    return (
      <form novalidate>
        <div class='form-group'>
          <label className="label-control">Title</label>
          <input value={this.state.post.title} className="form-control" />
        </div>
        <div class='form-group'>
          <label className="label-control">Body</label>
          <textarea rows="10" value={this.state.post.body} className="form-control" />
        </div>
      </form>
    );
  }
}

PostsEdit.propsTypes = {
  params: React.PropTypes.object
};
