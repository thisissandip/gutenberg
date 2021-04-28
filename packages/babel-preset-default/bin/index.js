#!/usr/bin/env node

require( 'core-js-builder' )( {
	modules: [ 'es', 'web' ],
	exclude: [ 'es.promise' ],
	targets: require( '@wordpress/browserslist-config' ),
	filename: './polyfill.js',
} ).catch( ( error ) => {
	// eslint-disable-next-line no-console
	console.log( error );
	process.exit( 1 );
} );
