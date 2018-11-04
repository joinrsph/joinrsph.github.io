import React, { Component, Fragment } from "react";

import Footer from "../components/organisms/global/footer";

class Booking extends Component {
  render() {
    return (
      <Fragment>
        <main className="container">
          <div className="heading">
            <h1 className="heading-title">Booking</h1>
          </div>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Booking;
