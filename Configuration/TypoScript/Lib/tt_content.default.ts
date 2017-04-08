tt_content.default {
	dataProcessing.11 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
	dataProcessing.11 {
		references.fieldName = wevo_image2
		references.table = tt_content
		sorting = sorting_foreign
		as = thisimage2
	}
	dataProcessing.12 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
	dataProcessing.12 {
		references.fieldName = wevo_image3
		references.table = tt_content
		sorting = sorting_foreign
		as = thisimage3
	}
	dataProcessing.13 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
	dataProcessing.13 {
		references.fieldName = wevo_image4
		references.table = tt_content
		sorting = sorting_foreign
		as = thisimage4
	}
}

tt_content.wevo_managementvitaitem =< tt_content.default
tt_content.wevo_managementvitaitem {
	dataProcessing.16 = TYPO3\CMS\Frontend\DataProcessing\CommaSeparatedValueProcessor
	dataProcessing.16 {
		if.isTrue.field = wevo_bodytext2
		fieldName = wevo_bodytext2
		fieldDelimiter.char.cObject = TEXT
		fieldDelimiter.char.cObject {
			field = table_delimiter
		}
		fieldEnclosure.char.cObject = TEXT
		fieldEnclosure.char.cObject {
			field = table_enclosure
		}
		maximumColumns = 2
		as = table
	}
}

tt_content.wevo_table =< tt_content.default
tt_content.wevo_table {
	dataProcessing {
		11 = TYPO3\CMS\Frontend\DataProcessing\CommaSeparatedValueProcessor
		11 {
			fieldName = bodytext
			fieldDelimiter.char.cObject = TEXT
			fieldDelimiter.char.cObject {
				field = table_delimiter
			}
			fieldEnclosure.char.cObject = TEXT
			fieldEnclosure.char.cObject {
				field = table_enclosure
			}
			maximumColumns.field = cols
			as = table
		}
	}
}


tt_content.wevo_contactbox =< tt_content.default
tt_content.wevo_contactbox {
	# set the contact email and label
	variables {
		contactemail = TEXT
		contactemail.data = register:contactemail
		contactemaillabel = TEXT
		contactemaillabel.data = register:contactemaillabel
	}
}


tt_content.wevo_interactivegraphic =< tt_content.default
tt_content.wevo_interactivegraphic {
	# this is the list items dataProcessing from tx_b13ce_items
	dataProcessing.40 {
		dataProcessing {
			50 = TYPO3\CMS\Frontend\DataProcessing\SplitProcessor
			50 {
				fieldName = subheader2
				delimiter = ,
				as = hotspotxy
			}
			51 < .50
			51.fieldName = subheaderalt
			51.as = hotspot2xy
			52 < .50
			52.fieldName = subheader2alt
			52.as = flagxy
		}
	}
}