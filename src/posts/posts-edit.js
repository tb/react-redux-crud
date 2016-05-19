import React from "react";

export default class PostsEdit extends React.Component {
  componentDidMount() {
    console.log('PostsEdit did mount')
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Posts Edit</h1>
      </div>
    );
  }
}
