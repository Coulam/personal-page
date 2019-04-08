import Navigation from '../components/Navigation/Navigation'
import Meta from '../components/Meta/Meta'
import Slider from '../components/Slider/Slider'
import Link from 'next/link'
import React, { Component, Fragment } from 'react'
import axios from 'axios'

export default class extends Component {

  // Resolve promise and set initial props.
  static async getInitialProps () {

    // Make request for posts.
    const response = await axios.get( 'http://josephcoulam.com/wp-json/wp/v2/posts')

    // Return response to posts object in props.
    return {
      posts: response.data
    }
  }

  render() {
    console.log(posts)
    return (
      <Fragment>
        <Meta title={"Joe Coulam - Latest Posts Page"}
        description={"Example Description"}
        canonical={"https://www.josephcoulam.com/posts"} />
        <Slider />
        <Navigation/>
        <h1>Our Posts Page!</h1>
        <ul>
          {
            this.props.posts.map( post => {
              return (
                <li key={ post.id }>
                    <Link href={ `/posts/${ post.slug }` }>
                        <a href={ `/posts/${ post.slug }` }>
                            { post.title.rendered }
                        </a>
                    </Link>
                </li>
              )
            })
          }
        </ul>
      </Fragment>
    )
 }
}