import Navigation from "../components/organisms/Navigation/Navigation";
import SplashScreen from "../components/organisms/SplashScreen/SplashScreen";
import { Fragment } from "react";
import { connect } from "react-redux";
import React, {Component} from "react";

class Page extends Component {
  static getInitialProps({ store, isServer, pathname, query }) {
    store.dispatch({ type: "FOO", payload: "foo" }); // component will be able to read from store's state when rendered
    return { custom: "custom" }; // you can pass some custom props to component from here
  }
  render() {
    return (
      <Fragment>
        <Navigation />
        <SplashScreen />
      </Fragment>
    );
  }
}

export default connect(state => state)(Page);
