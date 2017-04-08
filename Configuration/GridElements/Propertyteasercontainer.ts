tx_gridelements.setup {
	Propertyteasercontainer {
		title = Eigenschaften Teaser Container
		description = Fügt einen Container für die Eigenschaften-Teaser ein. Eigenschaften-Teaser können nur innerhalb dieses Containers erstellt werden.
		config {
			colCount = 1
			rowCount = 1
			rows {
				1 {
					columns {
						1 {
							name = Inhalt
							colPos = 10
							allowed = wevo_propertyteaser
						}
					}
				}
			}
		}
#		icon = ../typo3conf/ext/site_elkwue/Resources/Public/Assets/Icons/accordion.png
	}
}