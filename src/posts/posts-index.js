import React from 'react';
import { Link } from 'react-router';
import { PostsList } from './posts-list';

export default class PostsIndex extends React.Component {
  componentDidMount() {
    console.log('PostsIndex did mount')
  }

  render() {
    let posts = [
      {
        id: 1,
        title: 'Title 1'
      },
      {
        id: 2,
        title: 'Title 2'
      },
      {
        id: 3,
        title: 'Title 3'
      }
    ];

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <input placeholder="Title search ..."></input>
          </div>
          <div className="col-md-6 text-right">
            <Link to="/posts/new" className="btn btn-primary">New Post</Link>
          </div>
        </div>
        <PostsList posts={posts} />
        </div>
    );
  }
}
