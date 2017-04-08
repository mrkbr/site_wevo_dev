lib.getInfoPageMenu = HMENU
lib.getInfoPageMenu {
	special = directory
	special.value = {$wevo.pages.marginalcolumnlinksUid}
	1 = TMENU
	1.NO.allWrap = <li> | </li>
	1.NO.ATagParams = class="b_m2 b_btn b_icon b_icon-LinkOhneKreis_L text-uppercase c_btnVertical"
	# no <ul> wrapper needed, this menu is merged with the glossar in
	# Web/typo3conf/ext/site_wevo/Resources/Private/Templates/Contentelements/wevo_linklist.html
}