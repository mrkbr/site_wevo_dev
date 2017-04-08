RTE.default {

	# remove tags that are not neccessary and are used by word, which messes the layout
	removeTags = center,font,sdfield,strike,u,div,strong,span,
	removeTagsAndContents = style,script,sdfield,font,meta

	# blockstyle and textstyles are defined by ce and not via the rte
	showButtons = bold, italic, unorderedlist, chMode, link, unlink, chMode, insertcharacter, copy, cut, paste, undo, redo, removeformat, table, tableproperties, toggleborders, rowproperties, rowinsertabove, rowinsertunder, rowdelete, rowsplit, columnproperties, columninsertbefore, columninsertafter, columndelete, columnsplit, cellproperties,
	toolbarOrder = bold, italic, bar, bar, unorderedlist, bar, link, unlink, bar, copy, paste, undo, redo, bar, removeformat, chMode, insertcharacter

	# path to rte.css which is created from the main layout without div styling
	contentCSS = EXT:site_wevo/Resources/Public/Css/rte.css

	classesTable := addToList(b_table-4col,b_table-3col,b_td-detail)
	buttons {
		formatblock.removeItems := addToList(h1,h2,h3,h4,h5,h6,address,article,aside,div,footer,header,nav,pre,blockquote,section)

		# allow classes in rte
		blockstyle.tags >
	}


	proc {
		# tags that should not be cleaned from the rte
#		allowTags = a,b,br,em,h1,h2,h3,h4,h5,h6,i,li,ol,ul,p,strong,sub,sup,u,table,th,td,tr,tbody,thead
		allowTags = a,b,br,em,h1,h2,h3,h4,h5,h6,i,li,ol,ul,p,strong,sub,sup,u
		# tags that should be cleaned via the rte
		denyTags = span
#		allowTagsOutside = h1,h2,h3,h4,h5,h6,ul,ol,li,table,th,td,tr,tbody,thead,
		allowTagsOutside = h1,h2,h3,h4,h5,h6,ul,ol,li
		preserveDIVSections >
		keepPDIVattribs >

		# allow classes in rte
#		allowedClasses := addToList(b_table-4col,b_table-3col,b_td-detail)

		HTMLparser_rte {
			# remove / allow tags
			allowTags < RTE.default.proc.allowTags
			denyTags < RTE.default.proc.denyTags

			# remove all attributes from tags (ul, ol, li)
			noAttrib = ul, ol, li

			tags {
				# remove style attr from span
				span.allowedAttribs = class
				span.fixAttrib.style.unset = 1
				span.rmTagIfNoAttrib = 0
				p < .span
				h1 < .span
				h2 < .span
				h3 < .span
				h4 < .span
				h5 < .span
				pre < .span
				blockquote < .span
				ul < .span
				ol < .span
				li < .span

				# remove table classes
#				table {
#					fixAttrib.style.unset = 1
#					fixAttrib.width.unset = 1
#					fixAttrib.height.unset = 1
#				}
#				th < .table
#				tr < .table
#				td < .table
			}

			removeTags >
			# remove html comments from input
			removeComments = 1

			# tags that do not match classes
			keepNonMatchedTags = 0
		}

		# clean html from database
		entryHTMLparser_db = 1
		entryHTMLparser_db {
			# remove all attributes from tags
			noAttrib < RTE.default.proc.HTMLparser_rte.noAttrib
			allowTags < RTE.default.proc.allowTags
			tags < RTE.default.proc.HTMLparser_rte
		}
	}

	FE {
		proc {
			allowTags < RTE.default.proc.allowTags
			allowedClasses < RTE.default.allowedClasses
			tags < RTE.default.proc.HTMLparser_rte
		}
	}
}

## define classnames in rte
#RTE.classes {
#	b_table-4col {
#		name = Tabelle vier Spalten
#		value =
#	}
#	b_table-3col {
#		name = Tabelle drei Spalten
#		value =
#	}
#	b_td-detail {
#		name = Detailzelle
#		value =
#	}
#}

# Remove default alt/title tags for links set within the RTE
RTE.classesAnchor.externalLink.titleText >
RTE.classesAnchor.externalLink.altText >
RTE.classesAnchor.internalLink.titleText >
RTE.classesAnchor.internalLink.altText >
RTE.classesAnchor.mail.titleText >
RTE.classesAnchor.mail.altText >
RTE.classesAnchor.download.titleText >
RTE.classesAnchor.download.altText >