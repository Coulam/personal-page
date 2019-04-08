import Head from "next/head"
import PropTypes from "prop-types"

const Meta = (props) => (
  <div>
  <Head>
    <title>{props.title}</title>
    <meta name="description" content={props.description} />
    <meta name="author" content="Joe Coulam" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="canonical" href={props.canonical} />
    <meta charSet="utf-8" />
  </Head>
  </div>
);

Meta.defaultPropTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  canonical: PropTypes.string
}
export default Meta;