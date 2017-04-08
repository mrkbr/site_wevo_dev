## TCEFORM
TCEFORM {
	pages {
		layout.label = Druckverhalten
		layout.altLabels.0 = normal
		layout.altLabels.1 = drucken unterbinden
		layout.removeItems = 2,3
		backend_layout.removeItems = -1
		backend_layout_next_level.removeItems = -1


#		media.label = Hintergrundbild für Desktop
	}
#	tt_content {
#		// NOBODY wants or should edit this
#		// really, let them disappear
#		table_bgColor.disabled = 1
#		table_border.disabled = 1
#		table_cellspacing.disabled = 1
#		table_cellpadding.disabled = 1
#		pi_flexform.table.sDEF {
#			acctables_nostyles.disabled = 1
#			acctables_tableclass.disabled = 1
#		}
#	}
}

TCEMAIN.table.tt_content {
	disablePrependAtCopy = 1
	disableHideAtCopy = 1
}

TCEMAIN.table.pages {
	disablePrependAtCopy = 1
}


TCEFORM.tt_content {
	header_layout.disabled = 1
	header_layout.removeItems = 1,2,3,4,5,100
	header_position.disabled = 1
	date.disabled = 1
	spaceBefore.disabled = 1
	spaceAfter.disabled = 1
	section_frame.disabled = 1
}

# additional configuration of the elements we want to use
# set values of wevo_headerlead layout field
TCEFORM.tt_content {
	layout.types.wevo_headerlead {
		addItems.1 = Farbe silber
		addItems.2 = Farbe cyan
	}
	layout.types.wevo_videomodule {
		addItems.1 = Farbe silber
		addItems.2 = Farbe cyan
	}
	header_link.disabled = 1
	# @todo check if this works (changing the form type) with a new version of pagetsconfig
	header.config.form_type = text
	header.config.rows = 3
	# @todo check if this works (changing the form type) with a new version of pagetsconfig
	subheader.config.form_type = text
	subheader.config.rows = 3
}

## add menu type "Branchen Übersicht" for the overview pages
TCEFORM.tt_content.menu_type {
	addItems.11 = Branchen-Übersicht (groß)
	addItems.12 = Branchen-Übersicht (klein)
	addItems.13 = Submenü mit Akkordeon (lädt Inhalte der Unterseiten)
	keepItems = 11,12,13
}
TCEFORM.tt_content {
	layout.types.menu.disabled = 1
}

## add a dropdown for the animated icons that are available
TCEFORM.tt_content {
	layout.types.wevo_keyvisual {
		addItems.0 = (kein Icon)
		addItems.1 = Icon Wärmeleitfähigkeit
		addItems.2 = Icon Brandverhalten (Flammschutz)
		addItems.3 = Icon Rheologische Eigenschaften (Fließverhalten)
		addItems.4 = Icon Topfzeit (Reaktivität)
		addItems.5 = Icon Mechanische Eigenschaften
		addItems.6 = Icon Temperatureinsatzbereich
		addItems.12 = Icon Alterungsbeständigkeit
		addItems.11 = Icon Elektrische Eigenschaften (Durchschlagsfestigkeit)
		addItems.10 = Icon Medienbeständigkeit (Chemische Beständigkeit)
	}
}
TCEFORM.tt_content.layout.types.wevo_textimage {
	addItems.1 = Text links, Bild rechts (klein)
	addItems.2 = Text links, Bild rechts (groß)
	addItems.3 = Text rechts, Bild links (klein)
	addItems.4 = Text rechts, Bild links (groß)
	addItems.5 = Bild oben, Text unten (Bild entfällt auf Mobile!)
}
TCEFORM.tt_content.header_layout.types.wevo_propertyteaser {
	disabled = 0
	altLabels.1 = Icon Wärmeleitfähigkeit
	altLabels.2 = Icon Brandverhalten (Flammschutz)
	altLabels.3 = Icon Rheologische Eigenschaften (Fließverhalten)
	altLabels.4 = Icon Topfzeit (Reaktivität)
	altLabels.5 = Icon Mechanische Eigenschaften
	addItems.6 = Icon Temperatureinsatzbereich
	addItems.12 = Icon Alterungsbeständigkeit
	addItems.11 = Icon Elektrische Eigenschaften (Durchschlagsfestigkeit)
	addItems.10 = Icon Medienbeständigkeit (Chemische Beständigkeit)
	altLabels.0 = kein Icon
	# remove "hidden"
	removeItems = 100
}
TCEFORM.tt_content.layout.types.wevo_propertyteaser {
	addItems.1 = Bildteaser
	addItems.2 = Textteaser groß, hellgrau (nicht verlinkt)
	addItems.3 = Textteaser groß, dunkelgrau (nicht verlinkt)
	addItems.4 = Textteaser groß, gelb (nicht verlinkt)
	addItems.5 = Textteaser groß, dunkelblau (nicht verlinkt)
	addItems.6 = Textteaser klein, hellgrau
	addItems.7 = Textteaser klein, dunkelgrau
	addItems.8 = Textteaser klein, gelb
	addItems.9 = Textteaser klein, dunkelblau
	addItems.10 = Farbfläche hellgrau
	addItems.11 = Farbfläche dunkelgrau
	addItems.12 = Farbfläche gelb
	addItems.13 = Farbfläche dunkelblau
}
TCEFORM.tt_content.bodytext.types.wevo_productmodule {
	config.rows = 5
}
TCEFORM.tt_content.layout.types.wevo_table {
	addItems.1 = 4-spaltiges Layout, blaue Zeilen
	addItems.2 = 4-spaltiges Layout, blau und graue Zeilen
}
TCEFORM.tt_content.tx_b13ce_config.types.wevo_2collist {
	altLabels.0 = nicht anzeigen
	altLabels.1 = anzeigen
	removeItems = 2
}
TCEFORM.tt_content.tx_b13ce_config.types.wevo_2collistRTE {
	altLabels.0 = nicht anzeigen
	altLabels.1 = anzeigen
	removeItems = 2
}


