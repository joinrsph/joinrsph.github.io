import React, { Component, Fragment } from "react";

import { NavLink } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <Fragment>
        <main className="container">
          <form className="login-form">
            <div className="heading">
              <h1 className="heading-title h3">Sign In</h1>
              <p className="heading-subtitle">with your Joiners account</p>
            </div>
            <p className="text-muted">
              Enter your <b>Email or Username</b> and <b>Password</b>
            </p>

            <div className="form-group">
              <input
                className="form-control form-control-lg "
                id="email-or-username"
                name="email-or-username"
                type="email"
                placeholder="Email or Username"
              />
              <span className="form-helper" />
            </div>
            <div className="form-group">
              <input
                className="form-control form-control-lg "
                id="password"
                name="password"
                type="password"
                placeholder="Password"
              />
              <span className="form-helper" />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rembember-me"
              />
              <label className="form-check-label" for="rembember-me">
                Rembember me
              </label>
            </div>
            <div className="button-group">
              <NavLink
                className="btn btn-primary btn-lg btn-block btn-pills"
                to=""
              >
                Login
              </NavLink>
              <NavLink className="btn btn-link btn-lg btn-block" to="">
                Forgot Password?
              </NavLink>
            </div>
          </form>
        </main>
      </Fragment>
    );
  }
}

export default Login;
