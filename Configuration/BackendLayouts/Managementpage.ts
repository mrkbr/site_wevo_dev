mod.web_layout.BackendLayouts {
	Managementpage {
		title = Management Seite
		config {
			backend_layout {
				colCount = 1
				rowCount = 5
				rows {
					1 {
						columns {
							1 {
								name = Key Visual (optional)
								colPos = 2
								colspan = 1
								allowed = wevo_keyvisual,header,text,textpic,image
							}
						}
					}
					2 {
						columns {
							1 {
								name = Seiteninhalt
								colPos = 0
								colspan = 1
								allowed = wevo_managementheader,wevo_managementsubheader,wevo_managementvitaitem,header,text,textpic,image
							}
						}
					}
				}
			}
		}
	}
}