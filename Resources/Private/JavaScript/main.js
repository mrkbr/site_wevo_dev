// namespace
var B = B || {};

define("main", [
	"jquery"
	, "underscore"
	, "options"
	, "detectMobileBrowser"
	, 'breakpointlistener'
	, "hasFlash"
	, "modernizr"
	, "jQuery.headroom"
	, "bootstrapCollapse"
], function($, _, _opts, _isMobileBrowser, _breakpointlistener, hasFlash, Modernizr) {
	
	B.BreakpointListener = new _breakpointlistener({
		breakpoints: {
			"xs": 0,
			"sm": 768,
			"md": 992,
			"lg": 1400
		}
	});
		// will be called on document ready
	function initialize() {

			// detect mobile browser
		if (_isMobileBrowser) {
			$('html').addClass('b_state-mobile');	
		} else {
			$('html').addClass('b_state-no-mobile')
		}


		if (!Modernizr.video && !hasFlash) {

			$('html').addClass('b_no-video');
		}

		initIsInViewport();
		initHeader();
		initShortFactSlider();
		initImageVideoSlider();
		new initBranchSlider();
		new initBranchImageSlider();
		initPropertyModule();
		initVideoAccordion();
		initProductTabs();
		initMobileHover();
		initSwitchImageModule();
		initTimeline();
		initSearch();
		initAnimatedIcons();
		initLoadAccordionContent();
	}

		/**
		 * init header
		 * @returns {*}
		 */
	function initHeader() {
		var
			me = this
			, s = {
				$header          : $('#bJS_header')
				, toggleMenuFlyoutSelector       : '.bJS_toggleMenu'
				, flyoutMenuActiveClassName      : 'b_state-menuOpen'
				, toggleHeaderAnimationClassName : 'b_state-toggleItemAnimation'
				, finishHeaderAnimationClassName : 'b_state-toggleItemAnimation-finish'
				, menuOpen: false
			};

		function initialize() {
			s.$header.headroom({tolerance:5,offset:100});
			events();
			return me;
		}

		function events() {

			var timeout;

				// toggle flyout menu by click on menu button
			s.$header.on('click', s.toggleMenuFlyoutSelector, function(evt) {
				evt.preventDefault();

				s.$header.stop(true, true);
				clearTimeout(timeout);
				timeout = setTimeout(function() {
					if (s.menuOpen) {
						s.menuOpen = false;
						s.$header.removeClass(s.toggleHeaderAnimationClassName);
						setTimeout(function() { s.$header.removeClass(s.flyoutMenuActiveClassName); }, 150);
						setTimeout(function() {
							$('#bJS_main, #bJS_footer').removeClass('hidden');
							s.$header.removeClass(s.finishHeaderAnimationClassName);
						}, 350);
					} else {
						s.menuOpen = true;
						s.$header.addClass(s.flyoutMenuActiveClassName);
							// make sure main and footer area are hidden -> iOS 8 Bug #WEVO-102
						$('#bJS_main, #bJS_footer').addClass('hidden');
						setTimeout(function() { s.$header.addClass(s.toggleHeaderAnimationClassName); }, 550);
						setTimeout(function() { s.$header.addClass(s.finishHeaderAnimationClassName); }, 1000);
					}
				},50);
			});

				// open flyout menu by click on navbar
			s.$header.on('click', function(evt) {
				if (evt.target.tagName !== "A" && !s.menuOpen) {
					$(this).find(s.toggleMenuFlyoutSelector).trigger('click');
				}
			});
		}


		return initialize();
	}



		/**
		 * init image video slider
		 * @returns {*}
		 */
	function initImageVideoSlider() {
		var
			me = this
			, s = {
				$slider              : $('#bJS_imageVideoSlider')
				, vimeoSelector      : "iframe[src*='vimeo.com']"
				, scrollDownSelector : ".bJS_scrollDown"
				, slider             : {}
				, activeVideo        : false
				, videoRatio         : 16/9
				, disableVideo       : false
			};

		function initialize() {

			if (s.$slider.length == 0) { return false; }

				// don't show videos for touch or mobile devices
			if (Modernizr.touch || _isMobileBrowser) {
				s.$slider.find(s.vimeoSelector).remove();
				s.$slider.find('[data-customprogressbar="true"]').removeAttr('data-customprogressbar');
			}

				// if address bar is visible on page load 100vh (css) is to height
				// set correct height for ios devices
			if (_isMobileBrowser || navigator.userAgent.match(/iPad/i)) {
				s.$slider.height($(window).height());
			}

			require([
				'js-sliderWithProgressbar'
				, 'vimeoUtility'
			], function(slider, _vimeoUtility) {

				s.slider = new slider(s.$slider, {
					slideSelector          : '.bJS_slider'
					, previewSlideSelector : '.bJS_previewSlider'
					, onCustomProgressbar : function($slide, $progressbar, _me) {
						var _slick = _me.getSlick();
						_me.stop();
						var $video = new _vimeoUtility.initVimeoSlice($slide, $progressbar, function() {
							s.activeVideo = false;
								// restart slick slider and show next slide immediately
								// slickNext(); is called to skip the autoplay duration
							_me.start();
							_slick.slickNext();
						});

							// make sure 'beforeChange' event stack is executed
							// before the active video reference is stored
						setTimeout(function() {
							s.activeVideo = $video;
							if (!s.disableVideo) {
								$video.vimeo("play");
							} else {
									// because video is disabled use slider default duration
								_me.start();
								_me.startProgressbarAnimation();
							}
						}, 1);
					}
				}, {
					autoplay        : true
					, infinite      : true
					, dots          : false
					, centerMode    : false
					, pauseOnHover  : false
					, autoplaySpeed : 6000
				}, {
					centerPadding   : '0px'
					, slidesToShow  : 4
					, slidesToScroll: 1
					, arrows        : false
					, focusOnSelect : true
					, centerMode    : false
					, pauseOnHover  : false
				});

				events();

					// set videos to fullscreen
				_vimeoUtility.setVideosFullscreen(s.$slider.find(s.vimeoSelector), s.videoRatio, $(window));
			});

				// store module reference to trigger video playing if module is inside the viewport
			s.$slider.data("module", me);

			return me;
		}


			/**
			 * events
			 */
		function events() {

				// on slide
			s.$slider.find('.bJS_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
					// if video is still playing -> stop it
				if (s.activeVideo) {
					s.activeVideo.vimeo("unload");
					s.activeVideo = false;
					if (!sliceContainsVideo(nextSlide)) {
						slick.slickPlay();
					}
				}
			});

				// click on scroll down arrow
				// scroll to next element
			s.$slider.on('click', s.scrollDownSelector, function(evt) {
				evt.preventDefault();
				$('html, body').stop(true, true).animate({ scrollTop: s.$slider.height()}, 300);
			});

				// resize videos
			require(['vimeoUtility'], function(_vimeoUtility) {
				var resizeTimeout;
				$(window).on('resize', function() {
					clearTimeout(resizeTimeout);
					resizeTimeout = setTimeout(function() {
						_vimeoUtility.setVideosFullscreen(s.$slider.find(s.vimeoSelector), s.videoRatio, $(window));
					}, 50);
				});
			});
		}

			/**
			 * slice contains video
			 * @param index
			 * @returns {bool}
			 */
		function sliceContainsVideo(index) {
			return s.$slider.find('.bJS_slider [data-slick-index="'+index+'"]').find(s.vimeoSelector).length == 0 ? false : true;
		}

			/**
			 * enable video playing
			 * and jump to next slide to start with an video
			 */
		me.enableVideos = function() {
			if (s.disableVideo) {
				s.slider.getSlick().slickNext();
			}
			s.disableVideo = false;
		};

			/**
			 * disable video playing
			 */
		me.disableVideos = function() {
			s.disableVideo = true;
			s.$slider.find(s.vimeoSelector).each(function() {
				$(this).vimeo("unload");
			});
		};


		return initialize();
	}




		/**
		 * init branch slider
		 * @returns {*}
		 */
	function initBranchSlider() {
		var
			me = this
			, s = {
				$branchSlider           : $('#bJS_branchSlider')
				, vimeoSelector         : 'iframe[src*="vimeo.com"]'
				, branchSliderSelector  : '.bJS_slider'
				, previewSliderSelector : '.bJS_previewSlider'
				, previewSliceSelector  : '.bJS_previewSlice'
				, slider                : {}
				, activeVideo           : false
				, videoRatio            : 16/9
				, disableVideo          : true
			};

		function initialize() {

			if (s.$branchSlider.length == 0) { return false; }

				// don't show videos for touch or mobile devices
			if (Modernizr.touch || _isMobileBrowser) {
				s.$branchSlider.find(s.vimeoSelector).remove();
				s.$branchSlider.find('[data-customprogressbar="true"]').removeAttr('data-customprogressbar');
			}


			require([
				'js-sliderWithProgressbar'
				, 'vimeoUtility'
			], function(slider, _vimeoUtility) {

				s.slider = new slider(s.$branchSlider, {
					slideSelector          : s.branchSliderSelector
					, previewSlideSelector : s.previewSliderSelector
					, onCustomProgressbar : function($slide, $progressbar, _me) {
						var _slick = _me.getSlick();
						_me.stop();
						var $video = new _vimeoUtility.initVimeoSlice($slide, $progressbar, function() {
							s.activeVideo = false;
								// restart slick slider and show next slide immediately
								// slickNext(); is called to skip the autoplay duration
							_me.start();
							_slick.slickNext();
						});

							// make sure 'beforeChange' event stack is executed
							// before the active video reference is stored
						setTimeout(function() {
							s.activeVideo = $video;
							if (!s.disableVideo) {
								$video.vimeo("play");
							} else {
									// because video is disabled use slider default duration
								_me.start();
								_me.startProgressbarAnimation(_slick.getSlick());
							}
						}, 1);
					}
				}, {
						// options for branch slider
					asNavFor        : s.$branchSlider.find(s.previewSliderSelector)
					, autoplay      : true
					, slidesToShow  : 1
					, slidesToScroll: 1
					, infinite      : true
					, arrows        : false
					, dots          : false
					, centerMode    : false
					, pauseOnHover  : false

				}, {
						// options for preview branch slider
					asNavFor        : s.$branchSlider.find(s.branchSliderSelector)
					, slidesToShow  : 4
					, slidesToScroll: 1
					, arrows        : false
					, focusOnSelect : true
					, centerMode    : false
					, pauseOnHover  : false
				});

				events();

					// set videos to fullscreen
				_vimeoUtility.setVideosFullscreen(s.$branchSlider.find(s.vimeoSelector), s.videoRatio, s.$branchSlider);
			});

				// store module reference to trigger video playing if module is inside the viewport
			s.$branchSlider.data("module", me);

			return me;
		}


			/**
			 * events
			 */
		function events() {
				// on slide
			s.$branchSlider.find(s.branchSliderSelector).on('beforeChange', function(event, slick, currentSlide, nextSlide) {

					// if video is still playing -> stop it
				if (s.activeVideo) {
					s.activeVideo.vimeo("unload");
					s.activeVideo = false;
					if (!sliceContainsVideo(nextSlide)) {
						slick.slickPlay();
					}
				}
			});

				/**
				 * on hover over icon show slide
				 */
			s.$branchSlider.find(s.previewSliderSelector).on('mouseenter', s.previewSliceSelector, function(evt) {
				evt.preventDefault();
				if (Modernizr.touch) { return false; }
				var index = $(this).data('slick-index');
					// important to call the slickGoTo() function on the mail slider
				$(this).closest(s.$branchSlider).find(s.branchSliderSelector)[0].slick.slickGoTo(index);
			});


				// resize videos
			require(['vimeoUtility'], function(_vimeoUtility) {
				var resizeTimeout;
				$(window).on('resize', function() {
					clearTimeout(resizeTimeout);
					resizeTimeout = setTimeout(function() {
						_vimeoUtility.setVideosFullscreen(s.$branchSlider.find(s.vimeoSelector), s.videoRatio, $('.bJS_branchSlider'));
					}, 50);
				});
			});
		}

			/**
			 * slice contains video
			 * @param index
			 * @returns {bool}
			 */
		function sliceContainsVideo(index) {
			return s.$branchSlider.find(s.branchSliderSelector + ' [data-slick-index="'+index+'"]').find(s.vimeoSelector).length == 0 ? false : true;
		}

			/**
			 * enable video playing
			 * and jump to next slide to start with an video
			 */
		me.enableVideos = function() {
			if (s.disableVideo) {
				s.slider.getSlick().slickNext();
			}
			s.disableVideo = false;
		};

			/**
			 * disable video playing
			 */
		me.disableVideos = function() {
			s.disableVideo = true;
		};

		return initialize();
	}


		/**
		 * init branch image slider
		 * @returns {*}
		 */
	function initBranchImageSlider() {
		var
			me = this
			, s = {
				$branchImageSlider      : $('#bJS_branchImageSlider')
				, branchSliderSelector  : '.bJS_slider'
				, previewSliderSelector : '.bJS_previewSlider'
				, previewSliceSelector  : '.bJS_previewSlice'
				, slider                : {}
			};

		function initialize() {

			if (s.$branchImageSlider.length == 0) { return false; }
			

			require([
				'js-sliderWithProgressbar'
			], function(slider) {

				s.slider = new slider(s.$branchImageSlider, {
					slideSelector          : s.branchSliderSelector
					, previewSlideSelector : s.previewSliderSelector
					, onCustomProgressbar : function($slide, $progressbar, _me) {
						var _slick = _me.getSlick();
						_me.start();
						_me.startProgressbarAnimation(_slick.getSlick());
					}
				}, {
						// options for branch slider
					asNavFor        : s.$branchImageSlider.find(s.previewSliderSelector)
					, autoplay      : true
					, slidesToShow  : 1
					, slidesToScroll: 1
					, infinite      : true
					, arrows        : false
					, dots          : false
					, centerMode    : false
					, pauseOnHover  : false

				}, {
						// options for preview branch slider
					asNavFor        : s.$branchImageSlider.find(s.branchSliderSelector)
					, slidesToShow  : 4
					, slidesToScroll: 1
					, arrows        : false
					, focusOnSelect : true
					, centerMode    : false
					, pauseOnHover  : false
				});

				events();
			});

				// store module reference to trigger video playing if module is inside the viewport
			s.$branchImageSlider.data("module", me);

			return me;
		}


			/**
			 * events
			 */
		function events() {

				// on slide
			s.$branchImageSlider.find(s.branchSliderSelector).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
				slick.$slider.find('[data-slick-index="'+nextSlide+'"]').addClass('b_state-animate');
			});

			s.$branchImageSlider.find(s.branchSliderSelector).on('afterChange', function(event, slick, currentSlide) {
				slick.$slider.find('[data-slick-index="'+currentSlide+'"]').siblings().removeClass('b_state-animate');
			});

				/**
				 * on hover over icon show slide
				 */
			s.$branchImageSlider.find(s.previewSliderSelector).on('mouseenter', s.previewSliceSelector, function(evt) {
				evt.preventDefault();
				if (Modernizr.touch) { return false; }
				var index = $(this).data('slick-index');
					// important to call the slickGoTo() function on the mail slider
				$(this).closest(s.$branchImageSlider).find(s.branchSliderSelector)[0].slick.slickGoTo(index);
			});
		}

		return initialize();
	}




		/**
		 * init short facts slider
		 * used on startpage
		 * @returns {*}
		 */
	function initShortFactSlider() {
		var
			me = this
			, s = {
				$shortFactSlider        : $('.bJS_shortFactsSlider')
				, factsSliderSelector   : '.bJS_facts'
				, previewSliderSelector : '.bJS_preview'
				, countUpSelector       : '.bJS_countUp'
				, slider : []
				, countUpOptions : {
					useEasing    : true,
					useGrouping  : false,
					separator    : ',',
					decimal      : '.',
					prefix       : '',
					suffix       : ''
				}
			};

		function initialize() {

			if (s.$shortFactSlider.length == 0) { return false; }

			require(['js-sliderWithProgressbar'], function(slider) {

				s.$shortFactSlider.each(function() {
					var _slider = new slider($(this), {
						slideSelector          : s.factsSliderSelector
						, previewSlideSelector : s.previewSliderSelector
					}, {
							// options for facts slider
						mobileFirst     : true
						, autoplaySpeed : 6000
						, slidesToShow  : 1
						, slidesToScroll: 1
						, infinite      : true
						, arrows        : false
						, dots          : true
						, centerMode    : false
						, pauseOnHover  : false
						, dotsClass     : 'list-unstyled list-inline b_pagination'
						, asNavFor      : $(this).find(s.previewSliderSelector)
						, customPaging  : function() {
							return '<i></i>';
						}
						, responsive   : [{
							breakpoint : _opts.breakpoints.sm
							, settings : {
								dots   : false
							}
						}]
					}, {
							// options for preview facts slider
							// just visible for breakpoint > xs
						mobileFirst     : true
						, autoplaySpeed : 6000
						, asNavFor      : $(this).find(s.factsSliderSelector)
						, arrows        : false
						, focusOnSelect : true
						, centerMode    : false
						, pauseOnHover  : false
						, responsive    : [{
							breakpoint: _opts.breakpoints.sm
							, settings: {
								dots            : false
								, slidesToShow  : 6
								, slidesToScroll: 1
								, arrows        : false
							}
						}]
					});

						// trigger count up animation
					doCountUpAnimation($(this).find(s.factsSliderSelector), $(this).find(s.factsSliderSelector)[0].slick.slickCurrentSlide());

					s.slider.push(_slider);
				});
			});

			events();

			return me;
		}

		function events() {

				// trigger count up animation
			s.$shortFactSlider.find(s.factsSliderSelector).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
				doCountUpAnimation($(this), nextSlide, currentSlide);
				// update pagination active state
				s.$shortFactSlider.find(s.previewSliderSelector + ' [data-slick-index="'+nextSlide+'"]').addClass('slick-active').siblings().removeClass('slick-active');
			});
			
		}

			/**
			 * do count up animation
			 * @param $el
			 * @param slideIndex
			 */
		function doCountUpAnimation($el, sliceIndex, prevSliceIndex) {

			require(['countUp'], function(_CountUp) {
				var
					$countUpItem       = $el.find('[data-slick-index="'+sliceIndex+'"] ' + s.countUpSelector)
					, $prevCountUpItem = $el.find('[data-slick-index="'+prevSliceIndex+'"] ' + s.countUpSelector)
					, countUp          = $countUpItem.data('countUp');

				if (countUp == undefined) {
					countUp = new _CountUp($countUpItem.attr('id'), $prevCountUpItem.length == 1 ? $prevCountUpItem.data('animationtarget') : 0, $countUpItem.data('animationtarget'), 0, 1.2, s.countUpOptions);
					$el.data('countUp', countUp);
				}
				countUp.start();
			});
		}

		return initialize();
	}


		/**
		 * property module
		 * @returns {*}
		 */
	function initPropertyModule() {
		var
			me = this
			, s = {
				$propertyModule: $('.bJS_propertyModule')
				, togglePropertyModuleSelector: '.bJS_togglePropertyModule'
				, closePropertyModuleSelector : '.bJS_closePropertyModule'
				, showAdditionalInfoClassName : 'b_state-showAdditionalInfosForCol-'
			};

		function initialize() {

			if (s.$propertyModule.length == 0) { return false; }
			events();
			return me;
		}

		function events() {

				// toggle additional info by col
			s.$propertyModule.on('click', s.togglePropertyModuleSelector, function(evt) {
				evt.preventDefault();
				var colNum = $(this).data('col');
				s.$propertyModule.removeClass(s.showAdditionalInfoClassName + '1').removeClass(s.showAdditionalInfoClassName + '2').addClass(s.showAdditionalInfoClassName + colNum);
			});

				// close additional info
			s.$propertyModule.on('click', s.closePropertyModuleSelector, function(evt) {
				evt.preventDefault();
				s.$propertyModule.removeClass(s.showAdditionalInfoClassName + '1').removeClass(s.showAdditionalInfoClassName + '2');
			});
		}

		return initialize();
	}

		/**
		 * init video accordion
		 */
	function initVideoAccordion(){

		var $videoAccordions = $('#bJS_videoAccordion');
		if(!$videoAccordions.length) return false;

		require(['videoAccordion'], function(VideoAccordion){
			new VideoAccordion($videoAccordions);
		});
	}

		/**
		 * init product tabs
		 * @returns {*}
		 */
	function initProductTabs() {
		var
			me = this
			, s = {
				$tabs : $('#bJS_productResultTabs')
			};

		function initialize() {
			if (s.$tabs.length == 0) { return false; }

			require([
				"isInViewport"
			], function(_isInViewportPlugin) {

					// init is in viewport
				new _isInViewportPlugin({
					selector   : s.$tabs.selector,
					threshold  : -200,
					timeout    : 150,
					afterChange: function(obj, collection) {
						_.each(collection, function(obj) {
							if (obj.isInViewport) {
								obj.$this.addClass('b_state-toggleItemAnimation');
							}
						});
					}
				});
			});

			events();
			return me;
		}

		function events() {

				// make sure just one tab is open
				// this is needed because of a custom html structure
			s.$tabs.on('click', 'a[data-toggle="collapse"]', function() {
				s.$tabs.find('a[data-toggle="collapse"]').not($(this)).each(function() {
					$($(this).attr('href')).collapse('hide');
				});
			});
		}

		return initialize();
	}


		/**
		 * init mobile hover
		 * first click: show hover/overlay....
		 * second click: fire link the normal way
		 * @returns {*}
		 */
	function initMobileHover() {
		var
			me = this
			, s = {
				$showMobileHover : $('.bJS_showMobileHover')
				, itemSelector   : '.bJS_item'
				, hoverActiveClassName : 'b_state-hoverActive'
			};

		function initialize() {
			if (!Modernizr.touch) { return false; }
			events();
			return me;
		}

		function events() {

			s.$showMobileHover.on('click', 'a', function(evt) {
				if (!$(this).closest(s.itemSelector).hasClass(s.hoverActiveClassName)) {
					evt.preventDefault();
					$(this).closest(s.itemSelector).addClass(s.hoverActiveClassName);
				}
			});
		}

		return initialize();
	}


		/**
		 * init Switch Image Module
		 * @returns {*}
		 */
	function initSwitchImageModule() {
		var
			me = this
			, s = {
				$module               : $('.bJS_switchImageModule')
				, switchImageSelector : '.bJS_switchImage'
				, toggleImageSelector : '.bJS_toggleImageSwitch'
				, activeClassName     : 'b_state-active'
			};

		function initialize() {
			if (s.$module.length == 0) { return false; }
			events();
			return me;
		}

		function events() {

			s.$module.on('click', s.toggleImageSelector, function(evt) {
				evt.preventDefault();
				if ($(this).hasClass(s.activeClassName)) { return false; }

				var
					index  = $(this).data('index')
					, $img = $(this).closest(s.$module).find(s.switchImageSelector + ' > img');

				$(this).closest(s.$module).find(s.toggleImageSelector).removeClass(s.activeClassName);
				$(this).addClass(s.activeClassName);
				$img.removeClass(s.activeClassName);
				$img.filter(':eq('+index+')').addClass(s.activeClassName);
			});
		}

		return initialize();
	}


	/**
	 * init Timeline
	 * draw an svg timeline with vivus
	 * the animation will start if the plugin is inside the viewport
	 * @returns {*}
	 */
	function initTimeline() {
		var
			me = this
			, s = {
				timelineSelector: '#bJS_timeline'
				, $moveLeft  : $('#bJS_timelineModule .bJS_moveLeft')
				, $moveRight : $('#bJS_timelineModule .bJS_moveRight')
				, btnDisabledClassName : 'disabled'
				, played: false
				, isActive: false
			};

		function initialize() {

			if ($(s.timelineSelector).length == 0) { return false; }

			// require([
			// 	"isInViewport"
			// 	, "vivus"
			// ], function(_isInViewportPlugin, Vivus) {
			//
			// 		// init vivus
			// 	me.timeline = new Vivus(s.timelineSelector.slice(1), {
			// 		type              : "delayed",
			// 		duration          : 350,
			// 		start             : "manual",
			// 		file              : $('#bJS_timelineModule').data('timelineurl'),
			// 		animTimingFunction: Vivus.EASE_OUT,
			// 		pathTimingFunction: Vivus.EASE
			// 	}, function() {
			// 		// store reference to svg
			// 	});
			//
			// 		// init is in viewport
			// 	new _isInViewportPlugin({
			// 		selector   : s.timelineSelector,
			// 		threshold  : 100,
			// 		timeout    : 150,
			// 		afterChange: function(obj, collection) {
			// 			if (obj.getAllVisibleItemsInViewport().length > 0 && !s.played) {
			// 				s.played = true;
			// 					// start drawing
			// 				me.timeline.play();
			// 			}
			// 		}
			// 	});
			//
			// 	events();
			//
			// });

			events();
			
			return me;
		}

			// events
		function events() {

				// move timeline left
			s.$moveLeft.on('click', function(evt) {
				evt.preventDefault();
				if (!$(this).hasClass(s.btnDisabledClassName)) {
					move("left");
				}
			});

				// move timeline right
			s.$moveRight.on('click', function(evt) {
				evt.preventDefault();
				if (!$(this).hasClass(s.btnDisabledClassName)) {
					move("right");
				}
			});

		}


		/**
		 * move timeline to left or right
		 * max movement per click is the viewport width
		 * @param {string} direction
		 */
		function move(direction) {
			var
				viewportWidth = $(window).width()
				, $svg = $(s.timelineSelector).find('object')
				, timelineWidth = $svg.outerWidth();

			if ($svg.outerWidth() <= viewportWidth || s.isActive) { return false; }
			var left = Math.abs(parseInt($svg.css('margin-left'),10)), move = 0;

			s.$moveRight.removeClass(s.btnDisabledClassName);
			s.$moveLeft.removeClass(s.btnDisabledClassName);

				// move to right
			if (direction == "right" && left + viewportWidth < timelineWidth) {

				if (timelineWidth - viewportWidth > left + viewportWidth) {
					move = left + viewportWidth;
				} else {
					move = timelineWidth - viewportWidth;
						// disable move to right btn
					s.$moveRight.addClass(s.btnDisabledClassName);
				}

				// move to left
			} else if (direction == "left" && left > 0) {

				if (left > viewportWidth) {
					move = left - viewportWidth;
				} else {
					move = 0;
						// disable move to left btn
					s.$moveLeft.addClass(s.btnDisabledClassName);
				}

			} else {

				return false;
			}

			s.isActive = true;

				// do animation
			$svg.animate({
				'marginLeft': '-' + move + 'px'
			}, 350, function() {
				s.isActive = false;
			});
		}

		return initialize();
	}


	/**
	 * init search
	 * used for search inside the flyout
	 * @returns {*}
	 */
	function initSearch() {
		var
			me = this
			, s = {
				$searchForm: $('#bJS_search')
				, $searchInput: $('#bJS_search .bJS_searchInput')
				, activeStateClassName : 'b_state-active'
				, activeSuggestsLayerClassName : 'b_state-showSuggestions'
				, timeout: ''
				, searchAction: $('#bJS_search').attr('action')
			};

		function initialize() {

			if (s.$searchForm.length == 0) { return false; }
			events();
			return me;
		}

		function events() {

				// first click on the submit button (zoom icon)
				// will show the search input. Secound click submits the form the normal way
			s.$searchForm.on('submit', function(evt) {
				if (!$(this).hasClass(s.activeStateClassName) && B.BreakpointListener.getCurrentBreakpoint() !== "xs") {
					evt.preventDefault();
					$(this).addClass(s.activeStateClassName);
					s.$searchInput.focus();
				}
			});

				// show suggest dropdown
			s.$searchInput.on('keyup', function() {

				var $this = $(this);

				if ($this.val().length < 3) {
					s.$searchForm.removeClass(s.activeSuggestsLayerClassName);
				}

				clearTimeout(s.timeout);
				s.timeout = setTimeout(function() {

					if ($this.val().length < 3) { return false; }

					$.ajax({
						url: tx_solr_suggestUrl,
						dataType: 'json',
						data: {
							termLowercase: $this.val().toLowerCase(),
							termOriginal: $this.val(),
							L: jQuery('div.tx-solr input[name="L"]').val()
						},
						success: function(data) {

								// append response
							var template = _.template('<ul class="list-unstyled">' +
													  '<% _.each(results,function(uid, value) { %>' +
													  '<li><a href="<%= url %><%= value %>"><%= value %></a></li>' +
													  '<% }); %>' +
													  '</ul>');

							s.$searchForm.find('.bJS_searchAsYouType').children().remove();
							s.$searchForm.find('.bJS_searchAsYouType').append(template({results: data, url: s.searchAction.indexOf('?') == -1 ? s.searchAction + "?q=" : s.searchAction + "&q=" }));

							if (!_.isEmpty(data)) {
								s.$searchForm.addClass(s.activeSuggestsLayerClassName);
							} else {
								s.$searchForm.removeClass(s.activeSuggestsLayerClassName);
							}
						}
					});
				}, 100);
			});

			s.$searchInput.on('focusout', function() {
				setTimeout(function() {
					s.$searchForm.removeClass(s.activeSuggestsLayerClassName);
					s.$searchForm.find('.bJS_searchAsYouType').children().remove();
				}, 500);
			});
		}

		return initialize();
	}


		/**
		 * init animated icons
		 * @returns {*}
		 */
	function initAnimatedIcons() {
		var
			me = this
			, s = {
				$animatedIcons: $('.bJS_animatedIcon')
			};

		function initialize() {

			if (s.$animatedIcons.length == 0) { return false; }

			require([
				'animatedIcons'
			], function(icons) {

				s.$animatedIcons.each(function() {
					var stage = new swiffy.Stage($(this)[0], icons[$(this).data('icon')], {});
					stage.start();
					stage.setBackground('transparent');
				});
			});

			return me;
		}

		return initialize();
	}


		/**
		 * is in viewport
		 * @returns {*}
		 */
	function initIsInViewport() {
		var
			me = this
			, s = {
				itemSelector : '.bJS_playVideoInsideViewport'
			};

		function initialize() {

			require(['isInViewport'], function(_isInViewportPlugin) {

				var viewport = new _isInViewportPlugin({
					selector    : '.bJS_playVideoInsideViewport'
					, threshold : 0
					, timeout   : 150
						// called after timeout
						// callback is fired after viewport changed (resize) and/or after change
					, afterChange : function(obj, collection) {
						_.each(collection, function(obj) {
							var module = obj.$this.data('module');
							if (obj.isInViewport) {
								obj.$this.removeClass('b_state-disableVideos');
								if (module) {
									module.enableVideos();
								}
							} else {
								obj.$this.addClass('b_state-disableVideos');
								if (module) {
									module.disableVideos();
								}
							}
						});
					}
				});
			});

			return me;
		}

		return initialize();
	}


	/**
	 * init load accordion content
	 * @returns {*}
	 */
	function initLoadAccordionContent() {
		var
			me = this
			, s = {
				loadContentSelector: '.bJS_loadContentViaAjax'
				, $accordionAjaxContainer : $('#bJS_accordionAjaxContainer')
			};

		function initialize() {

			if (_isMobileBrowser) { return false; }

			var id = 0;

			// load content for accordion items
			$(s.loadContentSelector).each(function() {
				var $target = $($(this).attr('href'));
				loadContent($target.data('contenturl')).done(function(content) {
					$target.children().remove();
					$target.append($('<div>' + content + '</div>').find('#bJS_main').attr('id', ''));
						// add unique id for each glossary accordion #WEVOSD-14
					$target.find('a[href="#bJS_glossary"]').attr({"href": "#bJS_glossary-id" + id, "aria-controls": "bJS_glossary-id" + id});
					$target.find('#bJS_glossary').attr('id', 'bJS_glossary-id' + id);
					id++;
				});
			});

				// on open a accordion item close siblings
			s.$accordionAjaxContainer.find('[id^="bJS_subpage-"]').on('show.bs.collapse', function() {
				s.$accordionAjaxContainer.find('[id^="bJS_subpage-"]').not($(this)).collapse('hide');
			});


				// if a collapsed is open, scroll to the headline of it
			s.$accordionAjaxContainer.find('[id^="bJS_subpage-"]').on('shown.bs.collapse', function(){
				var
					id = $(this).attr('id')
					, $item = $('a[aria-controls='+ id +']')
					, currScrollTop = $(window).scrollTop();

				if ($item.length == 0) { return false; }

				scrollTop = $item.offset().top;
				$('body').css('overflow', 'hidden');

					// check if we have to put an offset for the navigation in the header
				if (scrollTop < currScrollTop){
					scrollTop = scrollTop - 70;
				}
				$('html, body').stop(true, true).animate({ scrollTop: scrollTop}, Math.abs($(window).scrollTop() - scrollTop), function() {
				 	$('body').removeAttr('style');
				});
			});

			$('div[id^="bJS_glossary"]').on('hidden.bs.collapse', function () {
				$(this).find('div[aria-expanded="true"]').each(function() {
					$(this).collapse('hide');
				})
			});

			return me;
		}

			/**
			 * load content
			 * @param url
			 * @returns {*}
			 */
		function loadContent(url) {
			return $.ajax({
				url: url
				, ajaxData: "ajax=1"
			});
		}

		return initialize();
	}


		/**
		 * funciton will be called by inline js
		 * @param hotspotsData
		 * @returns {*}
		 */
	B.initHotspots = function(hotspotsData) {
		var
			me = this
			, s = {
				hotspotObj : {}
			};

		function initialize() {

			renderHotspots(hotspotsData);

			B.BreakpointListener.onChangeBreakpoint(function(evt){
				if (!_.isEmpty(s.hotspotObj)) {
					s.hotspotObj.destroy();
					renderHotspots(hotspotsData);
				}
			});

			return me;
		}

			/**
			 * render hotspots
			 */
		function renderHotspots(hotspotsData) {

			require(['view/hotspot'], function(hotspot) {

				if (B.BreakpointListener.getCurrentBreakpoint() == "lg") {

					s.hotspotObj = new hotspot({
						width: 917
						, height: 515
						, hotspotRadius        : 12
						, hotspotRadiusOutline : 22
						, fillColor            : '#0084ff'
						, flagWidth            : 430
						, flagWidthOffset      : 7
						, flagHeight           : 60
						, flagHeightOffset     : 7
						, flagTextOffsetLeft   : 10
						, strokeWidth          : 2
						, textStyling          : {
							'opacity'       : 0
							, 'text-anchor' : 'start'
							, "fill"        : '#ffffff'
							, 'font-size'   : '30px'
							, 'font-family' : "wevoLight"
							, 'font-weight' : 300
						}
					}, hotspotsData);

				} else if (B.BreakpointListener.getCurrentBreakpoint() == "md") {

					s.hotspotObj = new hotspot({
						width: 660
						, height: 371
						, hotspotRadius        : 8
						, hotspotRadiusOutline : 15
						, fillColor            : '#0084ff'
						, flagWidth            : 304
						, flagWidthOffset      : 5
						, flagHeight           : 42
						, flagHeightOffset     : 5
						, flagTextOffsetLeft   : 6
						, strokeWidth          : 1
						, textStyling          : {
							'opacity'       : 0
							, 'text-anchor' : 'start'
							, "fill"        : '#ffffff'
							, 'font-size'   : '20px'
							, 'font-family' : "wevoLight"
							, 'font-weight' : 300
						}
					}, hotspotsData);

				} else if (B.BreakpointListener.getCurrentBreakpoint() == "sm") {

					s.hotspotObj = new hotspot({
						width: 720
						, height: 405
						, hotspotRadius        : 8
						, hotspotRadiusOutline : 15
						, fillColor            : '#0084ff'
						, flagWidth            : 304
						, flagWidthOffset      : 5
						, flagHeight           : 42
						, flagHeightOffset     : 5
						, flagTextOffsetLeft   : 6
						, strokeWidth          : 1
						, textStyling          : {
							'opacity'       : 0
							, 'text-anchor' : 'start'
							, "fill"        : '#ffffff'
							, 'font-size'   : '20px'
							, 'font-family' : "wevoLight"
							, 'font-weight' : 300
						}
					}, hotspotsData);

				} else {

					// show mobile hotspot element

					var template = _.template('' +
						'<div class="b_mobileHotspotElement b_m1">' +
							'<% _.each(data, function(item) { %>' +
								'<span class="c_mobileHotspot" style="left: <%= item.hotspot.x %>%; top: <%= item.hotspot.y %>%;"><%= item.id %></span>' +
							'<% }); %>' +
							'<img src="<%= img %>" class="img-responsive" />' +
						'</div>' +
						'<div class="b_mobileHotspotElementLegend b_m2">' +
							'<ul class="list-unstyled">' +
								'<% _.each(data, function(item) { %>' +
									'<li><%= item.id %> <%= item.text %></li>' +
								'<% }); %>' +
							'</ul>' +
						'</div>'
					);

					$(hotspotsData.elemSelector).append(template({data: hotspotsData.data, img: hotspotsData.img}));
				}
			});
		}

		return initialize();
	};
	


	// document ready
	$(function() {
		initialize();
	});

	return B;
});