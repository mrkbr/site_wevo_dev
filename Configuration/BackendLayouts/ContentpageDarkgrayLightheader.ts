mod.web_layout.BackendLayouts {
	ContentpageDarkgrayLightheader {
		title = Inhaltsseite (dunkelgrau mit hellem Header)
		config {
			backend_layout {
				colCount = 1
				rowCount = 1
				rows {
					1 {
						columns {
							1 {
								name = Seiteninhalt
								colPos = 0
								colspan = 1
								allowed = menu,wevo_headerlead,wevo_videomodule,wevo_2collist,wevo_2collistRTE,wevo_simpletext,wevo_simpletextRTE,wevo_timeline,gridelements_pi1,wevo_productmodule,wevo_certificates,header,text,textpic,image
								allowedGridTypes = Propertyteasercontainer
							}
						}
					}
				}
			}
		}
	}
}