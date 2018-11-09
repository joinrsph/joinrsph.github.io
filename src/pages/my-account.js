import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

import Footer from "../components/organisms/global/footer";

class MyAccountPage extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-light navbar-expand fixed-top">
          My Account
        </nav>
        <main className="container">
          <NavLink className="btn btn-primary" to="/login">
            Login
          </NavLink>
          <NavLink className="btn btn-primary" to="/create-account">
            Create Account
          </NavLink>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default MyAccountPage;
