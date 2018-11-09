import React, { Component, Fragment } from "react";

import Footer from "../components/organisms/global/footer";

class DestinationsPage extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-light navbar-expand fixed-top">
          <div>&times;</div>
          <div>Destinations</div>
          <div>&times;</div>
        </nav>
        <main className="container" />
        <Footer />
      </Fragment>
    );
  }
}

export default DestinationsPage;
