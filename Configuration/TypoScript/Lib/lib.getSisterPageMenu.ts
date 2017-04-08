lib.getSisterPageMenu = HMENU
lib.getSisterPageMenu {
	# this starts at the parent page of the current page
	entryLevel = -3
	1 = TMENU
	1 {
		# hide sister pages wrap, because we only want to show the current active leveltree title
		# otherwise there will be empty wrappers
		# WEVO-220
		NO.doNotShowLink = 1
		ACT = 1
		ACT.allWrap = <div class="b_headline b_m1 b_is-text-cyan text-uppercase"> | </div>
		ACT.doNotLinkIt = 1
	}
	2 = TMENU
	2 {
		NO.allWrap = <li> | </li>
		NO.ATagParams = class="b_m2 b_btn"
		ACT < .NO
		ACT = 1
		ACT.ATagParams = class="b_m2 b_btn b_active"
		wrap = <ul class="list-unstyled b_is-btnList b_is-btnList-gray"> | </ul>
	}
	wrap = <div class="b_item b_sisterpagemodule"> | </div>
}