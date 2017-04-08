# set permissions
TCEMAIN.permissions {
	# The page owner can do anything (default)
	user = show,edit,delete,new,editcontent

	# Group can do anything
	# (normally "delete" is disabled)
	group = show,edit,delete,new,editcontent

	# Everybody can at least see the page
	# (normally everybody can do nothing)
	everybody = show

	# BE Users Owner (uid) for new pages (UID 2 = "Wevo editor")
	userid = 2

	# BE Group Owner (uid) for new pages (UID 1 might be "Editors" or "Basic Access")
	groupid = 1
}

# changes to TCEMAIN configuration for copying
TCEMAIN.table.tt_content.disablePrependAtCopy = 1
TCEMAIN.table.tt_content.disableHideAtCopy = 1
TCEMAIN.table.pages.disablePrependAtCopy = 1