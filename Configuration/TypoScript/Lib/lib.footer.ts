lib.footer = COA
lib.footer {
	# sitemap
	# the sitemap consists of three columns, the parent items are defined in
	# constants wevo.pages.footercol{n}
	10 = COA
	10 {
		10 = HMENU
		10 {
			special = list
			special.value = {$wevo.pages.footercol-1}
			1 = TMENU
			1.expAll = 1
			1.NO.allWrap = <li> | </li>
			1.NO.wrapItemAndSub = <ul class="list-unstyled"> | </ul>
			2 = TMENU
			2.NO.allWrap = <li> | </li>
			wrap = <div class="col-xs-12 col-sm-8"> | </div>
		}
		20 < .10
		20.special.value = {$wevo.pages.footercol-2}
		30 < .10
		30.special.value = {$wevo.pages.footercol-3}
		wrap = <div class="b_has-dividerTop"><div class="container"><div class="row"> | </div></div></div>
	}

	# contact/imprint
	20 = COA
	20 {
		10 = TEXT
		10 {
			value (
				<ul class="list-unstyled"><li><span>{LLL:EXT:site_wevo/Resources/Private/Language/locallang.xml:contact}</span></li></ul>
				<p class="c_is-contact">WEVO-CHEMIE GmbH <br>
				Schönbergstraße 14 <br>
				D-73760 Ostfildern-Kemnat <br>
				T +49 (0)711 – 167 61-0 <br>
				F +49 (0)711 – 167 61-44 <br>
				<a class="b_is-text-WevoCyan" href="mailto:info@wevo-chemie.de">info@wevo-chemie.de</a></p>
			)
			insertData = 1
			wrap = <div class="col-xs-24 col-sm-8"> | </div>
		}
		20 = COA
		20 {

			20 = HMENU
			20 {
				special = list
				special.value = {$wevo.pages.metamenu-2}
				1 = TMENU
				1.expAll = 1
				1.NO.allWrap = <li> | </li>
				1.NO.wrapItemAndSub = <ul class="list-unstyled"> | </ul>
				2 = TMENU
				2.NO.allWrap = <li> | </li>
				# we actually include the content of the pages here for some reason as an accordion
				2.NO.doNotLinkIt = 1
				2.NO.stdWrap.cObject = COA
				2.NO.stdWrap.cObject {
					10 = TEXT
					10.field = title
					10.noTrimWrap = |<a class="collapsed" data-toggle="collapse" href="#bJS_collapseImprint-{field:uid}" aria-expanded="false" aria-controls="bJS_collapseImprint-{field:uid}"><i class="b_icon c_rotateIconIfOpened b_icon-DropdownOhneKreis_L"></i> |</a>|
					10.noTrimWrap.insertData = 1
					20 = CONTENT
					20.table = tt_content
					20.select.pidInList.field = uid
					20.select.orderBy = sorting
					20.where = colPos = 0
					20.stdWrap.dataWrap = <div class="collapse" id="bJS_collapseImprint-{field:uid}"> | </div>
				}
			}

			30 = HMENU
			30 {
				special = list
				special.value = {$wevo.pages.metamenu-3}
				1 = TMENU
				1.expAll = 1
				1.NO.allWrap = <li> | </li>
				1.NO.wrapItemAndSub = <ul class="list-unstyled"> | </ul>
				2 = TMENU
				2.NO.allWrap = <li> | </li>
			}

			wrap = <div class="col-xs-24 col-sm-16"> | </div>
		}
		wrap = <div class="b_has-dividerTop"><div class="container"><div class="row"> | </div></div></div>
	}

	wrap.cObject = CASE
	wrap.cObject {
		key.data = pagelayout

		pagets__ContentpageDark = TEXT
		pagets__ContentpageDark.value = <footer id="bJS_footer" class="b_ct_footer b_grayFooter"> | </footer>

		pagets__ContentpageDarkgray = TEXT
		pagets__ContentpageDarkgray.value = <footer class="b_ct_footer b_grayFooter"> | </footer>

		pagets__ContentpageDarkgrayLightheader = TEXT
		pagets__ContentpageDarkgrayLightheader.value = <footer class="b_ct_footer b_grayFooter"> | </footer>

		default = TEXT
		default.value = <footer id="bJS_footer" class="b_ct_footer"> | </footer>
	}
}