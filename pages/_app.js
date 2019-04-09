// Overrides the custom app component that Next uses to init content //
// Also allows us to use a Redux wrapper for SSR //
// Transitions docs see here https://www.npmjs.com/package/next-page-transitions //

import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import { PageTransition } from "next-page-transitions";
import withRedux from "next-redux-wrapper";

const reducer = (state = { foo: "" }, action) => {
  switch (action.type) {
    case "FOO":
      return { ...state, foo: action.payload };
    default:
      return state;
  }
};

/**
 * @param {object} initialState
 * @param {boolean} options.isServer indicates whether it is a server side or client side
 * @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
 * @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
 * @param {boolean} options.debug User-defined debug mode param
 * @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
 */
const makeStore = (initialState, options) => {
  return createStore(reducer, initialState);
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    ctx.store.dispatch({ type: "FOO", payload: "foo" });

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <PageTransition timeout={300} classNames="page-transition">
            <Component {...pageProps} />
          </PageTransition>
          <style jsx global>{`
            .page-transition-enter {
              opacity: 0;
            }
            .page-transition-enter-active {
              opacity: 1;
              transition: opacity 300ms;
            }
            .page-transition-exit {
              opacity: 1;
            }
            .page-transition-exit-active {
              opacity: 0;
              transition: opacity 300ms;
            }
          `}</style>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(MyApp);