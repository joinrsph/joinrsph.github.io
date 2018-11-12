import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

import Footer from "../components/organisms/global/footer";

import CardsImage from "../components/cards-image";

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
        <div className="card-columns">
          <CardsImage
            CardUrl="/destination-details"
            CardImgSrc="https://dummyimage.com/800x16:9/f1f2f3/fafafa"
            CardTitle="Ilocos"
          />
          <CardsImage
            CardUrl="/destination-details"
            CardImgSrc="https://dummyimage.com/800x16:9/f1f2f3/fafafa"
            CardTitle="Ilocos"
          />
          <CardsImage
            CardUrl="/destination-details"
            CardImgSrc="https://dummyimage.com/800x16:9/f1f2f3/fafafa"
            CardTitle="Ilocos"
          />
          <CardsImage
            CardUrl="/destination-details"
            CardImgSrc="https://dummyimage.com/800x16:9/f1f2f3/fafafa"
            CardTitle="Ilocos"
          />
          <CardsImage
            CardUrl="/destination-details"
            CardImgSrc="https://dummyimage.com/800x16:9/f1f2f3/fafafa"
            CardTitle="Ilocos"
          />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default DestinationsPage;
