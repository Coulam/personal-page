/* The default wrapper for all pages */
import Meta from '../components/Meta/Meta'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation/Navigation'

export default ({ children }) => (
  <div>
    <Meta title={meta.yoast_wpseo_title}
        description={meta.yoast_wpseo_metadesc}
        canonical={meta.yoast_wpseo_canonical} />
    <Navigation/>
    { children }
    <Footer />
  </div>
)