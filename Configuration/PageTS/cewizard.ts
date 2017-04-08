# rename the wizard's tab
mod.wizards.newContentElement.wizardItems.wevostandard.header = Wevo Elemente
mod.wizards.newContentElement.wizardItems.wevostandard.show = *

# add the elements we want to the new content element wizard
mod.wizards.newContentElement.wizardItems.wevostandard.elements {
	wevo_keyvisual {
		iconIdentifier = content-text
		title = Wevo Keyvisual-Element
		description = Fügt das Keyvisual-Modul (mit Headline, animiertem Icon und Hintergrundbild) ein.
		tt_content_defValues.CType = wevo_keyvisual
		tt_content_defValues.layout = 0
	}
	wevo_headerlead {
		iconIdentifier = content-header
		title = Wevo Header mit Lead
		description = Fügt einen Header mit optionalem Lead-Text ein.
		tt_content_defValues.CType = wevo_headerlead
		tt_content_defValues.layout = 1
	}
	wevo_textimage {
		iconIdentifier = content-textpic
		title = Text mit Bild
		description = Fügt eine Text/Bild-Kombination oder einen einfachen Text ein.
		tt_content_defValues.CType = wevo_textimage
		tt_content_defValues.layout = 1
	}
	wevo_quote {
		iconIdentifier = content-text
		title = Zitat Element
		description = Fügt ein Zitat-Modul an der aktuellen Position ein.
		tt_content_defValues.CType = wevo_quote
	}
	wevo_videomodule {
		iconIdentifier = content-text
		title = Wevo Videomodul (für Branchenseiten)
		description = Fügt das Video-Modul (mit Loop-Video und Detailvideo) ein.
		tt_content_defValues.CType = wevo_videomodule
	}
	wevo_imageswitcher {
		iconIdentifier = content-image
		title = Wevo Image Switcher Modul
		description = Fügt das Image Switcher Modul an der aktuellen Position ein.
		tt_content_defValues.CType = wevo_imageswitcher
	}
	wevo_glossarylist {
		iconIdentifier = content-text
		title = Wevo Glossar
		description = Fügt Glossar-Elemente an der aktuellen Position ein. Die Glossar-Elemente werden zusammen mit dem Info-Menü ausgegeben.
		tt_content_defValues.CType = wevo_glossarylist
	}
	wevo_contactbox {
		iconIdentifier = content-text
		title = Wevo Kontakt Box
		description = Fügt die Kontaktbox für die Marginalspalte ein.
		tt_content_defValues.CType = wevo_contactbox
	}
	wevo_propertyteaser {
		iconIdentifier = content-image
		title = Wevo Eigenschaften Teaser
		description = Fügt Eigenschaften Teaser ein.
		tt_content_defValues.CType = wevo_propertyteaser
		tt_content_defValues.layout = 1
	}
	wevo_2collist {
		iconIdentifier = content-text
		title = Wevo 2-Spalten-Listenelement
		description = Fügt ein 2-Spalten-Listenelement ein.
		tt_content_defValues.CType = wevo_2collist
	}
	wevo_2collistRTE {
		iconIdentifier = content-text
		title = Wevo 2-Spalten-Listenelement (mit RTE)
		description = Fügt ein 2-Spalten-Listenelement mit RTE ein.
		tt_content_defValues.CType = wevo_2collistRTE
	}
	wevo_timeline {
		iconIdentifier = content-image
		title = Wevo Timeline
		description = Fügt eine Timeline SVG ein.
		tt_content_defValues.CType = wevo_timeline
	}
	wevo_simpletext {
		iconIdentifier = content-header
		title = Wevo einfaches Textelement
		description = Fügt ein einfaches Textelement ein, das keine besondere Formatierung erlaubt. Ermöglicht die Texteingabe für die Karriere-Seiten oder die Impressums-Seite.
		tt_content_defValues.CType = wevo_simpletext
	}
	wevo_simpletextRTE {
		iconIdentifier = content-text
		title = Wevo einfaches Textelement mit RTE
		description = Fügt ein einfaches Textelement mit RTE ein. Ermöglicht die Texteingabe für die Karriere-Seiten oder die Impressums-Seite.
		tt_content_defValues.CType = wevo_simpletextRTE
	}
	wevo_table {
		iconIdentifier = content-table
		title = Wevo Tabelle (4spaltig)
		description = Fügt eine Tabelle im definierten 4-spaltigen Format ein.
		tt_content_defValues.CType = wevo_table
		tt_content_defValues.layout = 1
	}
	wevo_productmodule {
		iconIdentifier = content-header
		title = Wevo Produkt Modul
		description = Fügt das dreispaltige Produktmodul ein.
		tt_content_defValues.CType = wevo_productmodule
	}
	wevo_404 {
		iconIdentifier = content-image
		title = Wevo 404 Element
		description = Fügt das 404 Element ein.
		tt_content_defValues.CType = wevo_404
	}
	wevo_managementheader {
		iconIdentifier = content-header
		title = Management Lead/Einleitungstext
		description = Management Lead Text (blaue) einfügen.
		tt_content_defValues.CType = wevo_managementheader

	}
	wevo_managementsubheader {
		iconIdentifier = content-header
		title = Management Zwischenüberschrift
		description = Management Zwischenüberschrift (mit Trenner, z.B. "Vita") einfügen.
		tt_content_defValues.CType = wevo_managementsubheader

	}
	wevo_managementvitaitem {
		iconIdentifier = content-textpic
		title = Management Vita Element
		description = Management Vita Element einfügen für eine Person.
		tt_content_defValues.CType = wevo_managementvitaitem
	}
	wevo_certificates {
		iconIdentifier = content-textpic
		title = Zertifikate Modul
		description = Zertifikate Modul (3-spaltig)
		tt_content_defValues.CType = wevo_certificates
	}
	wevo_interactivegraphic {
		iconIdentifier = content-textpic
		title = Interaktive Grafik
		description = Interaktives Modul mit Hotspots für Beschreibungstexte
		tt_content_defValues.CType = wevo_interactivegraphic
	}
}

