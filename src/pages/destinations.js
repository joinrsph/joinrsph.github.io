import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

import Footer from "../components/organisms/global/footer";

class DestinationsPage extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-light navbar-expand fixed-top">
          <div>Destinations</div>
        </nav>
        <ul className="nav nav-tabs nav-tabs-responsive nav-justified">
          <li className="nav-item">
            <NavLink className="nav-link active" data-toggle="tabs" to="">
              Popular
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" data-toggle="tabs" to="">
              All
            </NavLink>
          </li>
        </ul>
        <main className="container" />
        <Footer />
      </Fragment>
    );
  }
}

export default DestinationsPage;
