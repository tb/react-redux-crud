import React from 'react';
import { Link } from 'react-router';

export const PostsList = ({posts}) => {
  return (
    <table className="table table-hover">
      <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {posts.map(post => PostsListRow(post))}
      </tbody>
    </table>
  )
};

export const PostsListRow = (post) => {
  return (
    <tr key={post.id}>
      <td>{post.id}</td>
      <td>{post.title}</td>
      <td className="text-right">
        <Link to={`/posts/${post.id}`} className="btn btn-primary">Edit</Link>
        <a className="btn btn-danger">Delete</a>
      </td>
    </tr>
  )
};
