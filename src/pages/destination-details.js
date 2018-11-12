import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

class DestinationDetailsPage extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-light navbar-expand fixed-top">
          <NavLink to="">
            <i className="fas fa-chevron-left" />
            Back
          </NavLink>
        </nav>
        <div className="jumbotron mb-0" />
      </Fragment>
    );
  }
}

export default DestinationDetailsPage;
