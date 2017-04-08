/**
 * Video accordion for wevo
 */

define('videoAccordion', [
	'jquery',
	'underscore',
	'detectMobileBrowser',
	'modernizr',
	'hasFlash',
	'jquery.vimeo.api'
], function($, _, _isMobileBrowser, Modernizr, hasFlash){

	var vimeoEmbeddingTemplate = _.template('<iframe id="bJS_vimeoItem-<%= vimeoID %>" src="//player.vimeo.com/video/<%= vimeoID %>?autoplay=1&title=0&loop=1&autopause=0&portrait=0&byline=0?&api=1&player_id=<%= vimeoID %>" width="<%= width %>" height="<%= height %>" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');

	var VideoAccordion = function(el, opts){
		this.initialize(el, opts);
	};

	VideoAccordion.prototype = {

		defaultOpts: {
			maxVideoWidth: 1400,
			videoRatio: 16/9
		},

		/**
		 * Settings
		 */
		s: {
			itemSelector: '.bJS_videoAccordion-item',
			itemContentSelector: '.bJS_videoAccordion-item-content',
			itemHeaderSelector: '.bJS_videoAccordion-item-header',
			disableVideo: true
		},

		/**
		 * Init function
		 *
		 * @param el
		 * @param opts
		 */
		initialize: function(el, opts){

			this.$el = $(el);
			this.$items = this.$el.find(this.s.itemSelector);
			this.$itemsHeader = this.$el.find(this.s.itemHeaderSelector);
			this.hasVideoSupport = Modernizr.video || hasFlash;

			this.opts = $.extend({},this.defaultOpts, opts || {});

			_.bindAll(this, '_onItemHeaderClick', '_onResizeWindow', 'closeItem', 'openItem', 'toggleItem', 'enableVideos', 'disableVideos');
			this._bindEvents();
			if(this.$items.length){
				this.openItem(this.$items.get(0));
			}

				// store module reference to trigger video playing if module is inside the viewport
			this.$el.data("module", this);
		},

		/**
		 * Bind events od the accordion
		 * @private
		 */
		_bindEvents: function(){
			this.$itemsHeader.on('click', this._onItemHeaderClick);
			$(window).on('resize', this._onResizeWindow);
		},

		/**
		 * Item header click event handler.
		 * Opens item if its header was clicked. Does NOT toggle element.
		 *
		 * @param evt
		 * @private
		 */
		_onItemHeaderClick: function(evt){
			var $itemHeader = $(evt.currentTarget),
				$itemEl = $itemHeader.closest(this.s.itemSelector);
			this.openItem($itemEl);
		},

		/**
		 * Window resize handler.
		 * Triggers dimension update.
		 *
		 * @private
		 */
		_onResizeWindow: function(){
			var $activeItem = this.getActiveItem();
			if($activeItem.length){
				this.updateDimensions($activeItem);
			}
		},

		/**
		 * Returns the accordion item that is currently opened.
		 * Item is returned as instanceof jQuery.
		 *
		 * @returns {*}
		 */
		getActiveItem: function(){
			var $activeItems = this.$items.filter('.b_active');
			return $activeItems.length ? $activeItems.eq(0) : this.$items.eq(0);
		},

		/**
		 * Expexts the item el to have a data-vimeoid attribute and returns its value as string.
		 *
		 * @param itemEl
		 * @returns {*|jQuery|string}
		 */
		getVimeoIdForItem: function(itemEl){
			return $(itemEl).data('vimeoid') || "";
		},

		/**
		 * Calculates and returns the current dimensions of the video.
		 * @returns {{}}
		 */
		calcVideoDims: function(){
			var videoDims = {};

			//Video will never be wider than  what is defined in this.opts.maxVideoWidth
			videoDims.width = Math.min(this.$el.width(), this.opts.maxVideoWidth);
			videoDims.height = (1/this.opts.videoRatio) * videoDims.width;

			return videoDims;
		},

		/**
		 * Closes item.
		 *
		 * @param itemEl
		 * @returns {VideoAccordion}
		 */
		closeItem: function(itemEl){
			var $itemEl = $(itemEl);

			if(!_isMobileBrowser && this.hasVideoSupport){
				this.pauseItemVideo(itemEl);
			}

			$itemEl.removeClass('b_active');
			this.updateDimensions($itemEl);

			return this;
		},

		/**
		 * Opens item and triggers close for all other items.
		 *
		 * @param itemEl
		 * @returns {VideoAccordion}
		 */
		openItem: function(itemEl){
			var videoAccordion = this,
				$itemEl = $(itemEl),
				$itemsToClose = this.$items.not(itemEl);
			$itemEl.addClass('b_active');
			this.updateDimensions($itemEl);

			if(!_isMobileBrowser && this.hasVideoSupport){
				this.playItemVideo(itemEl);
			}

			$itemsToClose.each(function(){
				videoAccordion.closeItem(this);
			});
			return this;
		},

		/**
		 * Triggers openItem id item is closed and triggers closeItem if item is open.
		 *
		 * @param itemEl
		 * @returns {VideoAccordion}
		 */
		toggleItem: function(itemEl){
			var $itemEl = $(itemEl);
			return $itemEl.hasClass('b_active') ? this.closeItem($itemEl) : this.openItem($itemEl);
		},

		/**
		 * Pauses the video of the given item.
		 *
		 * @param itemEl
		 */
		pauseItemVideo: function(itemEl){
			var $itemEl = $(itemEl),
				$video = $itemEl.find("iframe[src*='vimeo.com']");

			if($video.length){
				$video.vimeo("pause");
			}
		},

		/**
		 * Plays the video of the given item.
		 *
		 * @param itemEl
		 */
		playItemVideo: function(itemEl){
			var $itemEl = $(itemEl),
				$video = $itemEl.find("iframe[src*='vimeo.com']"),
				vimeoId = this.getVimeoIdForItem($itemEl);

			if(vimeoId && !$video.length){
				var vDims = this.calcVideoDims(),
					$itemContent = $itemEl.find(this.s.itemContentSelector);

				$video = vimeoEmbeddingTemplate({
					"width": vDims.width,
					"height": vDims.height,
					"vimeoID": vimeoId
				});
				$itemContent.append($video);
			} else if($video.length && !this.s.disableVideo){
				$video.vimeo("play");
			}
		},

		/**
		 * Updates the dimensions of the accordion.
		 * Will be triggered on window resize event.
		 *
		 * @param itemEl
		 */
		updateDimensions: function(itemEl){
			var $itemEl = $(itemEl),

				vDims = this.calcVideoDims();

			if($itemEl.hasClass('b_active')){
				var $video = $itemEl.find("iframe[src*='vimeo.com']");
				$itemEl.css('height', vDims.height);
				$video.attr('width', vDims.width);
				$video.attr('height', vDims.height);
			}
			else {
				$itemEl.css('height','');
			}
		},

			/**
			 * enable video playing
			 */
		enableVideos: function() {
			this.s.disableVideo = false;
		},

			/**
			 * disable video playing
			 */
		disableVideos: function() {
			this.s.disableVideo = true;

		}
	};

	return VideoAccordion;

});