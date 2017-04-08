lib.languagemenu = HMENU
lib.languagemenu {
	# language menu:
	# 0 = german, 1 = english, 2 = chinese
	special = language
	special.value = 0,1,2
	# no chinese for now, see WEVOSD-25
	special.value = 0,1
	1 = TMENU
	1 {
		NO.stdWrap.cObject = TEXT
		NO.stdWrap.cObject.value = De || En || Cn
		NO.allWrap = <li> | </li>
		ACT < .NO
		ACT = 1
		ACT.ATagParams = class="b_active"
	}
}


lib.header = COA
lib.header {

	# breadcrumb navigation
	10 = COA
	10 {
		10 = HMENU
		10 {
			special = rootline
			special.range = 1|1
			1 = TMENU
			1.NO.allWrap = <li> | </li>
			stdWrap.dataWrap (
			<div class="col-xs-15">
				<a href="#" class="pull-left bJS_toggleMenu b_toggleMenu b_icon b_icon-Menue_L"><span class="hidden-xs">{LLL:EXT:site_wevo/Resources/Private/Language/locallang.xml:menu}</span></a>
				<ol class="breadcrumb hidden-xs pull-left">
					|
				</ol>
			</div>
			)
		}
		# language menu and logo, see WEVOSD-123
		20 = COA
		20 {
			# see below, this should only be included on startpage, see WEVOSD-123
			# 10 < lib.languagemenu
			# 10.wrap = <ul class="b_header-langMenu list-inline"> | </ul>

			20 = TEXT
			20.typolink.parameter = {$wevo.pages.startpageUid}
			20.typolink.returnLast = url
			20.wrap = <a href="|" class="pull-right b_icon b_icon-wevoLogo b_logo"></a>
		}
		20.wrap = <div class="col-xs-9"> | </div>

		wrap = <nav class="b_navbar"><div class="container"><div class="row"> | </div></div></nav>
	}

	20 = COA
	20 {
		10 = COA
		10 {
			10 < lib.languagemenu

			19 = TEXT
			19.value (	
			<li class="b_ct_search">
			)

			# add the search
			20 = < plugin.tx_solr_PiSearch_Search
			21 = TEXT
			21.value = </li>
			# this did not work, the wrap was being output twice
#			20.stdWrap.wrap (
#			<li class="b_ct_search visible-xs-inline" data-test="2">
#				<a href="#">
#					<i class="b_icon b_icon-LupeOhneKreis_L b_t4"></i>
#				</a>
#			</li>
#			<li class="b_ct_search hidden-xs">
#				|
#			</li>
#			)

			wrap = <ul class="list-inline b_ct_languageMenu b_t3 b_animate"> | </ul>
		}


		# add the menu
		20 = HMENU
		20 {
			1 = TMENU
			1 {
				NO.stdWrap.prepend = LOAD_REGISTER
				NO.stdWrap.prepend.delaycounter.data = register:delaycounter
				NO.stdWrap.prepend.delaycounter.stdWrap.wrap = |+1
				NO.stdWrap.prepend.delaycounter.prioriCalc = 1
				NO.allWrap = <li> | </li>
				NO.ATagParams = class="h4 b_animate" data-transition-delay="{register:delaycounter}"
				NO.ATagParams.insertData = 1
			}
			wrap = <ul class="list-unstyled b_ct_menu"> | </ul>
		}



		wrap = <div class="b_ct_menuFlyout"><div class="container"><div class="row"><div class="col-xs-24"> | </div></div></div></div>
	}

	wrap = <header id="bJS_header" class="b_ct_header bJS_toggleMenu"> | </header>

}


[treeLevel = 0]
## add language switcher to header on startpage
lib.header.10.20.10 < lib.languagemenu
lib.header.10.20.10.wrap = <ul class="b_header-langMenu list-inline hidden-xs"> | </ul>
[global]



