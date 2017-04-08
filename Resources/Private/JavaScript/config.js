require.config({
	paths: {
		bootstrap: '../../../bower_components/bootstrap/dist/js/bootstrap',
		bootstrapCollapse: '../../../bower_components/bootstrap/js/collapse',
		bootstrapTransition: '../../../bower_components/bootstrap/js/transition',
		jquery: '../../../bower_components/jquery/dist/jquery',
		requirejs: '../../../bower_components/requirejs/require',
		b_dropdown: '../../../bower_components/b_dropdown/dist/b_dropdown.min',
		breakpointlistener: '../../../bower_components/breakpointlistener/dist/breakpointlistener.min',
		bowser: '../../../bower_components/bowser/bowser',
		'js-isInViewport': '../../../bower_components/js-isInViewport/src/isInViewport',
		underscore: '../../../bower_components/underscore/underscore',
		'slick-carousel': '../../../bower_components/slick-carousel/slick/slick.min',
		'js-sliderWithProgressbar': '../../../bower_components/js-sliderWithProgressbar/dist/js-sliderWithProgressbar',
		'jquery.vimeo.api': '../../../bower_components/vimeo-jquery-api/dist/jquery.vimeo.api.min',
		countUp: '../../../bower_components/countUp.js/dist/countUp.min',
		modernizr: 'contrib/modernizr.custom.65441',
		swiffyRuntime: 'contrib/swiffyRuntime',
		animatedIcons: 'animatedIcons',
		detectMobileBrowser: 'contrib/detectMobileBrowser',
		options: 'options',
		vimeoUtility: 'vimeoUtility',
		videoAccordion: 'view/videoAccordion',
		isInViewport: '../../../bower_components/isInViewport/src/isInViewport',
		hasFlash: '../../../bower_components/hasFlash/dist/hasFlash.min',
		vivus: '../../../bower_components/vivus/dist/vivus',
		headroom: '../../../bower_components/headroom.js/dist/headroom',
		'jQuery.headroom': '../../../bower_components/headroom.js/dist/jQuery.headroom',
		'angular.headroom': '../../../bower_components/headroom.js/dist/angular.headroom',
		paper: '../../../bower_components/paper/dist/paper-full',
		raphael: '../../../bower_components/raphael/raphael.min',
		eve: '../../../bower_components/eve-raphael/eve',
		'raphael.amd': '../../../bower_components/raphael/dev/raphael.amd',
		'raphael.core': '../../../bower_components/raphael/dev/raphael.core',
		'raphael.svg': '../../../bower_components/raphael/dev/raphael.svg',
		'raphael.vml': '../../../bower_components/raphael/dev/raphael.vml',
		raphaeltest: '../../../bower_components/raphael/raphael.no-deps',
		'eve-raphael': '../../../bower_components/eve-raphael/eve',
		isotope: '../../../bower_components/isotope/js/isotope',
		'desandro-matches-selector': '../../../bower_components/desandro-matches-selector/matches-selector',
		'fizzy-ui-utils': '../../../bower_components/fizzy-ui-utils/utils',
		'get-size': '../../../bower_components/get-size/get-size',
		masonry: '../../../bower_components/masonry/masonry',
		outlayer: '../../../bower_components/outlayer/outlayer',
		'ev-emitter': '../../../bower_components/ev-emitter/ev-emitter',
		'isotope-packery': '../../../bower_components/isotope-packery/packery-mode',
		packery: '../../../bower_components/packery/js/packery'
	},
	shim: {
		bootstrap: {
			deps: [
				'jquery'
			]
		},
		bootstrapCollapse: {
			deps: [
				'jquery',
				'bootstrapTransition'
			]
		},
		bootstrapTransition: {
			deps: [
				'jquery'
			]
		},
		modernizr: {
			exports: 'Modernizr'
		},
		'slick-carousel': {
			deps: [
				'jquery'
			]
		},
		'jQuery.headroom': {
			deps: [
				'headroom'
			]
		},
		'raphael.amd': {
			deps: [
				'raphael.core',
				'raphael.svg',
				'raphael.vml',
				'paper'
			],
			exports: 'Raphael'
		}
	},
	packages: [

	]
});

// require main js
require(['main','extension']);
