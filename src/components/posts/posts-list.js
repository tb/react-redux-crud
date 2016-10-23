import React from 'react';
import { Link } from 'react-router';

export const PostsList = ({posts, onDelete}) => {
  return (
    <table className="table table-hover">
      <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Category</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {posts.map(post => PostsListRow({post, onDelete}))}
      </tbody>
    </table>
  )
};

export const PostsListRow = ({post, onDelete}) => {
  return (
    <tr key={post.id}>
      <td>{post.id}</td>
      <td>{post.title}</td>
      <td>{post.category_id}</td>
      <td>
        <div className="btn-toolbar pull-right">
          <Link to={`/posts/${post.id}`} className="btn btn-primary">Edit</Link>
          <a onClick={onDelete.bind(this, post.id)} className="btn btn-danger">Delete</a>
        </div>
      </td>
    </tr>
  )
};
