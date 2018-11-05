import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

class CreateAccount extends Component {
  render() {
    return (
      <Fragment>
        <main className="container">
          <form className="login-form">
            <div className="heading">
              <h1 className="heading-title h3">Get started absolutely free.</h1>
              <p className="heading-subtitle">
                Free forever. No credit card needed.
              </p>
            </div>
            <div className="form-group form-name-group">
              <label className=" " for="">
                Full Name
              </label>
              <div className="form-row">
                <div className="col">
                  <input
                    className="form-control  "
                    id="first-name"
                    name="first-name"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="col">
                  <input
                    className="form-control  "
                    id="last-name"
                    name="last-name"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className=" " for="email-address">
                Email Address
              </label>

              <input
                className="form-control  "
                id="email-address"
                name="email-address"
                type="email"
                placeholder="name@example.com"
              />
            </div>

            <div className="form-group">
              <label className=" " for="mobile-number">
                Mobile Number
              </label>

              <input
                className="form-control  "
                id="mobile-number"
                name="mobile-number"
                type="tel"
                pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
                placeholder="09XX XXX XXXX"
              />
            </div>

            <div className="form-group">
              <label className=" " for="password">
                Choose a Password
              </label>

              <input
                className="form-control  "
                id="password"
                name="password"
                type="password"
                placeholder="Choose a Password"
              />
            </div>

            <div className="button-group text-center">
              <NavLink
                className="btn btn-primary btn-lg btn-wide btn-pills"
                to=""
              >
                Continue
              </NavLink>
              <div className="text-sm text-muted mt-3">
                By clicking "Continue" I agree to Joiners's <br />
                <NavLink to="">Terms of Service</NavLink> and{" "}
                <NavLink to="">Privacy Policy</NavLink>.
              </div>
            </div>
          </form>
        </main>
      </Fragment>
    );
  }
}

export default CreateAccount;
