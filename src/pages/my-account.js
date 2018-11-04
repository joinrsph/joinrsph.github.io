import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

import Footer from "../components/organisms/global/footer";

class MyAccount extends Component {
  render() {
    return (
      <Fragment className="transition-item">
        <main className="container">
          <div className="heading">
            <h1 className="heading-title">Booking</h1>
          </div>
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

export default MyAccount;
