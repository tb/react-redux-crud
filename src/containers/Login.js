import React from 'react';
import { Auth } from '../services/index';

export class Login extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      email: 'user@example.com',
      password: 'secret'
    };
  }

  handleChange(field, e) {
    this.setState(Object.assign({}, this.state, {[field]: e.target.value}))
  }

  handleSubmit() {
    Auth.login(this.state)
     .then(() => this.goToIndex());
  }

  goToIndex() {
    this.context.router.push('/posts');
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="panel panel-default col-sm-6 col-md-4 col-md-offset-4">
            <div className="panel-body">
              <form onSubmit={this.handleSubmit.bind(this)} noValidate>
                <div className="form-group">
                  <label className="label-control">Email</label>
                  <input
                    className="form-control"
                    value={this.state.email}
                    onChange={this.handleChange.bind(this, 'email')} />
                </div>
                <div className="form-group">
                  <label className="label-control">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={this.state.password}
                    onChange={this.handleChange.bind(this, 'password')} />
                </div>
                <button type="submit" className="btn btn-default">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