TCEFORM.tt_content.tx_b13ce_list.types {
	wevo_startpagevideoslider.foreign_table_configuration.tx_b13ce_items {
		bodytext.config.rows = 3
		bodytextalt.config.rows = 3
	}
	wevo_startpagenews.foreign_table_configuration.tx_b13ce_items {
		subheader.config.form_type = text
		subheader.config.rows = 5
	}
	wevo_startpageaccordion.foreign_table_configuration.tx_b13ce_items {
		config.addItems.1 = Icon &quot;Kundenspezifisch&quot;
		config.addItems.2 = Icon &quot;Innovation&quot;
		config.addItems.3 = Icon &quot;Wissenstransfer&quot;
		config.addItems.4 = Icon &quot;Qualifizierung&quot;
		layout.addItems.1 = dunkelgrauer Hintergrund
		layout.addItems.2 = gelber Hintergrund
		layout.addItems.3 = dunkelblauer Hintergrund
		layout.addItems.4 = hellgrauer Hintergrund
	}
	wevo_glossary.foreign_table_configuration.tx_b13ce_items {
		linktype.addItems.1 = (Glossar) Icon Wärmeleitfähigkeit
		linktype.addItems.2 = (Glossar) Icon Brandverhalten (Flammschutz)
		linktype.addItems.3 = (Glossar) Icon Rheologische Eigenschaften (Fließverhalten)
		linktype.addItems.4 = (Glossar) Icon Topfzeit (Reaktivität)
		linktype.addItems.5 = (Glossar) Icon Mechanische Eigenschaften
		linktype.addItems.6 = (Glossar) Icon Temperatureinsatzbereich
		linktype.addItems.12 = (Glossar) Icon Alterungsbeständigkeit
		linktype.addItems.11 = (Glossar) Icon Elektrische Eigenschaften (Durchschlagsfestigkeit)
		linktype.addItems.10 = (Glossar) Icon Medienbeständigkeit (Chemische Beständigkeit)
		linktype.removeItems = 0
	}
}

# @todo: the above foreign_table_configuration does not work since 7.4. Once that bug is fixed, remove the lines below
TCEFORM.tx_b13ce_items {
	config.addItems.1 = Icon &quot;Kundenspezifisch&quot;
	config.addItems.2 = Icon &quot;Innovation&quot;
	config.addItems.3 = Icon &quot;Wissenstransfer&quot;
	config.addItems.4 = Icon &quot;Qualifizierung&quot;
	layout.addItems.1 = dunkelgrauer Hintergrund
	layout.addItems.2 = gelber Hintergrund
	layout.addItems.3 = dunkelblauer Hintergrund
	layout.addItems.4 = hellgrauer Hintergrund
}

TCEFORM.tx_b13ce_items {
	linktype.addItems.1 = (Glossar) Icon Wärmeleitfähigkeit
	linktype.addItems.2 = (Glossar) Icon Brandverhalten (Flammschutz)
	linktype.addItems.3 = (Glossar) Icon Rheologische Eigenschaften (Fließverhalten)
	linktype.addItems.4 = (Glossar) Icon Topfzeit (Reaktivität)
	linktype.addItems.5 = (Glossar) Icon Mechanische Eigenschaften
	linktype.addItems.6 = (Glossar) Icon Temperatureinsatzbereich
	linktype.addItems.12 = (Glossar) Icon Alterungsbeständigkeit
	linktype.addItems.11 = (Glossar) Icon Elektrische Eigenschaften (Durchschlagsfestigkeit)
	linktype.addItems.10 = (Glossar) Icon Medienbeständigkeit (Chemische Beständigkeit)
	linktype.removeItems = 0
}

# Branch Image Slider
TCEFORM.tt_content {
	header_link.types.wevo_branchImageSlider.disabled = 0
	wevo_videoid.types.wevo_branchImageSlider.disabled = 1
	wevo_videoid2.types.wevo_branchImageSlider.disabled = 1
	wevo_videoid3.types.wevo_branchImageSlider.disabled = 1
	wevo_videoid4.types.wevo_branchImageSlider.disabled = 1
	image.types.wevo_branchImageSlider.label = Bild für Automotive
	wevo_image2.types.wevo_branchImageSlider.label = Bild für Haushalt
	wevo_image3.types.wevo_branchImageSlider.label = Bild für Industrie
	wevo_image4.types.wevo_branchImageSlider.label = Bild für Energie
}