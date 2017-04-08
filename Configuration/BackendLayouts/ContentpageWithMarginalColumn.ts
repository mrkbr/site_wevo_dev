mod.web_layout.BackendLayouts {
	ContentpageWithMarginalColumn {
		title = Inhaltsseite mit Marginalspalte
		config {
			backend_layout {
				colCount = 4
				rowCount = 2
				rows {
					1 {
						columns {
							1 {
								name = Key Visual (optional)
								colPos = 2
								colspan = 4
								allowed = wevo_keyvisual,header,text,textpic,image
							}
						}
					}
					2 {
						columns {
							1 {
								name = Seiteninhalt
								colPos = 0
								colspan = 3
								allowed = wevo_headerlead,wevo_textimage,wevo_quote,wevo_imageswitcher,wevo_table,wevo_interactivegraphic,header,text,textpic,image
							}
# marginal column is set using typoscript and inherited from startpage
#							2 {
#								name = Marginalspalte
#								colPos = 1
#								colspan = 1
#							}
						}
					}
				}
			}
		}
	}
}