const config  = require( './webpack.dist.conf' );
const webpack = require( 'webpack' );
const util = require( './util' );
webpack( config, function( err, stats ) {
    if (err) {
        util.logErrors(err);
    }
    // show build info to console
    console.log( stats.toString() );
} );