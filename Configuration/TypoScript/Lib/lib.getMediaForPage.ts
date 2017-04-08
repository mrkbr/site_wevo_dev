lib.getMediaForPage = FILES
lib.getMediaForPage {
	references {
		table = pages
		uid.field = uid
		fieldName = media
	}
	maxItems = 1
	renderObj = IMAGE
	renderObj {
		file.import.data = file:current:uid
		file.treatIdAsReference = 1
		file.height.field = height
		file.width.field = width
		altText.field = alt
		params = class="{field:class}"
		params.insertData = 1
	}
}