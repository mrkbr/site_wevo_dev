mod.web_layout.BackendLayouts {
	Startpage {
		title = Startseite Wevo
		config {
			backend_layout {
				colCount = 1
				rowCount = 2
				rows {
					1 {
						columns {
							1 {
								name = Seiteninhalt
								colPos = 0
								colspan = 1
								allowed = wevo_startpagevideoslider,wevo_shortfactsslider,wevo_startpagenews,wevo_linkmodule,wevo_startpagevideo,wevo_startpagepropertymodule,wevo_startpageaccordion,wevo_branchslider,wevo_branchImageSlider,header,text,textpic,image,dce_dceuid1, dce_dceuid2

							}
						}
					}
					2 {
						columns {
							1 {
								name = Marginalspalte der Unterseiten - wird auf die Unterseiten vererbt
								colPos = 1
								colspan = 1
								allowed = wevo_glossarylist,wevo_contactbox,header,text,textpic,image,
							}
						}
					}
				}
			}
		}
	}
}
