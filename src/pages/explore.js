import React, { Component, Fragment } from "react";

import Footer from "../components/organisms/global/footer";

class Explore extends Component {
  render() {
    return (
      <Fragment className="transition-item list-page">
        <div className="jumbotron jumbotron-fluid text-white mb-0">
          <div className="container">
            <h1>We do the Planning for You</h1>
            <p>Let's Book the Vacation of Your Dream!</p>

            <form action="">
              <div className="form-group">
                <input
                  className="form-control form-control-lg "
                  id="legal-business-name"
                  name="legal-business-name"
                  type="search"
                  placeholder="Where are you going?"
                />
              </div>

              <div className="form-group mb-0">
                <div className="form-row">
                  <div className="col-8">
                    <input
                      className="form-control form-control-lg "
                      id="legal-business-name"
                      name="legal-business-name"
                      type="date"
                      placeholder="Where are you going?"
                    />
                  </div>
                  <div className="col-4">
                    <input
                      className="form-control form-control-lg "
                      id="legal-business-name"
                      name="legal-business-name"
                      type="number"
                      placeholder="Where are you going?"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Explore;
