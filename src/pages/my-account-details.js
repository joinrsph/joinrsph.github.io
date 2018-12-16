import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

import Footer from "../components/organisms/global/footer";

// import "./../_assets/login-page.css"
import Avatar from "../_assets/img/avatar.png";

class MyAccountPageDetails extends Component {
  render() {
    return (
      <Fragment>
        <main className="container">
          <div className="media">
            <div className="media-body">
              <h6 className="h5 mb-0">Jasper</h6>
              <NavLink className="small" to="">
                View/Edit Profile
              </NavLink>
            </div>
            <div className="ml-3">
              <img
                className="rounded-circle"
                src={Avatar}
                width="48"
                height="48"
                alt=""
              />
            </div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="media">
                <div className="media-body">Notifications</div>
                <div className="ml-3">
                  <i className="far fa-bell" />
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="media">
                <div className="media-body">Invite friends</div>
                <div className="ml-3">
                  <i className="fas fa-gift" />
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="media">
                <div className="media-body">
                  Refer a host
                  <div className="small">
                    Earn P789 for each new host you refer
                  </div>
                </div>
                <div className="ml-3">
                  <i className="fas fa-gift" />
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="media">
                <div className="media-body">Credits &amp; coupons</div>
                <div className="ml-3">
                  <i className="fas fa-award" />
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="media">
                <div className="media-body">Host an experience</div>
                <div className="ml-3">
                  <i className="far fa-bell" />
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="media">
                <div className="media-body">Payments</div>
                <div className="ml-3">
                  <i className="far fa-money-bill-alt" />
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="media">
                <div className="media-body">Settings</div>
                <div className="ml-3">
                  <i className="fas fa-cog" />
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="media">
                <div className="media-body">Get help</div>
                <div className="ml-3">
                  <i className="fas fa-question" />
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="media">
                <div className="media-body">
                  Learn about hosting
                  <div className="small">Earn up to P24,036 per month</div>
                </div>
                <div className="ml-3">
                  <i className="fas fa-home" />
                </div>
              </div>
            </li>{" "}
            <li className="list-group-item">
              <div className="media">
                <div className="media-body">List your space</div>
                <div className="ml-3">
                  <i className="fas fa-home" />
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="media">
                <div className="media-body">Give us feedback</div>
                <div className="ml-3">
                  <i className="far fa-comments" />
                </div>
              </div>
            </li>
          </ul>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default MyAccountPageDetails;
