import React, { Component, Fragment } from "react";

import Footer from "../components/organisms/global/footer";

class BookingPage extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-light navbar-expand fixed-top">
          Booking
        </nav>
        <main className="container" />
        <Footer />
      </Fragment>
    );
  }
}

export default BookingPage;
