import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

import Footer from "../components/organisms/global/footer";

import LogoImg from "../_assets/img/LOGO_Joiners-Colored.svg";

class ExplorePage extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-light navbar-expand fixed-top">
          <div className="navbar-brand">
            <img src={LogoImg} height="32" alt="" />
            <span className="navbar-text">JOINERS</span>
          </div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/search">
                <i className="fas fa-search" />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                <i className="fas fa-shopping-bag" />
              </NavLink>
            </li>
          </ul>
        </nav>
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

export default ExplorePage;
