// Overrides the custom app component that Next uses to init content //
// Also allows us to use a Redux wrapper for SSR //
// Transitions docs see here https://www.npmjs.com/package/next-page-transitions //

import React from 'react'
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import App, { Container } from 'next/app'
import { PageTransition } from 'next-page-transitions'
import withRedux from "next-redux-wrapper"
import { initStore } from '../store/index'

/**
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
* @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR 
*/

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const {Component, pageProps, store} = this.props;

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
    )
  }
}

export default withRedux(initStore)(MyApp);