# rename the wizard's tab
mod.wizards.newContentElement.wizardItems.wevo_startpage.header = Startseitenelemente
mod.wizards.newContentElement.wizardItems.wevo_startpage.show = *

# add the elements we want to the new content element wizard
mod.wizards.newContentElement.wizardItems.wevo_startpage.elements {
	wevo_startpagevideoslider {
		iconIdentifier = content-text
		title = Startseite Video/Bild Slider
		description = Fügt den Video/Bild-Slider für die Startseite ein.
		tt_content_defValues.CType = wevo_startpagevideoslider
	}
	wevo_shortfactsslider {
		iconIdentifier = content-text
		title = Short Facts Counter (Startseite)
		description = Fügt den Short-Facts-Counter für die Startseite ein.
		tt_content_defValues.CType = wevo_shortfactsslider
	}
	wevo_startpagenews {
		iconIdentifier = content-text
		title = News Akkordion (Startseite)
		description = Fügt Nachrichtenelement als Akkordion in die Startseite ein.
		tt_content_defValues.CType = wevo_startpagenews
	}
	wevo_linkmodule {
		iconIdentifier = content-text
		title = Link Modul (Startseite)
		description = Fügt ein Link-Modul mit einem oder mehreren Links für die Startseite ein.
		tt_content_defValues.CType = wevo_linkmodule
	}
	wevo_startpagevideo {
		iconIdentifier = content-text
		title = Video Modul (Startseite)
		description = Fügt ein Video auf der Startseite ein (für Desktop-Browser).
		tt_content_defValues.CType = wevo_startpagevideo
	}
	wevo_branchslider {
		iconIdentifier = content-text
		title = Branchen Slider Modul (Startseite)
		description = Fügt den Branchen Slider für die Startseite ein für die vier Branchen Automotive, Haushalt, Industrie und Energie.
		tt_content_defValues.CType = wevo_branchslider
	}
	wevo_branchImageSlider {
		iconIdentifier = content-text
		title = Branchen Bilder Slider Modul (Startseite)
		description = Fügt den Branchen Bilder Slider für die Startseite ein für die vier Branchen Automotive, Haushalt, Industrie und Energie.
		tt_content_defValues.CType = wevo_branchImageSlider
	}
	wevo_startpagepropertymodule {
		iconIdentifier = content-text
		title = Eigenschaften-Modul (Startseite)
		description = Fügt das 3 Produkte / 9 Eigenschaften Modul für die Startseite ein.
		tt_content_defValues.CType = wevo_startpagepropertymodule
	}
	wevo_startpageaccordion {
		iconIdentifier = content-text
		title = Akkordeon (Startseite)
		description = Fügt ein Akkordion für die Startseite ein (mit Auswahlmöglichkeiten für 4 verschiedene Icons und Farbgebung).
		tt_content_defValues.CType = wevo_startpageaccordion
	}
}