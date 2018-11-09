import React, { Component, Fragment } from "react";
// import { NavLink } from "react-router-dom";

import Footer from "../components/organisms/global/footer";

// import LogoImg from "../_assets/img/LOGO_Joiners-Colored.svg";

import CardsVertical from "../components/cards-vertical";

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-light navbar-expand fixed-top">
          <div className="container">
            <input
              className="form-control border-0 shadow"
              id="legal-business-name"
              name="legal-business-name"
              type="search"
              placeholder="Where are you going?"
            />
          </div>
        </nav>
        <main className="container">
          <div className="heading">
            <h1 className="heading-title h3">Recent</h1>
          </div>
          <div className="row card-scrollable" id="style-1">
            <CardsVertical
              CardUrl="/details"
              CardImgSrc="https://dummyimage.com/800x4:3/f1f2f3/fafafa"
            />
            <CardsVertical
              CardUrl="/details"
              CardImgSrc="https://dummyimage.com/800x4:3/f1f2f3/fafafa"
            />
            <CardsVertical
              CardUrl="/details"
              CardImgSrc="https://dummyimage.com/800x4:3/f1f2f3/fafafa"
            />
            <CardsVertical
              CardUrl="/details"
              CardImgSrc="https://dummyimage.com/800x4:3/f1f2f3/fafafa"
            />
            <CardsVertical
              CardUrl="/details"
              CardImgSrc="https://dummyimage.com/800x4:3/f1f2f3/fafafa"
            />
            <div className="spacer" />
          </div>
          <div className="heading">
            <h1 className="heading-title h3">Popular</h1>
          </div>
          <div className="row card-scrollable" id="style-2">
            <CardsVertical
              CardUrl="/details"
              CardImgSrc="https://dummyimage.com/800x4:3/f1f2f3/fafafa"
            />
            <CardsVertical
              CardUrl="/details"
              CardImgSrc="https://dummyimage.com/800x4:3/f1f2f3/fafafa"
            />
            <CardsVertical
              CardUrl="/details"
              CardImgSrc="https://dummyimage.com/800x4:3/f1f2f3/fafafa"
            />
            <CardsVertical
              CardUrl="/details"
              CardImgSrc="https://dummyimage.com/800x4:3/f1f2f3/fafafa"
            />
            <CardsVertical
              CardUrl="/details"
              CardImgSrc="https://dummyimage.com/800x4:3/f1f2f3/fafafa"
            />
            <div className="spacer" />
          </div>
          <div className="heading">
            <h1 className="heading-title h3">Recomended</h1>
          </div>
          <div className="card-columns">
            <CardsVertical
              CardUrl="/details"
              CardImgSrc="https://dummyimage.com/800x4:3/f1f2f3/fafafa"
            />
            <CardsVertical
              CardUrl="/details"
              CardImgSrc="https://dummyimage.com/800x4:3/f1f2f3/fafafa"
            />
            <CardsVertical
              CardUrl="/details"
              CardImgSrc="https://dummyimage.com/800x4:3/f1f2f3/fafafa"
            />
            <CardsVertical
              CardUrl="/details"
              CardImgSrc="https://dummyimage.com/800x4:3/f1f2f3/fafafa"
            />
            <CardsVertical
              CardUrl="/details"
              CardImgSrc="https://dummyimage.com/800x4:3/f1f2f3/fafafa"
            />
            <div className="spacer" />
          </div>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default HomePage;
