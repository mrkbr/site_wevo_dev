define([
	'jquery',
	'raphael.amd',
	'underscore'
], function($, Raphael, _){

	return (function(_options, _hotspotData) {

		var 
			me = this
			, paper = {}
			, opts = $.extend({}, {
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
				, hotspotAnimationInterval: {}
				, hotspotAnimationTimeout: {}
			}, _options)
			, hotspotData = $.extend({}, _hotspotData);



			/**
			 * initialize
			 * @returns {*}
			 */
		function initialize() {

			me.hotspots = hotspotData.data;

			$(hotspotData.elemSelector).width(opts.width + 'px').height(opts.height + 'px');
			paper = new Raphael(hotspotData.elemSelector.substring(1));
			paper.setViewBox(0,0,opts.width,opts.height,true);

			setBackgroundImage();
			addHotspot();
			events();
			startHotspotAnimation();

			return me;
		}

			/**
			 * set background image
			 */
		function setBackgroundImage() {
			paper.image(hotspotData.img, 0, 0, opts.width, opts.height);
		}


			/**
			 * add hotspots
			 */
		function addHotspot() {
			_.each(me.hotspots, function(item) {
				item.elemInnerCircle = paper.circle(opts.width / 100 * item.hotspot.x, opts.height / 100 * item.hotspot.y, opts.hotspotRadius).attr({'fill': opts.fillColor, "fill-opacity": '.8', 'stroke-width': 0});
				item.elem = paper.circle(opts.width / 100 * item.hotspot.x, opts.height / 100 * item.hotspot.y, opts.hotspotRadiusOutline).attr({'fill': opts.fillColor, "fill-opacity": "0", "stroke": opts.fillColor, "stroke-width": opts.strokeWidth});
			});
		}


			/**
			 * events
			 */
		function events() {

				// store if previous flag is opened
			var prevFlagOpened = false;

				// bind click on hotspot
			_.each(me.hotspots, function(item) {

				var
					diagonalLine     = {}
					, diagonalLine2  = {}
					, horizontalLine = {}
					, flagBox = {}
					, flagTextbox = {}
					, horizontalLineAnimation = {}
					, flagLeftSide  = item.hotspot.x > item.flag.x ? true : false
					, hotspotX = parseInt(opts.width / 100 * item.hotspot.x, 10)
					, hotspotY = parseInt(opts.height / 100 * item.hotspot.y, 10)
					, hotspot2X = false
					, hotspot2Y = false
					, flagX = parseInt(opts.width / 100 * item.flag.x, 10)
					, flagY = parseInt(opts.height / 100 * item.flag.y, 10)
					, flagOpen = false
					, textStyling = _.isNumber(parseFloat(item.textratio)) ? $.extend({}, opts.textStyling, {'font-size': (parseInt(opts.textStyling['font-size'],10) * parseFloat(item.textratio)) + 'px'}) : opts.textStyling;

					// set hotspot2 position
				if (!_.isUndefined(item.hotspot2)) {
					hotspot2X = _.isUndefined(item.hotspot2.x) ? false : parseInt(opts.width / 100 * item.hotspot2.x, 10);
					hotspot2Y = _.isUndefined(item.hotspot2.y) ? false : parseInt(opts.height / 100 * item.hotspot2.y, 10);
				}

					// close flag
				item.closeFlag = function() {
					if (!_.isEmpty(diagonalLine)) {
						diagonalLine.remove();
					}
					if (!_.isEmpty(diagonalLine2)) {
						diagonalLine2.remove();
					}
					if (!_.isEmpty(horizontalLine)) {
						horizontalLine.remove();
					}
					if (!_.isEmpty(flagBox)) {
						flagBox.remove();
					}
					if (!_.isEmpty(flagTextbox)) {
						flagTextbox.remove();
					}
					if (!_.isEmpty(item.elemInnerCircle2)) {
						item.elemInnerCircle2.remove();
					}
					if (!_.isEmpty(item.elem2)) {
						item.elem2.remove();
					}
					enableAllHotspots();
					startHotspotAnimation();
					flagOpen = false;
				};

					// by default, hot shpot animaiton is active
				item.hotspotAnimationActive = true;

					// disable hotspot animation
				item.disableHotspotAnimation = function() {
					item.hotspotAnimationActive = false;
					item.elem.animate({'transform': "s0.75 0.75"}, 450, "<>");
				};

					// enable hover
				item.enableHotspotAnimation = function() {
					item.hotspotAnimationActive = true;
				};

					// mousouver start pulse for hotspot
				item.elem.mouseout(function() {
					 item.enableHotspotAnimation();
				});

					// mousouver stop pulse for hotspot
				item.elem.mouseover(function() {
					 item.disableHotspotAnimation();
				});

				item.elem.attr({cursor: 'pointer'});

					// click on hotspot
				item.elem.click(function() {

						// check if previous flag is opened
					if (prevFlagOpened && !flagOpen) {
						closeAllFlags();
						prevFlagOpened = false;
					}

						// check if current flag is opened - just close current flag
					if (flagOpen) {
						item.closeFlag();
						prevFlagOpened = false;
						return false;
					}
					flagOpen = true;
					prevFlagOpened = true;

						// set siblings hotspots inactive
					disableSiblingsHotspots(item.elem);
					stopHotspotAnimation();

						// add hotspot2
					if (hotspot2X && hotspot2Y) {
						item.elemInnerCircle2 = paper.circle(opts.width / 100 * item.hotspot2.x, opts.height / 100 * item.hotspot2.y, opts.hotspotRadius).attr({'fill': opts.fillColor, "fill-opacity": '.8', 'stroke-width': 0});
						item.elem2    = paper.circle(opts.width / 100 * item.hotspot2.x, opts.height / 100 * item.hotspot2.y, opts.hotspotRadiusOutline).attr({'fill': opts.fillColor, "fill-opacity": "0", "stroke": opts.fillColor, "stroke-width": opts.strokeWidth});
						diagonalLine2 = paper.path("M" + hotspot2X + " " + hotspot2Y).attr({"stroke": opts.fillColor, "stroke-width": opts.strokeWidth, "fill-opacity": '.8'});
					}

						// add lines
					diagonalLine   = paper.path("M" + hotspotX + " " + hotspotY).attr({"stroke": opts.fillColor, "stroke-width": opts.strokeWidth, "fill-opacity": '.8'});
					horizontalLine = paper.path("M" + flagX + " " + flagY).attr({"stroke": opts.fillColor, "stroke-width": opts.strokeWidth, "fill-opacity": '.8'});

					if (flagLeftSide) {
						horizontalLineAnimation = {path:"M" + flagX + " " + flagY + " L" + (flagX - (opts.flagWidth + opts.flagWidthOffset)) + " " + flagY}
					} else {
						horizontalLineAnimation = {path:"M" + flagX + " " + flagY + " L" + (flagX + (opts.flagWidth + opts.flagWidthOffset)) + " " + flagY}
					}

					// bring hotspot to font (overlay new drawn lines)
					item.elem.toFront();

						// start animation
					if (hotspot2X && hotspot2Y) { diagonalLine2.animate({path:"M" + hotspot2X + " " + hotspot2Y + " L" + flagX + " " + flagY}, 250); }
					diagonalLine.animate({path:"M" + hotspotX + " " + hotspotY + " L" + flagX + " " + flagY}, 250, function() {

							// animate horizontal line
						horizontalLine.animate(horizontalLineAnimation, 500);

						var rectArg = getFlagBoxRect(flagX, flagY, 1, opts.flagHeight, flagLeftSide);
						flagBox     = paper.rect(rectArg[0], rectArg[1], rectArg[2], rectArg[3]).attr({"fill": opts.fillColor, "stroke-width": 0, "fill-opacity": '.8'});

							// show flag box
						if (flagLeftSide) {

							flagBox.animate({
								width : opts.flagWidth,
								height: opts.flagHeight,
								x     : rectArg[0] - opts.flagWidth,
								y     : rectArg[1]
							}, 500, function() {

									// add text to flag
								flagTextbox = paper.text(rectArg[0] - opts.flagWidth + opts.flagTextOffsetLeft, rectArg[1] + opts.flagHeight / 2, item.text).attr(textStyling);
								flagTextbox.animate({'opacity': 1}, 300);
							});

						} else {

							flagBox.animate({
								width : opts.flagWidth,
								height: opts.flagHeight,
								x     : rectArg[0],
								y     : rectArg[1]
							}, 500, function() {

									// add text to flag
								flagTextbox = paper.text(rectArg[0] + opts.flagTextOffsetLeft, rectArg[1] + opts.flagHeight / 2, item.text).attr(textStyling);
								flagTextbox.animate({'opacity': 1}, 300);
							});
						}
					});

				});
			});
		}


			/**
			 * get flag box rect
			 *
			 * @param x
			 * @param y
			 * @param w
			 * @param h
			 * @param flagLeftSide
			 * @returns {Array}
			 */
		function getFlagBoxRect(x, y, w, h, flagLeftSide) {

			var rectArg = [];

				// add x start point (left/right)
			if (flagLeftSide) {
				rectArg.push(x - opts.flagWidthOffset);
			} else {
				rectArg.push(x + opts.flagWidthOffset);
			}

				// add y start point (top/bottom)
			rectArg.push(y + opts.flagHeightOffset);


			rectArg.push(w);
			rectArg.push(h);

			return rectArg;
		}


			/**
			 * disable sibling hotspots
			 *
			 * @param activeElem
			 */
		function disableSiblingsHotspots(activeElem) {
			_.each(me.hotspots, function(item) {
				if (item.elem !== activeElem) {
					item.elem.animate({'opacity': '.3'}, 300);
					item.elemInnerCircle.animate({'opacity': '.3'}, 300);
				}
			});
		}

			/**
			 * close all fags
			 */
		function closeAllFlags() {
			_.each(me.hotspots, function(item) {
				if (_.isFunction(item.closeFlag)) {
					item.closeFlag();
				}
			})
		}


			/**
			 * enable all hotspots
			 */
		function enableAllHotspots() {
			_.each(me.hotspots, function(item) {
				item.elem.animate({'opacity': '.8'}, 300);
				item.elemInnerCircle.animate({'opacity': '.8'}, 300);
			});
		}


			/**
			 * start hotspot animation
			 */
		function startHotspotAnimation() {
			clearTimeout(opts.hotspotAnimationTimeout);
			clearInterval(opts.hotspotAnimationInterval);

				// animate hotspots
			function animate() {
				_.each(me.hotspots, function(item) {
					if (item.hotspotAnimationActive) {
						item.elem.animate({'transform':"s0.9 0.9"}, 450, "<", function() {
							item.elem.animate({'transform':"s1.10 1.10"}, 450, ">", function() {
								item.elem.animate({'transform':"s0.9 0.9"}, 450, "<", function() {
									item.elem.animate({'transform': "s0.75 0.75"}, 450, ">");
								});
							});
						});
					}
				});
			}

			opts.hotspotAnimationTimeout = setTimeout (function() {
				// animate hotspots
				animate();

					// set interval for hotspot animation
				opts.hotspotAnimationInterval = setInterval(function() {
					animate();
				}, 1800);
			}, 1000);
		}


			/**
			 * stop hot spot animation
			 */
		function stopHotspotAnimation() {
			clearTimeout(opts.hotspotAnimationTimeout);
			clearInterval(opts.hotspotAnimationInterval);
		}


			/**
			 * destroy element
			 */
		me.destroy = function() {
				// unbind events
			_.each(me.hotspots, function(item) {
				item.elem.unclick();
			});
				// remove all paths
			paper.clear();
			$(hotspotData.elemSelector).children().remove();
			$(hotspotData.elemSelector).attr('style','');
		};

		return initialize();
	});
});