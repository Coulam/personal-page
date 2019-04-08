const routes = require( 'next-routes' );

// Setup router.
module.exports = routes()
  .add( 'index', '/' )
  .add( 'posts' )
  .add( 'posts-single', '/posts/:slug' );