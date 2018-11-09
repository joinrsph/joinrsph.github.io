import React, { Component, Fragment } from "react";

import "../pages/error-page.css";

class ErrorPage extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-light navbar-expand fixed-top">
          Error Page
        </nav>
        <main className="container" />
      </Fragment>
    );
  }
}

export default ErrorPage;
