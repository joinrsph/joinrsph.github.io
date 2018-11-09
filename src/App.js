import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/home";
// import ExplorePage from "./pages/explore";
import DestinationsPage from "./pages/destinations";
import DetailsPage from "./pages/details";
import BookingPage from "./pages/booking";
import MyAccountPage from "./pages/my-account";
import SearchPage from "./pages/search";
import CartPage from "./pages/cart";
import LoginPage from "./pages/login";
import CreateAccountPage from "./pages/create-account";

import ErrorPage from "./pages/error-page";

// import Footer from "./components/organisms/global/footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/details" component={DetailsPage} />
            <Route path="/destinations" component={DestinationsPage} />
            <Route path="/booking" component={BookingPage} />
            <Route path="/my-account" component={MyAccountPage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/create-account" component={CreateAccountPage} />
            <Route component={ErrorPage} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
