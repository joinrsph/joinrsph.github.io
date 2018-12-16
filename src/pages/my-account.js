import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

import Footer from "../components/organisms/global/footer";

class MyAccountPage extends Component {
  render() {
    return (
      <Fragment>
        <main className="container">
          <NavLink className="btn btn-primary btn-pills btn-block" to="/login">
            Login
          </NavLink>
          <NavLink
            className="btn btn-light btn-pills btn-block"
            to="/create-account"
          >
            Create Account
          </NavLink>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default MyAccountPage;
