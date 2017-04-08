

define('vimeoUtility', [
	'jquery'
	, 'jquery.vimeo.api'
], function($) {

	var me = this;

	function initialize() {

		$(function() {
			var $vimeo = $('iframe[id^="bJS_vimeoItem"]');

				// register "playProgress" and "finish" event listener
			$vimeo.on("playProgress", function() {});
			$vimeo.on("finish", function() {});
		});

		return me;
	}

		/**
		 * start vimeo video and sync preview progressbar with it
		 * @param $slide
		 * @param $progressbar
		 * @param callback
		 */
	me.initVimeoSlice = function($slide, $progressbar, callback) {

		var $vimeo = $slide.find('[id^="bJS_vimeoItem"]');

		if (!$vimeo) { return false; }

		// on progress
		// sync video with preview progressbar
		$vimeo.off("playProgress").on("playProgress", function(event, data) {
			$progressbar.css({width: parseInt(data.percent * 100, 10) + '%'});
		});

		// on finish
		// unbind events and restart slider
		$vimeo.off("finish").on("finish", function() {
			$vimeo.off("playProgress finish");
			if ($.isFunction(callback)) {
				callback();
			}
		});

		return $vimeo;
	};


		/**
		 * set vimeo videos to fullscreen
		 * @param {jQuery object} $video
		 * @param ratio
		 * @param {jQuery object} $container
		 */
	me.setVideosFullscreen = function($video, ratio, $container) {

		$video.each(function() {
			var
				windowWidth    = $container.width()
				, windowHeight = $container.height();

			if (windowWidth / windowHeight > ratio) {

				$(this).width(windowWidth).height(windowWidth / ratio).css({
					'margin-top'    : '-' + ((windowWidth / ratio) - windowHeight) / 2 + 'px'
					, 'margin-left' : 0
				});

			} else {

				$(this).height(windowHeight).width(windowHeight * ratio).css({
					'margin-left'  : '-' + ((windowHeight * ratio) - windowWidth) / 2 + 'px'
					, 'margin-top' : 0
				});
			}
		});
	};


	return initialize();
});

