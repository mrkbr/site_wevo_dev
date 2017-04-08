
	function isoGal(){


		// require the require function
		requirejs( [
			'require',
			'jquery',
			'../../../bower_components/isotope/dist/isotope.pkgd.js',
		],
			function( require, $, Isotope ) {
				// require jquery-bridget, it's included in isotope.pkgd.js
				require( [
					'jquery-bridget/jquery-bridget',
					'../../../bower_components/isotope-packery/packery-mode.pkgd.min.js' ],
				function( jQueryBridget ) {
					// make Isotope a jQuery plugin
					jQueryBridget( 'isotope', Isotope, $ );
					// now you can use $().isotope()
					$('.isoGal .inner').isotope({
						itemSelector: '.isoGalItem',
						gutter: 0,
						//layoutMode: 'packery',
					});
				}
			);
		});

	};
