import Navigation from '../components/Navigation/Navigation'
import Meta from '../components/Meta/Meta'
import React, { Component } from 'react'
import axios from 'axios';
import { Fragment } from 'react'

export default class extends Component {
  // Resolve promise and set initial props.
  static async getInitialProps( context ) {

    const slug = context.query.slug

    // Make request for posts.
    const response = await axios.get( `https://josephcoulam.com/wp-json/wp/v2/posts?slug=${ slug }` )

    // Return our only item in array from response to posts object in props.
    return {
      post: response.data[0]
    }
  }

  render() {
    let meta = this.props.post.yoast_meta
    return (
      <Fragment>
        <Meta title={meta.yoast_wpseo_title}
        description={meta.yoast_wpseo_metadesc}
        canonical={meta.yoast_wpseo_canonical} />
        <Navigation/>
        <h1>{ this.props.post.title.rendered }</h1>
        <article
          className="entry-content"
          dangerouslySetInnerHTML={ {
            __html: this.props.post.content.rendered
          } } />
      </Fragment>
    )
  }
}